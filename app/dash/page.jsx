"use client";
import React, { useEffect, useState, createContext, useContext } from "react";


import { motion } from "framer-motion";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,

  getDocs,
  deleteDoc,
  where,
  addDoc,
} from "firebase/firestore";

import { formatRelative, isToday, isThisWeek, isThisMonth } from "date-fns";
import { firestore } from "./firebasecon";



// Admin credentials from a variable (fixed as per requirement)
const fetchAdminCredentials = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "admin auth"));
    
    let adminCredentials = null;
    
    querySnapshot.forEach((doc) => {
      // Assuming there's only one document for admin
      const data = doc.data();
      adminCredentials = {
        adminId: data.adminId,
        pass: data.pass,
      };
    });

    return adminCredentials;

  } catch (error) {
    console.error("Error fetching admin credentials:", error);
    return null;
  }
};


// Initialize Firebase


// Context for user authentication and role
const AuthContext = createContext();

// AuthProvider component to manage user state and roles
export const AuthProvider = ({ children }) => {
    
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [displayUserId, setDisplayUserId] = useState(null);

  const customLogin = async (inputUserId, password) => {
  setLoading(true);

  // Step 1: Try auto-login from localStorage
  const localUserId = localStorage.getItem("userId");
  const localPassword = localStorage.getItem("password");

  if (
    inputUserId === localUserId &&
    password === localPassword &&
    localUserId &&
    localPassword
  ) {
    // Check admin match
    const ADMIN_AUTH_DATA = await fetchAdminCredentials();
    if (
      ADMIN_AUTH_DATA &&
      localUserId === ADMIN_AUTH_DATA.adminId &&
      localPassword === ADMIN_AUTH_DATA.pass
    ) {
      setCurrentUser({ id: ADMIN_AUTH_DATA.adminId, role: "admin" });
      setIsAdmin(true);
      setDisplayUserId(ADMIN_AUTH_DATA.adminId);
      return;
    }

    // Check sub-admin match
    const q = query(
      collection(firestore, "auth_users"),
      where("userId", "==", localUserId),
      where("password", "==", localPassword)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      if (userData.role === "sub-admin" && userData.approved) {
        setCurrentUser({ id: userData.userId, role: "sub-admin" });
        setIsAdmin(false);
        setDisplayUserId(userData.userId);
        return;
      }
    }

    // If local credentials invalid
    throw new Error("Stored login credentials are invalid.");
  }

  // Step 2: Normal login flow
  const ADMIN_AUTH_DATA = await fetchAdminCredentials();
  if (!ADMIN_AUTH_DATA) return console.error("Failed to fetch admin data.");

  if (inputUserId === ADMIN_AUTH_DATA.adminId && password === ADMIN_AUTH_DATA.pass) {
    setCurrentUser({ id: ADMIN_AUTH_DATA.adminId, role: "admin" });
    setIsAdmin(true);
    setDisplayUserId(ADMIN_AUTH_DATA.adminId);
    localStorage.setItem("userId", inputUserId);
    localStorage.setItem("password", password);
    return;
  }

  try {
    const q = query(
      collection(firestore, "auth_users"),
      where("userId", "==", inputUserId),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      if (userData.role === "sub-admin" && userData.approved) {
        setCurrentUser({ id: userData.userId, role: "sub-admin" });
        setIsAdmin(false);
        setDisplayUserId(userData.userId);
        localStorage.setItem("userId", inputUserId);
        localStorage.setItem("password", password);
      } else if (!userData.approved) {
        throw new Error("Your sub-admin account is awaiting admin approval.");
      } else {
        throw new Error("Unauthorized access. Please contact support.");
      }
    } else {
      throw new Error("Invalid User ID or Password.");
    }
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  } finally {
    setLoading(false);
  }
};


  const customLogout = () => {
    setIsAdmin(false);
    setCurrentUser(null);
    setDisplayUserId(null);
    localStorage.removeItem("userId");
  localStorage.removeItem("password");
  };

useEffect(() => {
  const autoLogin = async () => {
    const storedUserId = localStorage.getItem("userId");
    const storedPassword = localStorage.getItem("password");
    if (storedUserId && storedPassword) {
      try {
        await customLogin(storedUserId, storedPassword);
      } catch (err) {
        console.error("Auto-login failed", err);
      }
    }
    setLoading(false);
  };
  autoLogin();
}, []);


  const value = {
    currentUser,
    isAdmin,
    loading,
    displayUserId,
    login: customLogin,
    logout: customLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

 const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContent = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-xl">Loading...</p>
      </div>
    );
  }

  return currentUser ? <Dashboard /> : <AuthComponent />;
};

const Deshboard = () => {
  return (
    <AuthProvider>
      <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
        <AuthContent />
      </div>
    </AuthProvider>
  );
};

const getStatusColorClass = (status) => {
  switch (status) {
    case 'in process':
      return 'bg-blue-100 text-blue-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    case 'deal done':
      return 'bg-purple-100 text-purple-800';
    case 'viewed':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getRowBackgroundColorClass = (status) => {
  switch (status) {
    case 'in process':
      return 'bg-blue-900';
    case 'rejected':
      return 'bg-red-900';
    case 'deal done':
      return 'bg-green-900';
    case 'viewed':
      return 'bg-yellow-900';
    default:
      return '';
  }
};


const Dashboard = () => {
  const { currentUser, isAdmin, logout, displayUserId } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [subAdmins, setSubAdmins] = useState([]);
  const [activeTab, setActiveTab] = useState('tickets');
  const [ticketSearchTerm, setTicketSearchTerm] = useState('');
  const [subAdminSearchTerm, setSubAdminSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showAddSubAdminForm, setShowAddSubAdminForm] = useState(false);
  const [editSubAdmin, setEditSubAdmin] = useState(null);

  // New states for analytics
  const [ticketCountsByStatus, setTicketCountsByStatus] = useState({});
  const [totalTickets, setTotalTickets] = useState(0);
  const [ticketsToday, setTicketsToday] = useState(0);
  const [ticketsThisWeek, setTicketsThisWeek] = useState(0);
  const [ticketsThisMonth, setTicketsThisMonth] = useState(0);

  useEffect(() => {
    if (!currentUser) return;

    const ticketsCollectionRef = collection(firestore, "tickets");
    const qTickets = query(
      ticketsCollectionRef,
      orderBy("createdAt", "desc")
    );
    const unsubscribeTickets = onSnapshot(qTickets, (snapshot) => {
      const results = [];
      const statusCounts = {
        'open': 0,
        'viewed': 0,
        'in process': 0,
        'rejected': 0,
        'deal done': 0,
      };
      let todayCount = 0;
      let thisWeekCount = 0;
      let thisMonthCount = 0;

      snapshot.forEach((doc) => {
        const ticketData = { id: doc.id, ...doc.data() };
        results.push(ticketData);

        // Calculate status counts
        const status = ticketData.status || 'open'; // Default to 'open' if no status
        if (statusCounts[status]) {
          statusCounts[status]++;
        } else {
          statusCounts[status] = 1;
        }

        // Calculate time-based counts
        if (ticketData.createdAt?.toDate) {
          const createdAtDate = ticketData.createdAt.toDate();
          if (isToday(createdAtDate)) {
            todayCount++;
          }
          if (isThisWeek(createdAtDate)) { // isThisWeek uses startOfWeek, so it's accurate
            thisWeekCount++;
          }
          if (isThisMonth(createdAtDate)) { // isThisMonth uses startOfMonth
            thisMonthCount++;
          }
        }
      });

      setTickets(results);
      setTotalTickets(results.length);
      setTicketCountsByStatus(statusCounts);
      setTicketsToday(todayCount);
      setTicketsThisWeek(thisWeekCount);
      setTicketsThisMonth(thisMonthCount);

    }, (err) => {
      console.error("Error fetching tickets:", err);
      // Handle error, maybe set an error state
    });

    let unsubscribeSubAdmins;
    if (isAdmin) {
      const authUsersCollectionRef = collection(firestore, `auth_users`);
      unsubscribeSubAdmins = onSnapshot(authUsersCollectionRef, (snapshot) => {
        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubAdmins(results);
      }, (err) => {
        console.error("Error fetching sub-admins:", err);
      });
    }

    return () => {
      unsubscribeTickets();
      if (unsubscribeSubAdmins) unsubscribeSubAdmins();
    };
  }, [currentUser, isAdmin]);

  // Filtered tickets based on search term (now includes name, phone)
  const filteredTickets = tickets.filter(ticket => {
    const searchTermLower = ticketSearchTerm.toLowerCase();
    const matchesName = ticket.name?.toLowerCase().includes(searchTermLower);
    const matchesPhone = ticket.phone?.toLowerCase().includes(searchTermLower);
    const matchesSubject = ticket.subject.toLowerCase().includes(searchTermLower);
    const matchesEmail = ticket.email.toLowerCase().includes(searchTermLower);
    const matchesMessage = ticket.message.toLowerCase().includes(searchTermLower);
    const matchesStatus = ticket.status && ticket.status.toLowerCase().includes(searchTermLower);

    // No direct row number search, as it's dynamic, but other fields are covered
    return matchesName || matchesPhone || matchesSubject || matchesEmail || matchesMessage || matchesStatus;
  });

  // Filtered sub-admins based on search term
  const filteredSubAdmins = subAdmins.filter(admin =>
    admin.userId.toLowerCase().includes(subAdminSearchTerm.toLowerCase()) ||
    admin.email?.toLowerCase().includes(subAdminSearchTerm.toLowerCase())
  );

  const updateTicketStatus = async (ticketId, newStatus) => {
    try {
      const ticketRef = doc(firestore, "tickets", ticketId);
      await updateDoc(ticketRef, { status: newStatus });
      console.log(`Ticket ${ticketId} status updated to: ${newStatus}`);
      setSelectedTicket(prev => ({ ...prev, status: newStatus }));
    } catch (err) {
      console.error("Error updating ticket status:", err);
    }
  };

  const openTicketModal = (ticket) => {
    if (!ticket.status || ticket.status === 'open') {
      updateTicketStatus(ticket.id, 'viewed');
      setSelectedTicket({ ...ticket, status: 'viewed' });
    } else {
      setSelectedTicket(ticket);
    }
  };

  const closeTicketModal = () => {
    setSelectedTicket(null);
  };

  const approveSubAdmin = async (subAdminDocId) => {
    try {
      const subAdminRef = doc(firestore, `auth_users`, subAdminDocId);
      await updateDoc(subAdminRef, { approved: true });
      console.log(`Sub-admin document ${subAdminDocId} approved.`);
    } catch (error) {
      console.error("Error approving sub-admin:", error);
    }
  };

  const removeSubAdmin = async (subAdminDocId) => {
    try {
      const subAdminRef = doc(firestore, `auth_users`, subAdminDocId);
      await deleteDoc(subAdminRef);
      console.log(`Sub-admin document ${subAdminDocId} removed from Firestore.`);
    } catch (error) {
      console.error("Error removing sub-admin:", error);
    }
  };

  const AddSubAdminForm = ({ onAdd, onClose }) => {
    const [newUserId, setNewUserId] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [addError, setAddError] = useState('');
    const [addSuccess, setAddSuccess] = useState('');

    const handleAddSubmit = async (e) => {
      e.preventDefault();
      setAddError('');
      setAddSuccess('');
      if (!newUserId || !newPassword) {
        setAddError('User ID and Password are required.');
        return;
      }

      // Alphanumeric validation for User ID AND must start with "ad"
      if ( !newUserId) {
        setAddError('User ID must be alphanumeric and start with "Sub admin-".');
        return;
      }

      try {
        const authUsersCollectionRef = collection(firestore, `auth_users`);
        // Check if userId already exists
        const existingUsersQuery = query(authUsersCollectionRef, where("userId", "==", newUserId));
        const existingUsersSnapshot = await getDocs(existingUsersQuery);
        if (!existingUsersSnapshot.empty) {
          setAddError(`User ID '${newUserId}' already exists.`);
          return;
        }

        await addDoc(authUsersCollectionRef, {
          userId: newUserId,
          password: newPassword, // INSECURE: Storing plain password
          role: "sub-admin",
          approved: false,
        });
        setAddSuccess(`Sub-admin '${newUserId}' added successfully! Awaiting approval.`);
        setNewUserId('');
        setNewPassword('');
        onAdd();
      } catch (err) {
        console.error("Error adding sub-admin:", err);
        setAddError(`Failed to add sub-admin: ${err.message}`);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full relative border border-blue-500">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-gray-700 pb-2">Add New Sub-Admin</h3>
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">User ID</label>
              <input
                type="text"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {addError && <p className="text-red-400 text-sm">{addError}</p>}
            {addSuccess && <p className="text-green-400 text-sm">{addSuccess}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Add Sub-Admin
            </button>
          </form>
        </div>
      </div>
    );
  };

  const EditSubAdminModal = ({ subAdmin, onClose, onSave }) => {
    const [editUserId, setEditUserId] = useState(subAdmin.userId);
    const [editPassword, setEditPassword] = useState(subAdmin.password);
    const [editError, setEditError] = useState('');

    const handleSave = async (e) => {
      e.preventDefault();
      setEditError('');
      if (!editUserId || !editPassword) {
        setEditError('User ID and Password are required.');
        return;
      }

      // Alphanumeric validation for User ID AND must start with "ad"
      if (!/^[a-zA-Z0-9]+$/.test(editUserId) || !editUserId.startsWith('ad')) {
        setEditError('User ID must be alphanumeric and start with "ad".');
        return;
      }

      try {
        await onSave(subAdmin.id, { userId: editUserId, password: editPassword });
        onClose();
      } catch (err) {
        setEditError(`Failed to save: ${err.message}`);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full relative border border-blue-500">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-gray-700 pb-2">Edit Sub-Admin</h3>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">User ID</label>
              <input
                type="text"
                value={editUserId}
                onChange={(e) => setEditUserId(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {editError && <p className="text-red-400 text-sm">{editError}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    );
  };

  const handleEditSubAdminSave = async (subAdminDocId, updatedData) => {
    try {
      const subAdminRef = doc(firestore, `auth_users`, subAdminDocId);
      await updateDoc(subAdminRef, updatedData);
      console.log(`Sub-admin document ${subAdminDocId} updated.`);
      setEditSubAdmin(null);
    } catch (error) {
      console.error("Error updating sub-admin:", error);
      throw error;
    }
  };


  return (
    <div >

   
    <div className="p-8 bg-gray-900 min-h-screen text-gray-100 font-sans mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-400 flex items-center">
          
          {isAdmin ? "Admin Dashboard" : "Ticket Dashboard"}
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm">User ID: {displayUserId}</span>
          <button onClick={logout} className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h7V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H4V5z"/>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {isAdmin && (
        <div className="mb-8 border-b border-gray-700">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'tickets' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Tickets
            </button>
            
            <button
              onClick={() => setActiveTab('sub-admins')}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'sub-admins' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Sub-Admins
            </button>
          </nav>
        </div>
      )}

      {/* Conditional Rendering based on activeTab */}
      {activeTab === 'tickets' && (
        <>
          {/* Analytics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300">Total Tickets</h3>
              <p className="text-3xl font-bold text-white mt-2">{totalTickets}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300">Tickets Today</h3>
              <p className="text-3xl font-bold text-white mt-2">{ticketsToday}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300">Tickets This Week</h3>
              <p className="text-3xl font-bold text-white mt-2">{ticketsThisWeek}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300">Tickets This Month</h3>
              <p className="text-3xl font-bold text-white mt-2">{ticketsThisMonth}</p>
            </div>
          </div>

          {/* Status Counts */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 mb-8">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Tickets by Status</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(ticketCountsByStatus).map(([status, count]) => (
                <div key={status} className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColorClass(status)}`}>
                    {status.toUpperCase()}: {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search tickets by subject, name, email, phone, message, status..."
              value={ticketSearchTerm}
              onChange={(e) => setTicketSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {filteredTickets.length > 0 ? (
            <div className="overflow-x-auto rounded-lg shadow-2xl border border-gray-700">
              <table className="min-w-full divide-y divide-gray-700 bg-gray-800">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Message
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Created At
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredTickets.map((ticket, index) => (
                    <tr
                      key={ticket.id}
                      className={`${ticket.status && ticket.status !== 'open' ? getRowBackgroundColorClass(ticket.status) : (index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700')}
                                 hover:bg-gray-600 cursor-pointer transition duration-150 ease-in-out`}
                      onClick={() => openTicketModal(ticket)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-300">
                        {ticket.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {ticket.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {ticket.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-white max-w-xs truncate">
                        {ticket.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {ticket.createdAt?.toDate
                          ? formatRelative(ticket.createdAt.toDate(), new Date())
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {ticket.phone || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {ticket.status ? (
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(ticket.status)}`}>
                            {ticket.status.toUpperCase()}
                          </span>
                        ) : (
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(null)}`}>
                            OPEN
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          ) : (
            <p className="text-gray-400 text-center text-xl py-10">
              No tickets found. Add some data to your Firestore!
            </p>
          )}
          
        </>
      )}


      {isAdmin && activeTab === 'sub-admins' && (
        <>
          <div className="mb-8 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search sub-admins..."
              value={subAdminSearchTerm}
              onChange={(e) => setSubAdminSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            />
            <button
              onClick={() => setShowAddSubAdminForm(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add New Sub-Admin
            </button>
          </div>

          {showAddSubAdminForm && (
            <AddSubAdminForm
              onAdd={() => setShowAddSubAdminForm(false)}
              onClose={() => setShowAddSubAdminForm(false)}
            />
          )}

          {editSubAdmin && (
            <EditSubAdminModal
              subAdmin={editSubAdmin}
              onClose={() => setEditSubAdmin(null)}
              onSave={handleEditSubAdminSave}
            />
          )}

          {filteredSubAdmins.length > 0 ? (
            <div className="overflow-x-auto rounded-lg shadow-2xl border border-gray-700">
              <table className="min-w-full divide-y divide-gray-700 bg-gray-800">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Password (Insecure)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredSubAdmins.map((admin, index) => (
                    <tr
                      key={admin.id}
                      className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-300">
                        {admin.userId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {admin.password} {/* INSECURE: Displaying plain password */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${admin.approved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {admin.approved ? 'APPROVED' : 'PENDING'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {!admin.approved && (
                          <button
                            onClick={() => approveSubAdmin(admin.id)}
                            className="text-green-400 hover:text-green-600 mr-3 transition duration-150"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => setEditSubAdmin(admin)}
                          className="text-blue-400 hover:text-blue-600 mr-3 transition duration-150"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeSubAdmin(admin.id)}
                          className="text-red-400 hover:text-red-600 transition duration-150"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 text-center text-xl py-10">
              No sub-admin accounts found.
            </p>
          )}
        </>
      )}

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          onClose={closeTicketModal}
          onUpdateStatus={updateTicketStatus}
        />
      )}
    </div>
     </div>
  );
};

// Ticket Detail Modal Component (unchanged from previous version, included for completeness)
const TicketDetailModal = ({ ticket, onClose, onUpdateStatus }) => {
  const statusOptions = ["in process", "rejected", "deal done", "viewed"];

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full relative border border-blue-500">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-blue-400 mb-4 border-b border-gray-700 pb-2">
          {ticket.subject}
        </h3>
        <div className="space-y-3 text-gray-300">
          <p><strong>Name:</strong> {ticket.name}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Message:</strong> {ticket.message}</p>
          {ticket.phone && <p><strong>Phone:</strong> {ticket.phone}</p>}
          <p>
            <strong>Status:</strong>{" "}
            {ticket.status ? (
              <span className={`font-semibold px-2 py-1 rounded-full ${getStatusColorClass(ticket.status)}`}>
                {ticket.status.toUpperCase()}
              </span>
            ) : (
              <span className={`font-semibold px-2 py-1 rounded-full ${getStatusColorClass(null)}`}>
                OPEN
              </span>
            )}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {ticket.createdAt?.toDate
              ? formatRelative(ticket.createdAt.toDate(), new Date())
              : "N/A"}
          </p>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4">
          <h4 className="text-lg font-semibold text-gray-200 mb-3">Update Status:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {statusOptions.map(status => (
              <button
                key={status}
                onClick={() => onUpdateStatus(ticket.id, status)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200
                            ${ticket.status === status
                                ? getStatusColorClass(status).replace('bg-', 'bg-').replace('-100', '-600') + ' text-white shadow-md' // Active state
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-200' // Inactive state
                            }`}
              >
                {status.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
     
    </div>
  );
};

// Component for login
const AuthComponent = () => {
  const [userIdInput, setUserIdInput] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(userIdInput, password); // Call custom login
    } catch (err) {
      setError(err.message || "Login failed. Please check your User ID and password.");
    }
  };

  return (
 



<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel (Form) */}
        <motion.div
          key={"signin"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10"
        >
         
            <>
              <h2 className="text-2xl font-bold mb-6 color-black" style={{color: "black"}}>Sign In</h2>
              <input
                type="text"
                placeholder="User ID"
                value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
              required
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <input
                type="password"
                placeholder="Password"
                
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <button className="w-full bg-[#e03e00] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition" onClick={handleSubmit}>
                Sign In
              </button>
            </>
          
        </motion.div>

        {/* Right Panel (Overlay / Switcher) */}
        <motion.div
          key={"signin-right" }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 sm:p-10"
        >
          
            <>
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-6">To keep connected, please sign in again</p>
              <button
                
                className="bg-white text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition" onClick={handleSubmit}
              >
                Sign In
              </button>
            </>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Deshboard;
