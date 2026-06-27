// app/services/FundingSupportSection.tsx

import Link from "next/link";
import {
  Rocket,
  Users,
  Landmark,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function FundingSupportSection() {
  const features = [
    {
      icon: Rocket,
      title: "Seed to IPO Funding",
      description:
        "Funding support from seed stage to growth funding, pre-IPO, and IPO readiness.",
    },
    {
      icon: Users,
      title: "Investor Network",
      description:
        "Access to angel investors, venture capital firms, private equity, and strategic partners.",
    },
    {
      icon: Landmark,
      title: "Direct Investment",
      description:
        "For selected businesses, we help with direct capital and investment support.",
    },
    {
      icon: FileText,
      title: "Investment Readiness",
      description:
        "Pitch deck, valuation, financial model, business profile, and due diligence support.",
    },
  ];

  const points = [
    "Seed funding and startup capital support",
    "Angel investors, VC, PE, and strategic funding partners",
    "Pitch deck, valuation, business plan, and documentation support",
    "Growth funding, pre-IPO planning, and IPO readiness",
  ];

  return (
    <section className="w-full pt-0 pb-12 sm:pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 sm:gap-10 lg:gap-14 items-stretch">
        {/* Image */}
        <div className="order-1 h-full">
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-full lg:min-h-[720px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop"
              alt="Funding Support"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-5 max-w-full sm:max-w-[310px]">
              <p className="text-sm font-semibold text-gray-500 mb-1">
                Funding Journey
              </p>

              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Seed to IPO
              </h4>

              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Complete capital, investor, and growth support.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-2 flex flex-col justify-start">
          <span className="inline-block text-sm sm:text-base font-semibold text-gray-700 mb-3">
            Funding Assistance
          </span>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Funding Support
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Booklynk Services helps startups, growing businesses, and established
            companies raise capital through direct investment support, investor
            connections, business loans, venture capital, private equity, and
            pre-IPO funding opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <ul className="space-y-3 mb-8">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start text-sm sm:text-base text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 w-full sm:w-fit"
          >
            Connect for Funding
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}