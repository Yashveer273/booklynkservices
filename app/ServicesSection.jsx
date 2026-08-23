import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Headset,
  Bug,
  UserCog,
  Sparkles,
  Check,
  ArrowRight,
  Activity,
  ShieldAlert,
  Cloud,
  Network,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| SERVICES DATA
|--------------------------------------------------------------------------
| This is the content layer for the Services section.
| The homepage shows only the important highlights.
| Complete service information should live on individual service pages.
|--------------------------------------------------------------------------
*/

const SERVICES_DATA = [
  {
    id: "noc",
    slug: "noc-services",
    title: "NOC Services",
    subtitle: "24/7 Network Operations",
    category: "operations",
    icon: Server,

    desc: "Keep your IT infrastructure available, stable, and performing with proactive 24/7 monitoring and operational support.",

    highlights: [
      "24/7 Network & Server Monitoring",
      "Incident Detection & Response",
      "SLA-Based Operations",
    ],

    features: [
      "24/7 infrastructure monitoring",
      "Network and server health monitoring",
      "Incident detection and remediation",
      "Performance and availability management",
      "Patch and maintenance support",
      "ITSM integration",
    ],

    accent: "orange",
  },

  {
    id: "soc",
    slug: "soc-services",
    title: "SOC & MDR",
    subtitle: "Security Operations Center",
    category: "security",
    icon: ShieldCheck,

    desc: "Protect your business with continuous security monitoring, threat detection, investigation, and rapid incident response.",

    highlights: [
      "24/7 Security Monitoring",
      "Threat Detection & Hunting",
      "Rapid Incident Response",
    ],

    features: [
      "24/7 security monitoring",
      "SIEM and XDR integration",
      "Endpoint Detection & Response",
      "Threat hunting",
      "Security incident investigation",
      "Security reporting and compliance support",
    ],

    accent: "orange",
  },

  {
    id: "helpdesk",
    slug: "help-desk-services",
    title: "Help Desk Services",
    subtitle: "IT User Support",
    category: "operations",
    icon: Headset,

    desc: "Deliver responsive technical support to your users through flexible help desk teams, structured workflows, and SLA-driven service.",

    highlights: [
      "First-Level Technical Support",
      "Multi-Channel Assistance",
      "SLA & Ticket Management",
    ],

    features: [
      "Phone, email, chat and ticket support",
      "First-call resolution",
      "Shared or dedicated support teams",
      "Ticket management",
      "Escalation management",
      "ITIL-aligned workflows",
    ],

    accent: "orange",
  },

  {
    id: "vapt",
    slug: "security-assessment-vapt",
    title: "Security Assessments",
    subtitle: "VAPT & Risk Assessment",
    category: "security",
    icon: Bug,

    desc: "Identify vulnerabilities before attackers do with structured vulnerability assessments and penetration testing.",

    highlights: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Actionable Security Reports",
    ],

    features: [
      "External vulnerability assessment",
      "Internal network assessment",
      "Web application testing",
      "Mobile application testing",
      "Penetration testing",
      "Risk prioritization and remediation guidance",
    ],

    accent: "orange",
  },

  {
    id: "engineers",
    slug: "dedicated-engineers",
    title: "Dedicated Engineers",
    subtitle: "IT & Remote Projects",
    category: "digital",
    icon: UserCog,

    desc: "Extend your technical capabilities with experienced engineers who integrate directly into your existing teams, tools, and workflows.",

    highlights: [
      "Cloud & DevOps Engineers",
      "Dedicated Technical Teams",
      "Flexible Engagement Models",
    ],

    features: [
      "Cloud engineering",
      "DevOps engineering",
      "Full-stack development",
      "Infrastructure engineering",
      "Remote project execution",
      "Dedicated technical resources",
    ],

    accent: "orange",
  },

  {
    id: "ai",
    slug: "ai-digital-solutions",
    title: "AI & Digital Solutions",
    subtitle: "AI, Web & Digital Growth",
    category: "digital",
    icon: Sparkles,

    desc: "Build intelligent digital experiences using AI-powered solutions, modern applications, automation, and digital growth strategies.",

    highlights: [
      "AI-Powered Experiences",
      "Custom Web & App Solutions",
      "Digital Growth & Automation",
    ],

    features: [
      "AI-powered recommendation systems",
      "Conversational AI experiences",
      "Custom web applications",
      "Custom mobile applications",
      "Digital automation",
      "Digital PR and growth solutions",
    ],

    accent: "orange",
  },
];

/*
|--------------------------------------------------------------------------
| FILTERS
|--------------------------------------------------------------------------
*/

const FILTERS = [
  {
    id: "all",
    label: "All Services",
  },
  {
    id: "operations",
    label: "IT Operations",
  },
  {
    id: "security",
    label: "Cybersecurity",
  },
  {
    id: "digital",
    label: "Digital & AI",
  },
];

/*
|--------------------------------------------------------------------------
| SERVICE CARD
|--------------------------------------------------------------------------
*/

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative
        bg-white
        border
        border-[#EAE5E1]
        rounded-[24px]
        p-7
        sm:p-8
        min-h-[430px]
        flex
        flex-col
        justify-between
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#FFD2BC]
        hover:shadow-[0_24px_60px_-20px_rgba(255,85,0,0.18)]
      "
    >
      {/* Decorative background */}
      <div
        className="
          absolute
          -right-16
          -top-16
          w-40
          h-40
          rounded-full
          bg-[#FFF4ED]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      <div className="relative z-10">
        {/* Icon + Number */}
        <div className="flex items-start justify-between mb-7">
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#FFF0E7]
              text-[#FF5500]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover:bg-[#FF5500]
              group-hover:text-white
              group-hover:scale-105
            "
          >
            <Icon className="w-7 h-7" />
          </div>

          <span
            className="
              text-[11px]
              font-bold
              tracking-[0.18em]
              text-stone-300
            "
          >
            {String(
              SERVICES_DATA.findIndex((item) => item.id === service.id) + 1
            ).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <div className="mb-5">
          <p className="text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-2">
            {service.subtitle}
          </p>

          <h3
            className="
              text-2xl
              sm:text-[25px]
              font-extrabold
              text-[#1E2022]
              tracking-tight
              leading-tight
            "
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            text-sm
            text-stone-600
            leading-6
            mb-7
          "
        >
          {service.desc}
        </p>

        {/* Highlights */}
        <div className="space-y-3">
          {service.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-stone-700"
            >
              <div
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-[#FFF0E7]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Check className="w-3 h-3 text-[#FF5500]" />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 mt-8 pt-6 border-t border-stone-100">
        <Link
          href={`/services/${service.slug}`}
          className="
            inline-flex
            items-center
            justify-between
            w-full
            text-sm
            font-bold
            text-[#1E2022]
            group/link
          "
        >
          <span className="group-hover/link:text-[#FF5500] transition-colors">
            Explore Service
          </span>

          <span
            className="
              w-9
              h-9
              rounded-full
              bg-[#FFF0E7]
              text-[#FF5500]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover/link:bg-[#FF5500]
              group-hover/link:text-white
              group-hover/link:translate-x-1
            "
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN SERVICES SECTION
|--------------------------------------------------------------------------
*/

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter(
          (service) => service.category === activeFilter
        );

  return (
    <section
      id="services"
      className="
        relative
        py-15
        sm:py-20
        lg:py-25
        bg-white
        overflow-hidden
      "
    >
      {/* Background decoration */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[350px]
          bg-[#FFF5EF]
          rounded-full
          blur-3xl
          opacity-60
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#FFF0E7]
              border
              border-[#FFD9C4]
              text-[#D94A00]
              text-xs
              font-bold
              uppercase
              tracking-wider
              mb-5
            "
          >
            <Activity className="w-3.5 h-3.5" />

            Our Core Services
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-[56px]
              font-extrabold
              text-[#1E2022]
              tracking-tight
              leading-[1.05]
              max-w-4xl
            "
          >
            Technology, Security & Support
            <span className="text-[#FF5500]">
              {" "}Built Around Your Business
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              text-stone-600
              leading-7
              max-w-3xl
            "
          >
            From 24/7 IT operations and cybersecurity to technical
            support, engineering, AI and digital solutions — our core
            services are designed to keep your business secure,
            available and ready to grow.
          </p>
        </div>

        {/* =========================================================
            SERVICE CATEGORY FILTER
        ========================================================= */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
            mb-10
            p-1.5
            bg-stone-100
            rounded-2xl
            w-fit
          "
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-5
                  py-2.5
                  rounded-xl
                  text-xs
                  sm:text-sm
                  font-bold
                  transition-all
                  duration-200
                  ${
                    active
                      ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/20"
                      : "text-stone-600 hover:text-[#FF5500] hover:bg-white"
                  }
                `}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            SERVICES GRID
        ========================================================= */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-7
          "
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <div
          className="
            mt-14
            sm:mt-16
            rounded-[28px]
            bg-[#1E2022]
            p-7
            sm:p-10
            lg:p-12
            relative
            overflow-hidden
          "
        >
          {/* Decorative circles */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-64
              h-64
              rounded-full
              border
              border-[#FF5500]/20
            "
          />

          <div
            className="
              absolute
              -right-8
              -top-8
              w-40
              h-40
              rounded-full
              border
              border-[#FF5500]/20
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
            "
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-[#FF5500]" />

                <span className="text-[#FF5500] text-xs font-bold uppercase tracking-wider">
                  Need a tailored solution?
                </span>
              </div>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-extrabold
                  text-white
                  tracking-tight
                "
              >
                Let’s build the right service model for your business.
              </h3>

              <p className="text-stone-400 text-sm mt-3 leading-6">
                Tell us about your infrastructure, security requirements,
                support needs, or digital project and our team can recommend
                the right combination of services.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                shrink-0
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-4
                rounded-xl
                bg-[#FF5500]
                hover:bg-[#E04A00]
                text-white
                text-sm
                font-bold
                transition-all
                shadow-lg
                shadow-[#FF5500]/20
              "
            >
              Talk to Our Team

              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}