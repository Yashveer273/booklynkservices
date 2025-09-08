// app/about/page.tsx
"use client";
import Footer from "../components/Footer"; 


import { Facebook, Instagram, Linkedin, Youtube, Twitter, } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  const reasons = [
    {
      title: 'Expert Team',
      description: 'Our team consists of industry experts with years of experience in their respective fields.',
    },
    {
      title: 'Proven Results',
      description: 'We have a track record of delivering successful projects that exceed client expectations.',
    },
    {
      title: 'Customer-Centric',
      description: 'We put our clients first and tailor our solutions to meet their specific needs.',
    },
    {
      title: 'Innovation Focus',
      description: 'We stay ahead of the curve by adopting the latest technologies and methodologies.',
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to assist you.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. We believe in honest and transparent pricing.',
    },
  ]

  return (
    <div className="bg-[var(--color-lightgray)]">
      {/* Hero Section - Moved Higher */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Sub-heading / Tagline - Moved to top */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 font-medium mt-8">
            Empowering Businesses with IT & PR Solutions
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-black leading-tight">
            We deliver tailored strategies, seamless technology, 
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>
            and proven results to help your business grow.
          </h1>

          {/* Optional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 rounded-full bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-hover)] transition-colors text-sm sm:text-base"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-[var(--color-orange)] text-[var(--color-orange)] font-semibold hover:bg-[var(--color-orange)] hover:text-white transition-colors text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      {/* Mission Section - Full width */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            
            {/* Left side text */}
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-left lg:pl-8 flex flex-col justify-start"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[var(--color-navy)]">
                Our Mission
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-navy)] leading-tight">
                  Elevate Your Online Presence with Us
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At Book Lynk Services, we help individuals and businesses build powerful digital identities.
                  As a leading IT and media-tech company, we combine innovative technology with strategic storytelling
                  to boost visibility, trust, and growth.
                </p>
              </div>
            </motion.div>

            {/* Right side image */}
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-8 xl:pr-20 mt-6 lg:mt-0"
            >
              <img
                src="/our mission.jpg"
                alt="Our Mission"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--color-lightgray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[var(--color-navy)]">Our Vision</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To be the leading partner for businesses by driving growth through impactful PR, innovative IT solutions, and complete digital transformation.
              </p>
            </motion.div>
            
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[var(--color-navy)]">Our Values</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-orange)] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Excellence in PR & IT solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-teal)] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Integrity and transparency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Innovation and adaptability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Client growth is our success</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4 sm:mb-6 leading-tight">
              Why Choose Book Lynk Services Pvt Ltd?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition through our commitment to excellence, innovative approach, and dedication to client success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-navy)] mb-3 sm:mb-4">{reason.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              Let's work together to elevate your brand and achieve your business goals through our comprehensive IT and PR solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[var(--color-orange)] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-orange-hover)] transition-colors text-sm sm:text-base"
              >
                Get Started Today
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-navy)] transition-colors text-sm sm:text-base"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
     
 <Footer />
    </div>
  )
}