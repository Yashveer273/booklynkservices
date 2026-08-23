"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Server,
  ShieldCheck,
  Users,
  Cloud,
  DatabaseBackup,
  CheckCircle2,
  Clock3,
  Network,
  Headphones,
  Zap,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| NOC SERVICES DATA
|--------------------------------------------------------------------------
| This JSON-style data is the content source for the complete NOC Services
| page. The UI below is generated from this data.
|--------------------------------------------------------------------------
*/

const NOC_SERVICES_DATA = {
  slug: "noc-services",

  page: {
    eyebrow: "NOC Services",
    title: "24/7 Network Operations",
    highlightedTitle: "Built for Continuous IT Operations",
    description:
      "Keep your infrastructure available, stable, secure and performing with flexible NOC services designed around your operational requirements.",
  },

  overview: {
    title: "Flexible NOC Services for Every Operational Model",
    description:
      "Whether you need continuous monitoring, a shared NOC team, dedicated engineers, remote project support or managed business continuity, our NOC services can be aligned with your infrastructure and business requirements.",

    stats: [
      {
        value: "24/7",
        label: "Monitoring & Operations",
      },
      {
        value: "5",
        label: "NOC Service Models",
      },
      {
        value: "SLA",
        label: "Driven Operations",
      },
      {
        value: "24/7",
        label: "Operational Support",
      },
    ],
  },

  services: [
    {
      id: "maas",
      code: "MAAS",
      title: "Monitoring as a Service",
      shortTitle: "Monitoring as a Service",
      icon: Activity,

      description:
        "Proactive monitoring of your IT infrastructure to identify performance issues, availability problems and operational incidents before they impact your business.",

      features: [
        "24/7 infrastructure monitoring",
        "Network and server monitoring",
        "Availability and performance monitoring",
        "Alert management and escalation",
        "Proactive incident detection",
        "Operational reporting",
      ],

      idealFor:
        "Organizations that need continuous infrastructure visibility without building a full internal monitoring team.",

      accent: "orange",
    },

    {
      id: "manage",
      code: "MANAGE",
      title: "24/7 Shared NOC",
      shortTitle: "24/7 Shared NOC",
      icon: Server,

      description:
        "A shared NOC model that provides round-the-clock operational monitoring, incident management and technical support through an experienced NOC team.",

      features: [
        "24/7 NOC operations",
        "Network and server monitoring",
        "Incident detection and response",
        "Alert triage and escalation",
        "SLA-based service delivery",
        "ITSM and ticketing integration",
      ],

      idealFor:
        "Businesses looking for reliable 24/7 NOC operations without the cost and complexity of maintaining a complete internal NOC.",

      accent: "orange",
    },

    {
      id: "agilepod",
      code: "AGILEPOD",
      title: "Dedicated NOC Team",
      shortTitle: "Dedicated NOC Team",
      icon: Users,

      description:
        "A dedicated NOC team aligned specifically with your infrastructure, tools, processes and operational requirements.",

      features: [
        "Dedicated NOC engineers",
        "Customer-specific processes",
        "Dedicated monitoring environment",
        "Incident and escalation management",
        "Customized SLA and workflows",
        "Direct collaboration with internal IT teams",
      ],

      idealFor:
        "Organizations that need a dedicated extension of their internal IT or network operations team.",

      accent: "orange",
    },

    {
      id: "rsa",
      code: "RSA",
      title: "Remote Flexis Projects",
      shortTitle: "Remote Flexis Projects",
      icon: Network,

      description:
        "Flexible remote technical resources for infrastructure projects, migrations, upgrades, troubleshooting and specialized operational requirements.",

      features: [
        "Remote technical engineering",
        "Infrastructure deployment support",
        "Network implementation support",
        "Migration and upgrade assistance",
        "Remote troubleshooting",
        "Flexible project-based engagement",
      ],

      idealFor:
        "Businesses that need additional technical resources for short-term projects, migrations or specialized infrastructure requirements.",

      accent: "orange",
    },

    {
      id: "backup",
      code: "BACKUP",
      title: "Managed Business Continuity",
      shortTitle: "Managed Business Continuity",
      icon: DatabaseBackup,

      description:
        "Managed backup and business continuity support designed to help protect critical systems, data and operations from unexpected disruption.",

      features: [
        "Managed backup operations",
        "Backup monitoring",
        "Recovery readiness monitoring",
        "Business continuity support",
        "Incident recovery assistance",
        "Operational reporting",
      ],

      idealFor:
        "Organizations that need dependable backup operations and business continuity support for critical infrastructure and applications.",

      accent: "orange",
    },
  ],

  capabilities: [
    {
      title: "24/7 Monitoring",
      description:
        "Continuous visibility across your critical infrastructure and operational environment.",
      icon: Clock3,
    },
    {
      title: "Incident Response",
      description:
        "Fast detection, triage, escalation and response to infrastructure incidents.",
      icon: ShieldCheck,
    },
    {
      title: "Network Operations",
      description:
        "Structured operational support for network, server and infrastructure environments.",
      icon: Network,
    },
    {
      title: "Technical Support",
      description:
        "Experienced engineers working with your existing teams, tools and workflows.",
      icon: Headphones,
    },
  ],
};

/*
|--------------------------------------------------------------------------
| SERVICE CARD
|--------------------------------------------------------------------------
*/

function NOCServiceCard({ service, index }) {
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
        {/* Top row */}
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
              tracking-[0.16em]
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
        <div className="mt-7 pt-7 border-t border-stone-100">
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
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="
                    w-5
                    h-5
                    shrink-0
                    mt-0.5
                    text-[#FF5500]
                  "
                />

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

      {/* Bottom action */}
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
| NOC SERVICES PAGE
|--------------------------------------------------------------------------
*/

export default function NOCServicesPage() {
  const data = NOC_SERVICES_DATA;

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
        {/* Background decorations */}
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
              <Activity className="w-4 h-4" />
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
                Talk to Our NOC Team
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#noc-services"
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
                Explore NOC Models
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW / STATS
      ========================================================= */}

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
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
                Our NOC Model
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
          NOC SERVICE MODELS
      ========================================================= */}

      <section
        id="noc-services"
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
          {/* Section heading */}
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
              <Server className="w-3.5 h-3.5" />
              NOC Service Models
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
              Choose the NOC model
              <span className="text-[#FF5500]">
                {" "}that fits your business
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
              From monitoring-only services to fully dedicated NOC
              operations, choose the engagement model that matches your
              infrastructure, workload and operational goals.
            </p>
          </div>

          {/* Service cards */}
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
              <NOCServiceCard
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

      <section className="py-20 sm:py-24 lg:py-28 bg-white">
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
              NOC Capabilities
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
              Operational support that keeps
              <span className="text-[#FF5500]">
                {" "}your IT running
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
          CTA
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
                  <Zap className="w-5 h-5 text-[#FF5500]" />

                  <span
                    className="
                      text-[#FF5500]
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-wider
                    "
                  >
                    Build Your NOC Model
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
                  Need a NOC service model built around your environment?
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
                  Tell us about your infrastructure, monitoring
                  requirements, SLA expectations and operational goals.
                  We can recommend the right NOC model for your business.
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
    </main>
  );
}