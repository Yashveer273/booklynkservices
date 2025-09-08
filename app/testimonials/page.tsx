// app/testimonials/page.tsx
"use client";

import { Quote } from "lucide-react";
import Footer from "../components/Footer";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Kavya Sharma",
      position: "M.D. at Global Tech",
      company: "Global Tech",
      content:
        "Book Lynk Services transformed my online presence! My patient inquiries have skyrocketed, thanks to their incredible reputation management strategies.",
      image: "/profile.jpg",
    },
    {
      id: 2,
      name: "Ravi Verma",
      position: "Creative Director",
      company: "Real Estate Business",
      content:
        "The social media campaign they created for my real estate business was a game changer. I'm seeing more engagement and leads than ever before!",
      image: "/profile.jpg",
    },
    {
      id: 3,
      name: "Meera Choudhary",
      position: "Entrepreneur",
      company: "Personal Business",
      content:
        "Their content strategy significantly improved my visibility online. I can't imagine growing my brand without them.",
      image: "/profile.jpg",
    },
    {
      id: 4,
      name: "Sahil Verma",
      position: "Startup Founder",
      company: "Tech Startup",
      content:
        "Very professional and results-driven. They helped optimize my online presence drastically.",
      image: "/profile.jpg",
    },
    {
      id: 5,
      name: "Neha Joshi",
      position: "Fitness Coach",
      company: "Personal Trainer",
      content:
        "Couldn’t be happier with the service! Quick, efficient, and personalized.",
      image: "/profile.jpg",
    },
    {
      id: 6,
      name: "Varun Kapoor",
      position: "App Developer",
      company: "Mobile Solutions",
      content:
        "Great experience overall. Support team was responsive and understood our needs perfectly.",
      image: "/profile.jpg",
    },
    {
      id: 7,
      name: "Aman Singh",
      position: "YouTuber",
      company: "YouTube Channel",
      content:
        "Simply put, they’re the best in the business! Their tailored approach and exceptional service made all the difference for my practice.",
      image: "/profile.jpg",
    },
    {
      id: 8,
      name: "Riya Mehra",
      position: "Digital Marketer",
      company: "Marketing Agency",
      content:
        "Incredible team and amazing support! I’ve seen real growth since working with them.",
      image: "/profile.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 mt-8">
          Client <span className="text-[#e03e00]">Testimonials</span>
        </h2>

        <div className="space-y-8 sm:space-y-10">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 sm:p-8 rounded-2xl shadow-md ${
                index % 2 === 1 ? "bg-[#e03e00] text-white" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-semibold">{t.name}</h3>
                <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4">
                  {t.position} @ {t.company}
                </p>
                <div className="flex flex-col sm:flex-row items-center md:items-start">
                  <Quote
                    className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-0 sm:mr-2 ${
                      index % 2 === 1 ? "text-white/70" : "text-[#e03e00]"
                    }`}
                  />
                  <p className="leading-relaxed text-sm sm:text-base max-w-3xl">
                    {t.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with spacing */}
      <div className="mt-12 sm:mt-20">
        <Footer />
      </div>
    </div>
  );
}
