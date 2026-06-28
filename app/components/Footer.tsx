"use client";

import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

    // Success
    setIsSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white pt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-3">
                <img
                  src="/Book-Lynk-Services-Pvt-Ltd-logo.jpg"
                  alt="Booklynk Services Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>

                <h2 className="text-3xl font-bold text-white">

                  Book <span className="text-orange-500">lynk</span>

                </h2>

                <p className="text-gray-400 text-sm">

                  Services Pvt Ltd

                </p>

              </div>
            </div>
            <p className="text-gray-400 leading-8 max-w-sm mt-6">
              Built by professionals, powered by innovation.
            </p>

            <div className="w-24 h-1 bg-orange-500 rounded-full mt-6 mb-8"></div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/booklynkservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/book.lynk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/booklynkservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@BooklynkServices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/booklynkservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          {/* Newsletter */}
          {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h5 className="text-md font-semibold text-[var(--color-navy)] mb-3">
              Be the first to know
            </h5>
            <p className="text-gray-500 text-sm mb-4">
              We&#39;ll send you only what matters — no noise, no spam.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-700 font-medium">
                  Thank you for subscribing! 🎉
                </p>
                <p className="text-green-600 text-sm mt-1">
                  You&#39;ll receive our latest updates and insights.
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>
            )}
          </div> */}

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >About Us</Link>
              </li>
              <li>
                <Link href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >Services</Link>
              </li>
              <li>
                <Link href="/portfolio"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >Portfolio</Link>
              </li>
              <li>
                <Link href="/plans"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >Plans</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Information
            </h4>
            <ul className="space-y-5">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund">Refund Policy</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-5">
              <p className="text-gray-400 leading-7">hello@booklynkservices.com</p>
              <p className="text-gray-400 leading-7">+91 9650316607</p>
              <p className="text-gray-400 leading-8 whitespace-pre-line">
                {`624, Tower-1
Assotech Business Cresterra
Sector 135
Noida - 201301
India`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Booklynk Services Pvt Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/style-guide"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              Style Guide
            </Link>
            <Link href="/changelog"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              Changelog
            </Link>
            <Link href="/licensing"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}