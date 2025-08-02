import { ArrowLeft, ArrowRightCircle } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ id, title, description, points, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10  py-4 border-b border-white/10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <span className="text-cyan-400 font-semibold text-4xl">{id}</span>
        <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">{title}</h3>
        <p className="text-gray-200 text-base leading-relaxed">{description}</p>
        <ul className="mt-4 space-y-2 text-white text-base">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-cyan-400"><ArrowRightCircle/></span> <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center">
  <div className="relative border-4 border-white/10 rounded-3xl p-2 shadow-2xl w-full max-w-md h-[300px] sm:h-[350px] md:h-[400px]">
    <img
      src={image}
      alt={title}
      className="rounded-2xl w-full h-full object-cover transform hover:scale-103 transition duration-500 shadow-lg"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none"></div>
  </div>
</div>

    </div>
  );
};

export default ServiceCard;