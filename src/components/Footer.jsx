import React from "react";
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
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61574782382680",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@BooklynkServices",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/booklynkservice",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-black via-gray-900 to-black text-white py-10 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* Glow circle decoration */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-purple-800 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-6">
          Ready to Enhance Your Brand & Idea?
        </h2>

       <div className="flex flex-col items-center">
  <div className="w-fit max-w-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-8">
    <p className="text-purple-200 text-sm sm:text-base text-center">
      booklynkservices@gmail.com
    </p>
  </div>

  <div className="w-fit max-w-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-8">
    <p className="text-purple-200 text-sm sm:text-base text-center">
      +91 9650316607
    </p>
  </div>
</div>

        
        <div className="flex justify-center items-center gap-5 sm:gap-6 mt-4 flex-wrap">
          {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-cyan-300">
            &copy; January 2024 | Book Lynk Services. All rights reserved. |
            624, tower-1 Assotech business cresterra Sector 135, Noida 201301
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
