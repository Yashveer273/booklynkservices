import React, { useState } from 'react';
import Sidebar from '../admin/Sidebar';
import TicketsTable from '../admin/TicketsTable';
import ProfileCard from '../admin/ProfileCard';

const AdminDashboard = () => {
  const [active, setActive] = useState('tickets');

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 p-6">
        {active === 'tickets' && <TicketsTable />}
        {active === 'profile' && <ProfileCard />}
      </div>
    </div>
  );
};
export default AdminDashboard;