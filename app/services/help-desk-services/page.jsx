"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  MonitorCheck,
  MessageSquare,
  Users,
  Clock3,
  TicketCheck,
  ShieldCheck,
  Search,
  Zap,
  Layers3,
  LifeBuoy,
  LockKeyhole,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| HELP DESK SERVICES DATA
|--------------------------------------------------------------------------
*/

const HELP_DESK_SERVICES_DATA = {
  slug: "help-desk-services",

  page: {
    eyebrow: "HELP DESK SERVICES",
    title: "IT Help Desk Services",
    highlightedTitle: "Built for Seamless Support",
    description:
      "Deliver fast, reliable and professional IT support to your users with flexible help desk services designed for MSPs, businesses and IT teams.",
  },

  overview: {
    title: "Help Desk Support Built Around Your Business",
    description:
      "From day-to-day end-user support to Microsoft 365 assistance, workstation troubleshooting, remote support and ticket management, our help desk services extend your IT team and keep users productive.",

    stats: [
      {
        value: "24/7",
        label: "Support Availability",
      },
      {
        value: "L1-L3",
        label: "Technical Support",
      },
      {
        value: "ITIL",
        label: "Service Approach",
      },
      {
        value: "MSP",
        label: "White-Label Ready",
      },
    ],
  },

  services: [
    {
      id: "24x7-live-help-desk",
      code: "24/7 LIVE HELP DESK",
      title: "24/7 Live Help Desk",
      shortTitle: "Always-On End User Support",
      icon: Headphones,

      description:
        "Provide your users with reliable technical support around the clock through phone, email, chat and ticket-based support.",

      features: [
        "24/7 technical support",
        "Phone, email and chat support",
        "Ticket creation and management",
        "Password and account assistance",
        "Remote troubleshooting",
        "Issue escalation",
      ],

      idealFor:
        "Businesses and MSPs that need dependable technical support coverage without maintaining a large internal help desk.",
    },

    {
      id: "level-1-support",
      code: "LEVEL 1 SUPPORT",
      title: "Level 1 Help Desk",
      shortTitle: "First-Line Technical Support",
      icon: LifeBuoy,

      description:
        "Resolve common IT issues quickly through a structured first-line support process focused on fast response and user satisfaction.",

      features: [
        "Password reset assistance",
        "Basic application support",
        "Desktop troubleshooting",
        "Printer and peripheral support",
        "Basic network troubleshooting",
        "Ticket triage and escalation",
      ],

      idealFor:
        "Organizations that need an experienced first-line support team to handle high-volume everyday IT requests.",
    },

    {
      id: "level-2-support",
      code: "LEVEL 2 SUPPORT",
      title: "Level 2 Technical Support",
      shortTitle: "Advanced IT Troubleshooting",
      icon: MonitorCheck,

      description:
        "Provide deeper technical troubleshooting for incidents that require additional expertise beyond standard first-line support.",

      features: [
        "Advanced workstation troubleshooting",
        "Microsoft 365 support",
        "Application troubleshooting",
        "Network connectivity troubleshooting",
        "System configuration support",
        "Escalation management",
      ],

      idealFor:
        "IT teams and MSPs that need additional technical depth for complex user and infrastructure-related support issues.",
    },

    {
      id: "microsoft-365-support",
      code: "MICROSOFT 365 SUPPORT",
      title: "Microsoft 365 Support",
      shortTitle: "Microsoft Cloud Productivity Support",
      icon: Layers3,

      description:
        "Keep Microsoft 365 users productive with support across Microsoft 365 applications, accounts, email, Teams and collaboration services.",

      features: [
        "Microsoft 365 user support",
        "Exchange Online assistance",
        "Microsoft Teams support",
        "SharePoint support",
        "Account and licensing assistance",
        "MFA and access troubleshooting",
      ],

      idealFor:
        "Organizations that depend on Microsoft 365 and need responsive support for their users and cloud productivity environment.",
    },

    {
      id: "remote-it-support",
      code: "REMOTE IT SUPPORT",
      title: "Remote IT Support",
      shortTitle: "Fast Remote Troubleshooting",
      icon: MessageSquare,

      description:
        "Resolve user issues remotely using secure remote-support workflows that reduce downtime and eliminate unnecessary onsite visits.",

      features: [
        "Remote desktop assistance",
        "Workstation troubleshooting",
        "Software installation support",
        "Configuration assistance",
        "Performance troubleshooting",
        "Remote issue resolution",
      ],

      idealFor:
        "Distributed businesses and MSPs supporting remote and hybrid employees across multiple locations.",
    },

    {
      id: "white-label-help-desk",
      code: "WHITE-LABEL HELP DESK",
      title: "White-Label Help Desk",
      shortTitle: "Support Under Your Brand",
      icon: Users,

      description:
        "Extend your service offering with a professional help desk team that works under your brand, processes and communication standards.",

      features: [
        "Your brand and communication",
        "Your ticketing platform",
        "Custom support procedures",
        "Client-facing support",
        "SLA-based ticket handling",
        "Seamless escalation to your team",
      ],

      idealFor:
        "MSPs that want to expand their help desk capacity while maintaining complete ownership of the customer relationship.",
    },
  ],

  capabilities: [
    {
      title: "Fast Response",
      description:
        "Structured support workflows help users receive timely responses and reduce unnecessary downtime.",
      icon: Clock3,
    },
    {
      title: "Ticket Management",
      description:
        "Every support request can be tracked, prioritized, documented and escalated through an organized ticket process.",
      icon: TicketCheck,
    },
    {
      title: "Technical Expertise",
      description:
        "Access trained support engineers capable of handling everyday user issues through more advanced technical problems.",
      icon: ShieldCheck,
    },
    {
      title: "User Experience",
      description:
        "Professional communication and consistent support processes help improve employee and end-user satisfaction.",
      icon: Users,
    },
  ],
};

/*
|--------------------------------------------------------------------------
| HELP DESK SERVICE CARD
|--------------------------------------------------------------------------
*/

function HelpDeskServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative
        bg-white
        border
        border-stone-200
        rounded-[28px]
        p-7
        sm:p-8
        lg:p-9
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#FFB38A]
        hover:shadow-[0_25px_70px_-25px_rgba(255,85,0,0.25)]
      "
    >
      {/* Decorative background */}
      <div
        className="
          absolute
          -right-20
          -top-20
          w-56
          h-56
          rounded-full
          bg-[#FFF4ED]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      <div className="relative z-10">
        {/* Icon + number */}
        <div className="flex items-start justify-between mb-8">
          <div
            className="
              w-16
              h-16
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
            <Icon className="w-8 h-8" />
          </div>

          <span
            className="
              px-3
              py-1.5
              rounded-full
              bg-stone-100
              text-stone-500
              text-[10px]
              sm:text-xs
              font-extrabold
              tracking-[0.15em]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Code */}
        <div className="mb-3">
          <span
            className="
              text-[#FF5500]
              text-xs
              font-extrabold
              tracking-[0.14em]
            "
          >
            {service.code}
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            font-extrabold
            text-[#1E2022]
            tracking-tight
            leading-tight
          "
        >
          {service.title}
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-2
            text-sm
            font-semibold
            text-stone-400
          "
        >
          {service.shortTitle}
        </p>

        {/* Description */}
        <p
          className="
            mt-5
            text-sm
            sm:text-[15px]
            text-stone-600
            leading-7
          "
        >
          {service.description}
        </p>

        {/* Features */}
        <div
          className="
            mt-7
            pt-7
            border-t
            border-stone-100
          "
        >
          <p
            className="
              text-xs
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-stone-400
              mb-4
            "
          >
            Service Includes
          </p>

          <div className="space-y-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-start
                  gap-3
                "
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
                    mt-0.5
                  "
                >
                  <ShieldCheck className="w-3 h-3 text-[#FF5500]" />
                </div>

                <span
                  className="
                    text-sm
                    text-stone-700
                    leading-5
                  "
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For */}
        <div
          className="
            mt-7
            rounded-2xl
            bg-stone-50
            border
            border-stone-100
            p-5
          "
        >
          <p
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-[#FF5500]
              mb-2
            "
          >
            Ideal For
          </p>

          <p
            className="
              text-sm
              text-stone-600
              leading-6
            "
          >
            {service.idealFor}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          relative
          z-10
          mt-8
          pt-6
          border-t
          border-stone-100
        "
      >
        <Link
          href="/contact"
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
          <span
            className="
              group-hover/link:text-[#FF5500]
              transition-colors
            "
          >
            Discuss This Service
          </span>

          <span
            className="
              w-10
              h-10
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
| CAPABILITY CARD
|--------------------------------------------------------------------------
*/

function CapabilityCard({ capability }) {
  const Icon = capability.icon;

  return (
    <div
      className="
        bg-white
        border
        border-stone-200
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#FFD0BA]
        hover:shadow-lg
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-[#FFF0E7]
          text-[#FF5500]
          flex
          items-center
          justify-center
          mb-5
        "
      >
        <Icon className="w-6 h-6" />
      </div>

      <h3
        className="
          text-lg
          font-extrabold
          text-[#1E2022]
          mb-2
        "
      >
        {capability.title}
      </h3>

      <p
        className="
          text-sm
          text-stone-600
          leading-6
        "
      >
        {capability.description}
      </p>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| HELP DESK SERVICES PAGE
|--------------------------------------------------------------------------
*/

export default function HelpDeskServicesPage() {
  const data = HELP_DESK_SERVICES_DATA;

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#FAF8F6]
          pt-12
          pb-20
          sm:pt-16
          sm:pb-24
          lg:pt-20
          lg:pb-28
        "
      >
        {/* Background decoration */}

        <div
          className="
            absolute
            -top-40
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#FFF0E7]
            blur-3xl
            opacity-70
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#FFF5EF]
            blur-3xl
            opacity-60
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            relative
            z-10
          "
        >
          {/* Back */}
          <Link
            href="/#services"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-stone-500
              hover:text-[#FF5500]
              transition-colors
              mb-12
              mt-12
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            {/* Eyebrow */}
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
                font-extrabold
                uppercase
                tracking-wider
                mb-6
              "
            >
              <Headphones className="w-4 h-4" />
              {data.page.eyebrow}
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-[64px]
                font-extrabold
                text-[#1E2022]
                tracking-tight
                leading-[1.02]
              "
            >
              {data.page.title}

              <span className="block text-[#FF5500] mt-2">
                {data.page.highlightedTitle}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                text-base
                sm:text-lg
                lg:text-xl
                text-stone-600
                leading-8
                max-w-3xl
              "
            >
              {data.page.description}
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="
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
                Talk to Our Support Team

                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#help-desk-services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-xl
                  bg-white
                  border
                  border-stone-200
                  hover:border-[#FFB38A]
                  text-[#1E2022]
                  text-sm
                  font-bold
                  transition-all
                "
              >
                Explore Help Desk Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section
        className="
          py-16
          sm:py-20
          lg:py-24
          bg-white
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1.3fr_1fr]
              gap-12
              lg:gap-20
              items-start
            "
          >
            <div>
              <p
                className="
                  text-[#FF5500]
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.15em]
                  mb-4
                "
              >
                IT Support Operations
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-[#1E2022]
                  tracking-tight
                  leading-tight
                "
              >
                {data.overview.title}
              </h2>

              <p
                className="
                  mt-6
                  text-base
                  text-stone-600
                  leading-7
                  max-w-2xl
                "
              >
                {data.overview.description}
              </p>
            </div>

            {/* Stats */}
            <div
              className="
                grid
                grid-cols-2
                gap-4
              "
            >
              {data.overview.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    bg-[#FAF8F6]
                    border
                    border-stone-200
                    p-6
                  "
                >
                  <div
                    className="
                      text-3xl
                      sm:text-4xl
                      font-extrabold
                      text-[#FF5500]
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-stone-500
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HELP DESK SERVICES
      ========================================================= */}

      <section
        id="help-desk-services"
        className="
          py-20
          sm:py-24
          lg:py-28
          bg-[#FAF8F6]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Heading */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-[#FFD9C4]
                text-[#D94A00]
                text-xs
                font-extrabold
                uppercase
                tracking-wider
                mb-5
              "
            >
              <Headphones className="w-3.5 h-3.5" />
              Help Desk Services
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
                leading-tight
              "
            >
              IT support designed for
              <span className="text-[#FF5500]">
                {" "}better user experiences
              </span>
            </h2>

            <p
              className="
                mt-5
                text-base
                sm:text-lg
                text-stone-600
                leading-7
              "
            >
              Choose the help desk support model that best fits your
              organization's users, service requirements and operational
              structure.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              lg:gap-7
            "
          >
            {data.services.map((service, index) => (
              <HelpDeskServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section
        className="
          py-20
          sm:py-24
          lg:py-28
          bg-white
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="max-w-3xl mb-12">
            <p
              className="
                text-[#FF5500]
                text-xs
                font-extrabold
                uppercase
                tracking-[0.15em]
                mb-4
              "
            >
              Help Desk Capabilities
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
              "
            >
              Support operations that keep
              <span className="text-[#FF5500]">
                {" "}your users productive
              </span>
            </h2>
          </div>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {data.capabilities.map((capability) => (
              <CapabilityCard
                key={capability.title}
                capability={capability}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#1E2022]
              px-7
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              lg:py-14
            "
          >
            {/* Decorative circles */}

            <div
              className="
                absolute
                -right-20
                -top-20
                w-72
                h-72
                rounded-full
                border
                border-[#FF5500]/20
              "
            />

            <div
              className="
                absolute
                -right-5
                -top-5
                w-44
                h-44
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
                <div className="flex items-center gap-2 mb-4">
                  <LockKeyhole className="w-5 h-5 text-[#FF5500]" />

                  <span
                    className="
                      text-[#FF5500]
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-wider
                    "
                  >
                    Strengthen Your IT Support
                  </span>
                </div>

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-extrabold
                    text-white
                    tracking-tight
                  "
                >
                  Need a help desk team built around your business?
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    text-stone-400
                    leading-7
                  "
                >
                  Tell us about your users, support requirements, tools and
                  service levels. Our team can recommend the right help desk
                  model for your organization.
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
                Talk to Our Support Team

                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}