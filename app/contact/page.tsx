"use client";

import { useState } from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "../dash/firebasecon";
type FormData = {
  name: string;
  
  email: string;
  phone: string;

  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", subject: "", message: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
 
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Phone Number is invalid";
   
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg(false);
    } else {
      setErrors({});
      try {
      await addDoc(collection(firestore, "tickets"), {
        ...formData,
        status: "open", // default
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error saving ticket: ", error);
    }
      setSuccessMsg(true);

     
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, url: "https://www.facebook.com/BookLynkServices" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/BookLynkServices" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/company/booklynkservices" },
    { icon: <Youtube className="w-6 h-6" />, url: "https://www.youtube.com/@BookLynkServices" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/BookLynkServ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 relative">
      {/* Fullscreen success message */}
      {successMsg && (
        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center">
            Thank You!
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center max-w-2xl">
            Your message has been successfully sent. Our team at Book Lynk Services will get back to you shortly.
          </p>
          <button
            onClick={() => setSuccessMsg(false)}
            className="mt-8 bg-[#e03e00] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#c83500] transition"
          >
            Close
          </button>
        </div>
      )}

      <div
        className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden ${
          successMsg ? "opacity-30 pointer-events-none" : ""
        }`}
      >
        {/* Left Section */}
        <div className="bg-gradient-to-br from-[#e03e00] to-[#ff6a00] text-white p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 opacity-90 text-sm sm:text-base">
            Not sure what you need? Our team at Book Lynk Services will be happy
            to listen to you and suggest digital solutions you hadn’t considered.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>booklynkservices@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>+91 9650316607</span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:-translate-y-1 hover:scale-110 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
            We’d love to hear from you!
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
<input
                 type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e03e00]"
                />
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e03e00]"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e03e00]"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>
            </div>

            

            <div className="flex flex-col">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e03e00]"
              />
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            </div>

            <div className="flex flex-col">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e03e00]"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#e03e00] text-white py-3 rounded-lg font-semibold hover:bg-[#c83500] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
