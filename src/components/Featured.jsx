import React from "react";
import { FEATURED_PROJECTS } from "../constants";
import FeaturesCard from "./FeaturesCard";

const Featured = () => {
  return (
    <section id="portfolio" className="relative bg-black px-4 md:px-16 lg:px-28 py-24 text-white overflow-hidden">
      {/* Section Decoration - Aurora Lights */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600 via-indigo-500 to-transparent opacity-20 rounded-full blur-3xl z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-gradient-radial from-pink-500 via-fuchsia-400 to-transparent opacity-10 blur-2xl rounded-full z-0 animate-pulse" />

      {/* Skewed Top Divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#06adf8] transform -skew-y-3 origin-top z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative z-20">
        <span className="bg-clip-text text-transparent  bg-gradient-to-r from-[#06adf8] to-[#0057c9]">
          Featured Projects
        </span>
      </h2>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 relative z-20">
        {FEATURED_PROJECTS.map((project) => (
          <FeaturesCard key={project.id} {...project} />
        ))}
      </div>

      {/* Skewed Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#06adf8] transform skew-y-3 origin-bottom z-10"></div>
    </section>
  );
};

export default Featured;
