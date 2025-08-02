import React from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackCard = ({ data }) => {
  return (
    <div className="relative h-[340px] flex flex-col justify-around min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[30%] 
      flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-8 
      shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02] overflow-hidden">

      {/* Optional inner glow or gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-purple-400/10 opacity-20 pointer-events-none"></div>

      {/* Testimonial Content */}
      <div className="relative z-10">
        <div className="flex mb-4 text-yellow-400">
          {Array.from({ length: data.stars }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-gray-200 italic text-sm leading-relaxed line-clamp-5">
          &ldquo;{data.feedback}&rdquo;
        </p>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-6 relative z-10">
        <img
          src={data.client_image}
          alt={data.client_name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h4 className="text-white font-semibold">{data.client_name}</h4>
          <p className="text-sm text-purple-200">{data.client_designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
