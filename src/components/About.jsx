import React from "react";

import aboutImage from "../assets//aboutImage.png";


import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/book.lynk/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/booklynkservices/",
  }, {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61574782382680",
  },{
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@BooklynkServices",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/booklynkservice",
  },
];
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-4 py-24 md:px-16 lg:px-28 bg-black overflow-hidden"
    >
      {/* Decorative animated blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-2xl opacity-20 -z-10 animate-spin-slow"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Frame */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative border-4 border-white/50 rounded-3xl p-2 shadow-2xl ">
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-auto object-cover rounded-2xl transform hover:scale-102 transition duration-500 shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white text-xl">
            
            {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="hover:text-cyan-300 transition"
            >
              {item.icon}
            </a>
          ))}
            
           
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
            Elevate Your Online <br className="hidden md:block" /> Presence with
            Us
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            At Book Lynk Services, we help individuals and businesses build
            powerful digital identities. As a leading IT and media-tech company,
            we combine innovative technology with strategic storytelling to
            boost visibility, trust, and growth. We work with
            professionals—doctors, real estate agents, lawyers, artists, and
            brands—to deliver tailored solutions in:
          </p>
          <p className="text-gray-100 text-lg leading-relaxed">
            Public Relations (PR) – Personal branding, media outreach &
            reputation building Digital Marketing – Social media, paid ads &
            content strategies
            <br></br>
            <br></br>
            IT Solutions - Digital Marketing. Website Development. Mobile App Development. Game Development. ASO (App Store Optimization). SEO (Search Engine Optimization). DevOps. Cloud Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
