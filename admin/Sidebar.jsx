import React from 'react';

const Sidebar = ({ active, setActive }) => {
  const logout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin-login';
  };

  return (
    <div className="w-64 bg-gray-800 p-5 space-y-4">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <ul className="space-y-2">
        <li><button onClick={() => setActive('tickets')} className={`w-full text-left ${active === 'tickets' ? 'text-cyan-400' : ''}`}>Tickets</button></li>
        <li><button onClick={() => setActive('profile')} className={`w-full text-left ${active === 'profile' ? 'text-cyan-400' : ''}`}>Profile</button></li>
        <li><button onClick={logout} className="w-full text-left text-red-500">Logout</button></li>
      </ul>
    </div>
  );
};
export default Sidebar;