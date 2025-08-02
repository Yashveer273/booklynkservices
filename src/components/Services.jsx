import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id='services' className="relative px-4 md:px-16 lg:px-28 py-20 text-white overflow-hidden bg-gradient-to-br from-[#000000] to-[#210249]">
  {/* Decorative Animated Blobs */}
  <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
  <div className="absolute bottom-[-80px] right-[-60px] w-[400px] h-[400px] bg-pink-400 opacity-20 blur-2xl rounded-full animate-pulse -z-10"></div>
  <div className="absolute top-1/3 left-[40%] w-[200px] h-[200px] bg-blue-400 opacity-10 blur-2xl rounded-full animate-spin-slower -z-10"></div>

  {/* Section Heading */}
  <h2 className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-16 border-b border-white/20 pb-4">
    Our Tailored Services
  </h2>

  {/* Services List */}
  <div className="space-y-20">
    {SERVICES.map((service) => (
      <ServiceCard key={service.id} {...service} />
    ))}
  </div>
</section>

  );
};

export default Services;