"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { footer } from "framer-motion/client";

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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-3">
                <img
                  src="/Book-Lynk-Services-Pvt-Ltd-logo.jpg"
                  alt="Book Lynk Services Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold text-[var(--color-navy)]">
                Book Lynk Services
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Built by professionals, powered by innovation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/booklynkservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/book.lynk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/booklynkservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@BooklynkServices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/booklynkservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Newsletter */}
            <div className="md:col-span-3">
              <h5 className="text-md font-semibold text-[var(--color-navy)] mb-3">
                Be the first to know
              </h5>
              <p className="text-gray-500 text-sm mb-4">
                We'll send you only what matters — no noise, no spam.
              </p>

              {isSubscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-700 font-medium">
                    Thank you for subscribing! 🎉
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    You'll receive our latest updates and insights.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="Enter Email Address"
                      className={`flex-1 px-4 py-2 border rounded-l-lg focus:outline-none transition-colors ${
                        emailError
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-[var(--color-orange)]"
                      }`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubscribe(e);
                        }
                      }}
                    />
                    <button
                      onClick={handleSubscribe}
                      className="bg-[var(--color-orange)] text-white px-6 py-2 rounded-r-lg hover:bg-[var(--color-orange-hover)] transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm mt-2">{emailError}</p>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--color-navy)] mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--color-navy)] mb-4">
                Information
              </h4>
              <ul className="space-y-3">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/refund">Refund Policy</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--color-navy)] mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600">hello@booklynkservices.com</p>
                <p className="text-gray-600">+91 9650316607</p>
                <p className="text-gray-600">
                  624, tower-1 Assotech business cresterra Sector 135, Noida
                  201301, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Book Lynk Services Pvt Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/style-guide">Style Guide</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/licensing">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

