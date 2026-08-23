"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
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
  TrendingUp,
  FileText,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import ServicesSection from "./ServicesSection";
import { FaChartLine, FaCoins } from "react-icons/fa";

// ------------------- Stats Section -------------------
const statsData = [
  {
    id: 1,
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    number: 50,
    suffix: "+",
    title: "Successful PR Projects",
    description: "PR projects completed with excellence",
  },


  {
    id: 2,
    icon: <Laptop className="w-6 h-6 text-white" />,
    color: "bg-emerald-500",
    number: 36,
    suffix: "+",
    title: "Successful IT Projects",
    description: "IT solutions delivered on time",
  },
  {
    id: 3,
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-slate-800",
    number: 35,
    suffix: "",
    title: "Happy PR Clients",
    description: "Clients satisfied with our PR campaigns",
  },
  {
    id: 4,
    icon: <Smile className="w-6 h-6 text-white" />,
    color: "bg-orange-400",
    number: 40,
    suffix: "",
    title: "Happy IT Clients",
    description: "Clients satisfied with our IT projects",
  },
  {
  id: 5,
  icon: <FaChartLine className="w-6 h-6 text-white" />,
  color: "bg-success",
  number: 10,
  suffix: "+",
  title: "Investment Opportunities",
  description: "Empowering startups with capital, strategic investors, and long-term growth support.",
},
];

// ------------------- Circle Features -------------------
const circleFeatures = [
  {
    id: 1,
    title: "Expert team of professionals",
    description:
      "Our experienced IT and PR specialists deliver innovative solutions tailored to your business goals.",
    icon: <Users className="w-7 h-7 text-white" />,
    color: "bg-orange-500",
  },
  {
    id: 2,
    title: "24/7 customer support",
    description:
      "Our dedicated support team is available around the clock to assist you whenever you need help.",
    icon: <Headphones className="w-7 h-7 text-white" />,
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Proven track record",
    description:
      "We have successfully delivered projects for businesses across multiple industries with measurable results.",
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    color: "bg-slate-800",
  },
  {
    id: 4,
    title: "End-to-end IT & PR solutions",
    description:
      "From strategy and development to branding and digital marketing, we handle every stage of your growth.",
    icon: <Cpu className="w-7 h-7 text-white" />,
    color: "bg-emerald-500",
  },
  {
    id: 5,
    title: "Tailored strategies for every industry",
    description:
      "Every business is unique, so we create customized IT and PR strategies that fit your industry and objectives.",
    icon: <Layers className="w-7 h-7 text-white" />,
    color: "bg-orange-600",
  },
  {
    id: 6,
    title: "95% success rate with 4.9/5 client rating",
    description:
      "Our consistent client satisfaction and successful project delivery reflect our commitment to excellence.",
    icon: <Star className="w-7 h-7 text-white" />,
    color: "bg-purple-500",
  },
  {
  id: 7,
  title: "End-to-End Funding Support",
  description:
    "We support businesses at every stage of growth—from Seed and Pre-Seed funding to Angel Investment, Venture Capital, Private Equity, Growth Capital, and IPO readiness through our investor network and funding partners.",
  icon: <Rocket className="w-7 h-7 text-white" />,
  color: "bg-orange-500",
},
{
  id: 8,
  title: "Strong Investor Network",
  description:
    "Gain access to a wide network of angel investors, venture capital firms, private equity funds, family offices, and strategic investors looking for high-potential businesses.",
  icon: <Users className="w-7 h-7 text-white" />,
  color: "bg-blue-500",
},
{
  id: 9,
  title: "Investment-Ready Business",
  description:
    "We help prepare your business with financial models, pitch decks, valuations, due diligence, and documentation to maximize your chances of securing investment.",
  icon: <FileText className="w-7 h-7 text-white" />,
  color: "bg-green-500",
},
{
  id: 10,
  title: "Strategic Growth Partnership",
  description:
    "Beyond funding, we help businesses scale through strategic planning, investor relations, fundraising strategy, and long-term growth support until IPO readiness.",
  icon: <TrendingUp className="w-7 h-7 text-white" />,
  color: "bg-purple-500",
},
];

// ------------------- Video Card Component -------------------
function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      whileInView={{ opacity: [0, 1], y: [30, 0] }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative w-full h-[420px] rounded-3xl overflow-hidden border border-gray-100 hover:border-orange-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <video
        ref={videoRef}
        src={src}
        controls
        muted
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-6 h-6 text-orange-500 ml-1"
          >
            <path d="M11.596 8.697 6.233 11.98A.802.802 0 0 1 5 11.283V4.717a.802.802 0 0 1 1.233-.697l5.363 3.283a.802.802 0 0 1 0 1.394z" />
          </svg>

        </div>

      </div>
      <p className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-2xl shadow-lg font-semibold text-slate-900">
        {title}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const [counters, setCounters] = useState(statsData.map(() => 0));

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

  return (
    <div className="pt-10">
      {/* ---------------- Hero Section ---------------- */}
     
      <section className="relative bg-gradient-to-b from-[#fffaf7] via-[#fffaf7] to-[#F8FAFC] overflow-hidden">

        {/* Background Shapes */}
        <div className="absolute -top-20 -left-24 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-0 -right-24 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[150px] opacity-30"></div>

        <div className="absolute left-12 top-80 hidden lg:block opacity-20">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-500"
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-48 lg:pt-24 lg:pb-52">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >

            {/* LEFT SIDE */}
            <div>

              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                Trusted IT & PR Solutions
              </div>
              <h1 className="max-w-lg text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                We do not just build websites, apps, & campaigns, we build your
                business
              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-600 max-w-lg">
                At Booklynk Services Pvt Ltd, we are passionate about turning
                visionary ideas into powerful digital realities. As a dynamic IT
                Solutions and PR company, we empower businesses to thrive in todays
                fast-paced digital ecosystem.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-orange-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-semibold hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-lg transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end lg:-mt-8">

              <div className="absolute -z-10 w-[450px] h-[450px] bg-orange-100 rounded-full blur-[140px] opacity-40 right-10"></div>

              {/* Main Image */}
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_35px_80px_rgba(15,23,42,0.15)] bg-white p-2">
                <Image
                  src="/hero-business.jpg"
                  alt="Booklynk Services"
                  width={900}
                  height={650}
                  className="w-full max-w-3xl rounded-[24px] object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .5 }}
                className="absolute bottom-6 left-4 bg-white rounded-2xl shadow-2xl px-4 py-2 border border-gray-100 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                    <CheckCircle className="text-orange-500 w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Trusted Partner
                    </h4>

                    <p className="text-base text-gray-500">
                      Helping Businesses Grow
                    </p>
                  </div>
                </div>

              </motion.div>

              <div className="absolute right-2 top-90 opacity-20 hidden lg:block">
                <div className="grid grid-cols-6 gap-3">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-orange-400"
                    />
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
      </section>
<ServicesSection/>
      {/* ---------------- Stats Section ---------------- */}

      <section
        id="stats-section"
        className="relative -mt-24 pb-24 bg-white z-20"
      >
        <div className="text-center pt-20 mb-20">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">

            Our Impact

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Delivering Results That Matter

          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-4 max-w-3xl mx-auto text-gray-500 text-lg">

            We combine innovation, technology, and strategic public relations to help businesses achieve measurable growth.

          </p>
          <div className="h-6"></div>


        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="bg-white rounded-[36px] border border-gray-100 shadow-[0_35px_80px_rgba(15,23,42,0.08)] overflow-hidden">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {statsData.map((stat, index) => (

                <motion.div
                  key={stat.id}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`group p-10 text-center transition-all duration-300 ${index !== statsData.length - 1
                    ? "lg:border-r border-gray-100"
                    : ""
                    }`}
                >

                  <div
                    className={`${stat.color} w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  <h2 className="text-6xl font-extrabold text-slate-900 tracking-tight">
                    {counters[index]}
                    {stat.suffix}
                  </h2>

                  <p className="mt-4 text-gray-500 text-lg font-medium leading-7">
                    {stat.title}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></div>
      </section>

      {/* ---------------- Features Section ---------------- */}
      <section className="relative py-24 bg-[#FAFBFC] border-t border-gray-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 blur-[120px] opacity-30 rounded-full"></div>

        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-100 blur-[120px] opacity-20 rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">

            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Solutions That Drive Business Growth
            </h2>

            <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 leading-8">
              With years of expertise in IT, PR, and Digital Marketing, we have
              empowered businesses and individuals to build strong digital
              identities and achieve measurable growth.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {circleFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                whileHover={{
                  y: -12,
                  scale: 1.03
                }}
                transition={{
                  duration: .35,
                  delay: index * 0.08
                }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-10 min-h-[340px] shadow-sm hover:shadow-2xl hover:border-orange-100 transition-all duration-300 overflow-hidden"
              >

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-50 -z-10"></div>


                <div
                  className={`relative z-10 ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="relative z-10 text-[30px] font-bold text-slate-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                <div className="relative z-10 w-14 h-1 bg-orange-500 rounded-full mb-6"></div>

                <p className="relative z-10 text-gray-500 leading-8 text-lg">
                  {feature.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

      </section >

      {/* ---------------- Videos Section (4 Videos) ---------------- */}
      <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
        {/* Background Blur */}
        <div className="absolute -top-10 right-10 w-80 h-80 bg-orange-100 blur-[120px] opacity-30 rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100 blur-[120px] opacity-20 rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">

            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
              Our Work
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Examples of the Work We Do
            </h2>

            <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 leading-8">
              These videos showcase the kind of IT, PR, and digital solutions we create for our clients.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
      </section >

      {/* ---------------- CTA Section ---------------- */}
      <section className="relative py-28 bg-[#FFF7F1] border-t border-gray-100 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-orange-100 rounded-full blur-[120px] opacity-30"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[140px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                Lets Build Together
              </span>
              <h3 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Ready to Get Started?
              </h3>
              <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
                Helping businesses scale smarter, faster, and stronger.
              </p>
              <Link
                href="/plans"
                className="inline-flex items-center gap-3 mt-10 bg-[var(--color-orange)] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative rounded-full bg-white p-5 shadow-2xl">
                <Image
                  width={600}
                  height={600}
                  src="/Ready to Get Started final.jpg"
                  alt="Get Started"
                  className="w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-0 bg-white rounded-2xl shadow-xl px-6 py-5 border border-gray-100"
              >
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">

                    <CheckCircle className="w-6 h-6 text-orange-500" />

                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Start Your Journey
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Lets build something amazing.
                    </p>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* ---------------- Footer Section ---------------- */}
      < Footer />
    </div >
  );
}