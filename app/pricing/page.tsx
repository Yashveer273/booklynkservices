// app/pricing/page.tsx
import { Check, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer"; 

export default function Pricing() {
  const plans = [
    {
      name: "All-In-One Growth Package",
      price: "₹25,000",
      period: "month",
      yearlyPrice: "₹2,40,000/year (Save ₹60,000)",
      description: "Everything your brand needs — in one powerful package",
      features: [
        "Website Maintenance – speed, bug fixes, security checks, backups, reports",
        "SEO – keyword research, on-page & off-page, Google My Business, monthly reports",
        "ASO – optimized app titles, keywords, visuals, review management, tracking",
        "Social Media Marketing – 12-15 posts/month, calendar, reels, captions, engagement",
        "Monthly technical & marketing reports",
        "Dedicated support team",
        "No hidden charges",
      ],
      popular: true,
    },
  ];

  const services = [
    {
      title: "🔧 Website Maintenance",
      desc: "Your digital home deserves the best care.",
      points: [
        "Regular speed & performance optimization",
        "Bug fixing and UI/UX improvements",
        "Weekly security checks and backups",
        "Mobile & browser compatibility updates",
        "Monthly technical audit reports",
      ],
    },
    {
      title: "🌍 SEO",
      desc: "Get discovered by your ideal customers.",
      points: [
        "In-depth keyword research & competitor analysis",
        "On-page optimization (meta tags, headings, URLs)",
        "Off-page link-building & citation submissions",
        "Google My Business & local SEO setup",
        "Monthly traffic & ranking reports",
      ],
    },
    {
      title: "📱 ASO (App Store Optimization)",
      desc: "Stand out in crowded app stores.",
      points: [
        "Optimized app titles, keywords, & descriptions",
        "High-converting screenshots & visuals",
        "Review management strategies",
        "Category targeting & competitor benchmarks",
        "Monthly performance tracking (Android + iOS)",
      ],
    },
    {
      title: "📢 Social Media Marketing",
      desc: "Stay active. Stay relevant. Stay viral.",
      points: [
        "12–15 custom-designed posts per month",
        "Content calendar (Instagram, Facebook, LinkedIn & more)",
        "Reels & story design support",
        "Caption, hashtag & engagement strategy",
        "Basic community interaction (likes, comments, DMs)",
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight mt-8">
              Digital Growth & Maintenance Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Is your business struggling to stay visible online? Do you lack
              time to manage your website, rank on Google, grow your app, or
              post on social media? 
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              <span className="font-semibold">We've got you covered.</span>
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              We offer a comprehensive monthly service that keeps your website
              optimized, your SEO strong, your app visible, and your social
              media buzzing — all for just{" "}
              <span className="font-bold text-[#ff4500]">₹25,000/month or ₹2,40,000/year.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              What's Included
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              A complete package of growth services designed to make your brand thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 min-h-[250px] sm:min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center leading-tight">
                    <span className="mr-2 text-xl sm:text-2xl">{service.title.split(" ")[0]}</span>
                    {service.title.replace(/^[^\s]+ /, "")}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4">{service.desc}</p>

                  <ul className="space-y-2">
                    {service.points.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm">
                        <div className="flex-shrink-0 w-4 h-4 bg-[#ff4500]/10 rounded-full  flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff4500]" />
                        </div>
                        <span className="leading-relaxed text-black">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-black text-white shadow-xl scale-100 sm:scale-105"
                  : "bg-white text-gray-900 shadow"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <span className="bg-[#ff4500] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-2 leading-tight ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm sm:text-base">{plan.description}</p>

                  <div className="flex flex-col items-center">
                    <span
                      className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm sm:text-base">/{plan.period}</span>
                    <span className="text-[#ff4500] mt-2 font-medium text-sm sm:text-base text-center">
                      {plan.yearlyPrice}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 bg-[#ff4500]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#ff4500]" />
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors text-sm sm:text-base ${
                    plan.popular
                      ? "bg-[#ff4500] text-white hover:bg-[#e63e00]"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.popular ? "Get Started" : "View Plan"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">
                💡 One Team. All Services.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                No need to juggle freelancers or agencies — we handle it all,
                providing a seamless and integrated solution for your digital
                needs.
              </p>
            </div>
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">
                📈 Data-Driven Execution.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We analyze data, track performance, and make informed decisions
                to bring you real, measurable results.
              </p>
            </div>
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">
                🤝 Transparent Communication.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Expect weekly updates and detailed monthly reports. We believe
                in clear, honest communication with no fluff, keeping you in the
                loop.
              </p>
            </div>
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">🔒 Secure & Reliable.</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Your digital assets are always protected. We prioritize security
                and provide reliable services to ensure your online presence is
                safe and sound.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* ---------------- Footer Section ---------------- */}
      <Footer />
      
    </div>
  );
}