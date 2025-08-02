import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketsTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tickets').then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Support Tickets</h3>
      <table className="w-full text-left border border-white/10">
        <thead>
          <tr className="bg-white/5">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Message</th>
            <th className="p-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="p-2">{t.name}</td>
              <td className="p-2">{t.email}</td>
              <td className="p-2">{t.phone}</td>
              <td className="p-2">{t.subject}</td>
              <td className="p-2">{t.message}</td>
              <td className="p-2">{new Date(t.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TicketsTable;