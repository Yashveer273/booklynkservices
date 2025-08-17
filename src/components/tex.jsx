import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import { format } from "date-fns";
import { firestore } from "./firebasecon"; // Make sure firebasecon.js is configured correctly

// Reusable Table Component
const TaxiTable = ({ data, columns, onRowClick }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400 text-center text-xl py-10">
        No booking data found.
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
              className="hover:bg-gray-600 transition duration-150 ease-in-out cursor-pointer"
              onClick={() => onRowClick && onRowClick(item)}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-white"
                >
                  {column.cell ? column.cell(item, rowIndex) : "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Modal component to display booking details and update status
const BookingDetailsModal = ({ booking, onClose, onUpdateStatus }) => {
  if (!booking) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "IN PROCESS":
        return "bg-blue-500";
      case "DEAL DONE":
        return "bg-green-500";
      case "REJECTED":
        return "bg-red-500";
      case "VIEWED":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 text-gray-100 p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-400">Booking Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <p>
            <span className="font-semibold text-gray-300">Name:</span>{" "}
            {booking.customer?.name || "N/A"}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Email:</span>{" "}
            {booking.customer?.email || "N/A"}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Phone:</span>{" "}
            {booking.customer?.phone || "N/A"}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Message:</span>{" "}
            {booking.trip?.message || "N/A"}
          </p>
          <p className="flex items-center">
            <span className="font-semibold text-gray-300 mr-2">Status:</span>
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                booking.status
              )}`}
            >
              {booking.status || "N/A"}
            </span>
          </p>
          <p>
            <span className="font-semibold text-gray-300">Created At:</span>{" "}
            {booking.createdAt
              ? format(
                  booking.createdAt.toDate ? booking.createdAt.toDate() : new Date(booking.createdAt),
                  "MM/dd/yyyy"
                )
              : "N/A"}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="font-semibold text-gray-300 mb-2">Update Status:</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["IN PROCESS", "REJECTED", "DEAL DONE", "VIEWED"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => onUpdateStatus(booking.id, status)}
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200
                  ${
                    status === booking.status
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const TaxiBookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const bookingsCollectionRef = collection(firestore, "TexiBookingDb");
    const q = query(bookingsCollectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(results);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const handleUpdateStatus = async (bookingId, newStatus) => {
    const bookingDocRef = doc(firestore, "TexiBookingDb", bookingId);
    try {
      await updateDoc(bookingDocRef, {
        status: newStatus,
      });
      console.log("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "IN PROCESS":
        return "bg-blue-500";
      case "DEAL DONE":
        return "bg-green-500";
      case "REJECTED":
        return "bg-red-500";
      case "VIEWED":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const columns = [
    // Status and ID at the beginning for quick reference
    {
      header: "Status",
      cell: (item) => (
        <span className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusColor(item.status)}`}>
          {item.status || "N/A"}
        </span>
      ),
    },
    { header: "ID", cell: (item, index) => index + 1 },

    // Customer information
    { header: "Customer Name", cell: (item) => item.customer?.name || "N/A" },
    { header: "Customer Email", cell: (item) => item.customer?.email || "N/A" },
    { header: "Customer Phone", cell: (item) => item.customer?.phone || "N/A" },
    { header: "Customer Message", cell: (item) => item.trip?.message || "N/A" },

    // Trip information
    { header: "Booking Service", cell: (item) => item.trip?.service || "N/A" },
    {
      header: "Pickup From City",
      cell: (item) => item.trip?.pickupFromCity || "N/A",
    },
    { header: "Drop To City", cell: (item) => item.trip?.dropToCity || "N/A" },
    {
      header: "Pickup From Airport",
      cell: (item) => item.trip?.pickupFromAirport || "N/A",
    },
    {
      header: "Drop To Airport",
      cell: (item) => item.trip?.dropToAirport || "N/A",
    },
    { header: "Pickup Date", cell: (item) => item.trip?.pickupDate || "N/A" },
    { header: "Pickup Time", cell: (item) => item.trip?.pickupTime || "N/A" },
    { header: "Drop Date", cell: (item) => item.trip?.dropDate || "N/A" },
    { header: "Drop Time", cell: (item) => item.trip?.dropTime || "N/A" },
    { header: "Hours Rate", cell: (item) => item.trip?.hoursRate || "N/A" },

    // Car information
    { header: "Car Name", cell: (item) => item.car?.name || "N/A" },
    { header: "Car Example", cell: (item) => item.car?.example || "N/A" },
    { header: "Car Luggage", cell: (item) => item.car?.luggage || "N/A" },
    { header: "Car Price", cell: (item) => item.car?.price || "N/A" },
    { header: "Car Seating", cell: (item) => item.car?.seating || "N/A" },

    // Booking Created At
    {
      header: "Booking Created At",
      cell: (item) => {
        try {
          const date = item.createdAt.toDate
            ? item.createdAt.toDate()
            : new Date(item.createdAt);
          return format(date, "MMM do, yyyy h:mm a");
        } catch {
          return "N/A";
        }
      },
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-xl">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-100 font-sans">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8">
        Taxi Bookings
      </h1>
      <TaxiTable
        data={bookings}
        columns={columns}
        onRowClick={handleSelectBooking}
      />
      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </div>
  );
};

export default TaxiBookingTable;