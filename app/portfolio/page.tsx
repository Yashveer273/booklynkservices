"use client";

import { Tag, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Collegemitra",
      category: "App",
      description:
        "A mobile application designed to assist students and colleges with management and resources.",
      image: "/Collegemitra.jpg",
      tags: ["Mobile App", "Education"],
      client: "Collegemitra",
      link: "https://play.google.com/store/apps/details?id=com.aaditya.collegemitra",
    },
    {
      id: 2,
      title: "Modernbazaar",
      category: "App & Web App",
      description:
        "An app and web platform for modern shopping experience and online marketplace.",
      image: "/modernbazaar.jpg",
      tags: ["E-commerce", "Web App", "Mobile App"],
      client: "Modernbazaar",
      link: "https://www.modernbazaar.online/",
    },
    {
      id: 3,
      title: "Havenhubinfra",
      category: "Website",
      description:
        "Corporate website showcasing real estate and infrastructure projects.",
      image: "/havenhubinfra.jpg",
      tags: ["Website", "Corporate"],
      client: "Havenhubinfra",
      link: "https://www.havenhubinfra.com/",
    },
    {
      id: 4,
      title: "EZ Super App",
      category: "App",
      description:
        "A multi-purpose super app offering various services under one platform.",
      image: "/EZ Super App.jpg",
      tags: ["Mobile App", "Super App"],
      client: "EZ Super App",
      link: "https://play.google.com/store/apps/details?id=com.EZ_M_Three.TheEZStartUP",
    },
    {
      id: 5,
      title: "CA Website Plan",
      category: "Website",
      description:
        "Website solution for Chartered Accountants to showcase services and manage clients.",
      image: "/chartered accountant.jpg",
      tags: ["Website", "Finance"],
      client: "CA Firm",
      link: "https://chartered.booklynkservices.com/",
    },
    {
      id: 6,
      title: "Clinic Website",
      category: "Website",
      description:
        "Website for clinics to manage appointments, services, and patient communication.",
      image: "/vershaclinic.jpg",
      tags: ["Healthcare", "Website"],
      client: "Clinic",
      link: "https://clinic.booklynkservices.com/",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8">
            Featured Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore some of our highlighted projects across apps, web apps, and websites.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="space-y-20 sm:space-y-28 md:space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative w-full flex flex-col items-center md:flex-row justify-center px-4 sm:px-6"
            >
              {/* Project Image */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-7xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-contain rounded-xl bg-white shadow-md"
                />
              </motion.div>

              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className={`bg-white/90 md:bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4 sm:p-6 
                  w-full max-w-[360px] sm:max-w-[400px] md:w-[420px]
                  mt-6 md:mt-0
                  md:absolute md:top-1/2 md:-translate-y-1/2
                  ${index % 2 === 0 ? "md:left-6 lg:left-20" : "md:right-6 lg:right-20"}`}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center text-xs text-gray-700 mb-3 gap-2">
                  <span>{project.client}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-gray-200/70 text-gray-800 text-xs rounded"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium text-sm mt-2 transition-colors"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}


