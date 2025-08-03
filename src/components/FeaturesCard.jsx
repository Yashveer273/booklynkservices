import React from "react";

const FeaturesCard = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform transform hover:scale-[1.03] hover:border-purple-500/30 duration-300">
        {/* Optional glow behind the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-purple-400/10 opacity-20 pointer-events-none"></div>

        <div className="overflow-hidden relative z-10">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 text-center relative z-10">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default FeaturesCard;
