import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from 'firebase/firestore';
import { formatRelative } from 'date-fns';
import { firestore } from './firebasecon';

// Reusable Table Component (as provided in the prompt)
const TaxiTable = ({ data, columns, getRowBackgroundColorClass, onRowClick }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400 text-center text-xl py-10">
        No data found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-2xl border border-gray-700">
      <table className="min-w-full divide-y divide-gray-700 bg-gray-800">
        <thead className="bg-gray-700">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {data.map((item, rowIndex) => (
            <tr
              key={item.id || rowIndex}
              className={`${
                getRowBackgroundColorClass ? getRowBackgroundColorClass(item.status) : ''
              } ${
                rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
              } hover:bg-gray-600 ${onRowClick ? 'cursor-pointer' : ''} transition duration-150 ease-in-out`}
              onClick={() => onRowClick && onRowClick(item)}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 whitespace-nowrap text-sm ${column.className || 'text-white'}`}
                >
                  {column.cell ? column.cell(item) : item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Ticket Detail Modal Component (re-used from Dashboard.jsx)
const TicketDetailModal = ({ ticket, onClose, onUpdateStatus }) => {
  const statusOptions = ['in process', 'rejected', 'deal done', 'viewed'];

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
          {ticket.subject || 'Taxi Ticket'}
        </h3>
        <div className="space-y-3 text-gray-300">
          <p><strong>Name:</strong> {ticket.fullName}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Message:</strong> {ticket.message}</p>
          <p><strong>Phone:</strong> {ticket.phone || "N/A"}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`font-semibold px-2 py-1 rounded-full ${getStatusColorClass(ticket.status)}`}>
              {ticket.status.toUpperCase()}
            </span>
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {ticket.timestamp?.toDate ? formatRelative(ticket.timestamp.toDate(), new Date()) : 'N/A'}
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

// Helper function for status colors (re-used from Dashboard.jsx)
const getStatusColorClass = (status) => {
  switch (status) {
    case 'in process':
      return 'bg-blue-100 text-blue-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    case 'Done':
      return 'bg-purple-100 text-purple-800';
    case 'viewed':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Helper function for row colors (re-used from Dashboard.jsx)
const getRowBackgroundColorClass = (status) => {
  switch (status) {
    case 'in process':
      return 'bg-blue-900';
    case 'rejected':
      return 'bg-red-900';
    case 'Done':
      return 'bg-green-900';
    case 'viewed':
      return 'bg-yellow-900';
    default:
      return '';
  }
};

const TaxiTicketDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const ticketsCollectionRef = collection(firestore, 'taxisTicket');
    const q = query(ticketsCollectionRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        status: doc.data().status || 'open', // Default status
      }));
      setTickets(results);
      setLoading(false);
    }, (err) => {
      console.error('Error fetching taxisTicket:', err);
      setError('Failed to load tickets. Please check your Firestore connection.');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

  const updateTicketStatus = async (ticketId, newStatus) => {
    try {
      const ticketRef = doc(firestore, 'taxisTicket', ticketId);
      await updateDoc(ticketRef, { status: newStatus });
      console.log(`Ticket ${ticketId} status updated to: ${newStatus}`);
      setSelectedTicket(prev => ({ ...prev, status: newStatus }));
    } catch (err) {
      console.error('Error updating ticket status:', err);
    }
  };

  const columns = [
    { header: '#', cell: (item, index) => index + 1 },
    { header: 'Full Name', accessor: 'fullName' },
    { header: 'Email', accessor: 'email' },
    { header: 'Message', accessor: 'message', className: 'max-w-xs truncate' },
    { header: 'Phone', accessor: 'phone' },
    {
      header: 'Created At',
      cell: (item) => (item.timestamp?.toDate ? formatRelative(item.timestamp.toDate(), new Date()) : 'N/A'),
    },
    {
      header: 'Status',
      cell: (item) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(
            item.status
          )}`}
        >
          {item.status.toUpperCase()}
        </span>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-xl">Loading tickets...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-100 font-sans">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8">
        Taxi Tickets
      </h1>
      <TaxiTable
        data={tickets}
        columns={columns}
        getRowBackgroundColorClass={getRowBackgroundColorClass}
        onRowClick={openTicketModal}
      />
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          onClose={closeTicketModal}
          onUpdateStatus={updateTicketStatus}
        />
      )}
    </div>
  );
};

export default TaxiTicketDashboard;