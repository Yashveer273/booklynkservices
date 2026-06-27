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
      appLink:
        "https://play.google.com/store/apps/details?id=com.aaditya.collegemitra",
    },
    {
      id: 2,
      title: "Modernbazaar",
      category: "App & Website",
      description:
        "An app and web platform for a modern shopping experience and online marketplace.",
      image: "/modernbazaar.jpg",
      tags: ["E-commerce", "Website", "Mobile App"],
      client: "Modernbazaar",
      link: "https://www.modernbazaar.online/",
      appLink:
        "https://play.google.com/store/apps/details?id=io.MBapp.tekshapersnew&pcampaignid=web_share",
    },
    {
      id: 3,
      title: "Gaya Ji Traders",
      category: "E-commerce Website",
      description:
        "A modern e-commerce platform for electronics and home appliances, featuring product browsing, secure ordering, online payments, and order tracking.",
      image: "/gayaji.jpg",
      tags: ["E-commerce", "Electronics", "Home Appliances", "Website"],
      client: "Gaya Ji Traders",
      link: "https://gaya-ji-frontend.vercel.app/",
    },
    {
      id: 4,
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
      id: 5,
      title: "Urban Aura Services",
      category: "App & Website",
      description:
        "An on-demand home services platform that enables customers to book professional doorstep services through a mobile app and website.",
      image: "/urbanauracs.jpg",
      tags: ["Home Services", "Mobile App", "Website"],
      client: "Urban Aura Services",
      link: "https://www.urbanauracs.com/",
      appLink:
        "https://play.google.com/store/apps/details?id=com.urbanauracs.urbenauraservices&pcampaignid=web_share",
    },
    {
      id: 6,
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
      id: 7,
      title: "Clinic Website",
      category: "Website",
      description:
        "Website for clinics to manage appointments, services, and patient communication.",
      image: "/vershaclinic.jpg",
      tags: ["Healthcare", "Website"],
      client: "Clinic",
      link: "https://clinic.booklynkservices.com/",
    },{
  id: 8,
  title: "Shoppers Stop",
  category: "Shopping App",
  description:
    "A fashion shopping app for apparel, accessories, beauty, and lifestyle products.",
  image:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
  tags: ["Shopping", "Fashion", "Mobile App"],
  client: "Shoppers Stop",
  appLink: "https://play.google.com/store/apps/details?id=shoppersstop.shoppersstop",
},
{
  id: 9,
  title: "Westside",
  category: "Shopping App",
  description:
    "A lifestyle shopping app for men, women, kids, home decor, accessories, footwear, and beauty products.",
  image:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
  tags: ["Shopping", "Fashion", "Lifestyle", "Mobile App"],
  client: "Westside",
  appLink: "https://play.google.com/store/apps/details?id=com.westside",
},
{
  id: 10,
  title: "SIVVI",
  category: "Fashion Shopping App",
  description:
    "A fashion shopping app for women, men, and kids, focused on online fashion and lifestyle products.",
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",
  tags: ["Fashion", "E-commerce", "Mobile App"],
  client: "SIVVI",
  appLink: "https://play.google.com/store/apps/details?id=com.sivvi.app",
},
{
  id: 11,
  title: "MAXPRO Fitness",
  category: "Fitness App",
  description:
    "A fitness and performance tracking app designed for users who want to track workouts and achieve fitness goals.",
  image:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  tags: ["Fitness", "Health", "Mobile App"],
  client: "MAXPRO",
  appLink: "https://play.google.com/store/apps/details?id=com.itza.maxpro",
},
{
  id: 12,
  title: "Miles One",
  category: "Education App",
  description:
    "An education and career-focused app for accounting professionals, certifications, and AI-ready learning paths.",
  image:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
  tags: ["Education", "Accounting", "Career", "Mobile App"],
  client: "Miles One",
  appLink: "https://play.google.com/store/apps/details?id=com.miles.one",
},
{
  id: 13,
  title: "Habuild",
  category: "Health & Wellness App",
  description:
    "A daily yoga, fitness, and habit-building app focused on wellness, mindfulness, and healthy routines.",
  image:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  tags: ["Yoga", "Fitness", "Wellness", "Mobile App"],
  client: "Habuild",
  appLink: "https://play.google.com/store/apps/details?id=in.habuild",
},
  ];

  return (
    <div className="bg-gray-50">
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

      <section className="py-12 sm:py-16 md:py-20">
        <div className="space-y-20 sm:space-y-28 md:space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative w-full flex flex-col items-center md:flex-row justify-center px-4 sm:px-6"
            >
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
                  className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-xl bg-white shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className={`bg-white/90 md:bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4 sm:p-6 
                  w-full max-w-[360px] sm:max-w-[400px] md:w-[420px]
                  mt-6 md:mt-0
                  md:absolute md:top-1/2 md:-translate-y-1/2
                  ${
                    index % 2 === 0
                      ? "md:left-6 lg:left-20"
                      : "md:right-6 lg:right-20"
                  }`}
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

                <div className="flex flex-wrap gap-3 mt-3">
                  {project.link && (
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  )}

                  {project.appLink && (
                    <button
                      onClick={() => window.open(project.appLink, "_blank")}
                      className="inline-flex items-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      View App
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}