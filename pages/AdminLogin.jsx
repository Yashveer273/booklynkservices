import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin');
    } catch (err) {
      alert('Invalid credentials'+ err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-4 w-[350px]">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 rounded bg-white/10" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full p-2 rounded bg-white/10" />
        <button type="submit" className="w-full py-2 bg-purple-600 rounded hover:bg-purple-700">Login</button>
      </form>
    </div>
  );
};
export default AdminLogin;