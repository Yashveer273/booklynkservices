import React from "react";
import bgImage from "../assets/HeroBgImage.png";

const Hero = () => (
  <section
    id="hero"
    className="relative w-full h-screen overflow-hidden text-center px-4 md:px-8 lg:px-20 flex flex-col justify-center items-center"
  >
    {/* Background image using <img> */}
    <img
      src={bgImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Content */}
    <div className="relative z-20 text-white mt-30">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-wider">
        We don’t just build<br /> websites, apps, & campaigns<br />
        we build your business
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-semibold tracking-wide bg-black/40 rounded-[8px] p-5">
        At Book Lynk Services Pvt Ltd, we are passionate about turning visionary
        ideas into powerful digital realities. As a dynamic IT Solutions and PR
        company, we empower businesses to thrive in today’s fast-paced digital
        ecosystem. With a team of creative minds and technical experts, we
        specialize in a wide range of services including
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="hidden md:flex">
          <a
            href="/#connect"
            className="ml-auto bg-gradient-to-br from-cyan-500 to-indigo-500 text-white text-base font-semibold px-6 py-3 rounded-full shadow-xl hover:opacity-90 transition-all"
          >
            Let’s Connect
          </a>
        </div>
        {/* <button className="border border-cyan-400 text-white font-medium px-8 py-4 rounded-[24px] shadow-sm hover:bg-gradient-to-br from-cyan-500 to-indigo-500 transition">
          Explore Our Work
        </button> */}
        <a
          href="/#services"
          className="border border-cyan-400 text-white font-medium px-8 py-4 rounded-[24px] shadow-sm hover:bg-gradient-to-br from-cyan-500 to-indigo-500 transition"
        >
          Explore Our Work
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
