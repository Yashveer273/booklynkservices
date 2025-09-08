"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  Laptop,
  Users,
  Smile,
  Headphones,
  CheckCircle,
  Cpu,
  Layers,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/Footer";




// ------------------- Stats Section -------------------
const statsData = [
  {
    id: 1,
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-orange)]",
    number: 50,
    suffix: "+",
    title: "Successful PR Projects",
    description: "PR projects completed with excellence",
  },
  {
    id: 2,
    icon: <Laptop className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-teal)]",
    number: 10,
    suffix: "+",
    title: "Successful IT Projects",
    description: "IT solutions delivered on time",
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-navy)]",
    number: 35,
    suffix: "",
    title: "Happy PR Clients",
    description: "Clients satisfied with our PR campaigns",
  },
  {
    id: 4,
    icon: <Smile className="w-8 h-8 text-white" />,
    color: "bg-orange-400",
    number: 15,
    suffix: "",
    title: "Happy IT Clients",
    description: "Clients satisfied with our IT projects",
  },
];

// ------------------- Circle Features -------------------
const circleFeatures = [
  {
    id: 1,
    title: "Expert team of professionals",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-orange)]",
  },
  {
    id: 2,
    title: "24/7 customer support",
    icon: <Headphones className="w-8 h-8 text-white" />,
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Proven track record",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-navy)]",
  },
  {
    id: 4,
    title: "End-to-end IT & PR solutions",
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: "bg-[var(--color-teal)]",
  },
  {
    id: 5,
    title: "Tailored strategies for every industry",
    icon: <Layers className="w-8 h-8 text-white" />,
    color: "bg-orange-600",
  },
  {
    id: 6,
    title: "95% success rate with 4.9/5 client rating",
    icon: <Star className="w-8 h-8 text-white" />,
    color: "bg-purple-500",
  },
];

// ------------------- Video Card Component -------------------
function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: [0, 1], y: [30, 0] }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
    >
      <video
        ref={videoRef}
        src={src}
        controls
        muted
        className="w-full h-full object-cover"
      />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-md text-sm">
        {title}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Counter animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        statsData.forEach((stat, index) => {
          let start = 0;
          const end = stat.number;
          const increment = Math.ceil(end / 50);
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(interval);
            }
            setCounters((prev) =>
              prev.map((val, i) => (i === index ? start : val))
            );
          }, 20);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    
    if (!email.trim()) {
      setEmailError("Email address is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Simulate subscription success
    setIsSubscribed(true);
    setEmail("");
    
    // Reset thank you message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <div className="bg-[var(--color-lightgray)]">
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden py-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
            We dont just build websites, apps, & campaigns — we build your
            business
          </h1>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white drop-shadow-md">
              At Book Lynk Services Pvt Ltd, we are passionate about turning
              visionary ideas into powerful digital realities. As a dynamic IT
              Solutions and PR company, we empower businesses to thrive in
              todays fast-paced digital ecosystem.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4">
            <Link
              href="/contact"
              className="bg-[var(--color-orange)] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-orange-hover)] hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-[var(--color-teal)] text-[var(--color-teal)] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-teal)] hover:text-white transition-colors text-sm sm:text-base"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------- Stats Section ---------------- */}
      <section id="stats-section" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 ${stat.color}`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-1">
                  {counters[index]}
                  {stat.suffix}
                </h3>
                <p className="font-semibold text-gray-700 text-sm sm:text-base">{stat.title}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Features Section ---------------- */}
      <section className="py-16 sm:py-20 bg-[var(--color-lightgray)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6 leading-tight"
          >
            Why Choose Book Lynk Services Pvt Ltd?
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            With years of expertise in IT, PR, and Digital Marketing, we have
            empowered businesses and individuals to build strong digital
            identities and achieve measurable growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {circleFeatures.map((feature, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={feature.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 ${feature.color}`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--color-navy)] mb-2 leading-tight">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Videos Section (4 Videos) ---------------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6 sm:mb-8 leading-tight">
            Examples of the Work We Do
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            These videos showcase the kind of IT, PR, and digital solutions we
            create for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {[
              {
                src: "/Groceries Home Delivery Video.mp4",
                title: "Online Grocery",
              },
              { src: "/Accountant Video.mp4", title: "CA Website Plan" },
              { src: "/clinic vdo.mp4", title: "Clinic Website" },
              { src: "/Real Estate Video.mp4", title: "Realty Website" },
            ].map((video, index) => (
              <VideoCard key={index} src={video.src} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA Section ---------------- */}
      <section className="relative py-16 sm:py-20 bg-[var(--color-lightgray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-navy)] mb-6 leading-tight">
                Ready to Get Started?
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 mb-8">
                Helping businesses scale smarter, faster, and stronger.
              </p>
              <Link
                href="/pricing"
                className="bg-[var(--color-orange)] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold inline-block text-base sm:text-lg hover:bg-[var(--color-orange-hover)] transition-colors"
              >
                View Pricing Plans
              </Link>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center order-1 lg:order-2"
            >
              <img
                src="/Ready to Get Started final.jpg"
                alt="Get Started"
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

     {/* ---------------- Footer Section ---------------- */}
 <Footer />
   </div>
  );
}