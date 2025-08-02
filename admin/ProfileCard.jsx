import React from 'react';

const ProfileCard = () => {
  const admin = JSON.parse(localStorage.getItem('admin')) || {};
  return (
    <div className="bg-white/5 p-6 rounded-xl w-full max-w-md mx-auto text-center">
      <img src="https://ui-avatars.com/api/?name=Admin" alt="Admin Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold">{admin.name || 'Admin'}</h3>
      <p>Email: {admin.email}</p>
      <p>Password: ********</p>
    </div>
  );
};
export default ProfileCard;