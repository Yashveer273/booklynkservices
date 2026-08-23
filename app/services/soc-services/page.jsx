"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  MonitorCheck,
  Layers3,
  Cloud,
  Bug,
  UserRoundCheck,
  Users,
  Activity,
  Search,
  LockKeyhole,
  Zap,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| SOC & MDR SERVICES DATA
|--------------------------------------------------------------------------
| This data controls the content displayed throughout this page.
| Add/edit services here instead of hardcoding service cards in the UI.
|--------------------------------------------------------------------------
*/

const SOC_SERVICES_DATA = {
  slug: "soc-services",

  page: {
    eyebrow: "SOC & MDR",
    title: "Security Operations Center",
    highlightedTitle: "Built for Continuous Protection",
    description:
      "Protect your business with continuous security monitoring, advanced threat detection, investigation and rapid incident response delivered through flexible SOC and MDR service models.",
  },

  overview: {
    title: "Security Operations Built Around Your Business",
    description:
      "From endpoint and extended detection to SIEM, Microsoft 365 monitoring, security assessments and dedicated SOC operations, our security services provide continuous visibility and protection across your environment.",

    stats: [
      {
        value: "24/7",
        label: "Security Monitoring",
      },
      {
        value: "7",
        label: "Security Service Models",
      },
      {
        value: "MDR",
        label: "Managed Detection & Response",
      },
      {
        value: "SOC",
        label: "Security Operations",
      },
    ],
  },

  services: [
    {
      id: "edr-soc",
      code: "EDR SOC",
      title: "EDR SOC",
      shortTitle: "Endpoint Detection & Response",
      icon: MonitorCheck,

      description:
        "Continuous endpoint security monitoring and threat detection designed to identify suspicious activity, investigate threats and support rapid response across managed devices.",

      features: [
        "24/7 endpoint monitoring",
        "Endpoint threat detection",
        "Suspicious activity investigation",
        "Malware and ransomware detection",
        "Threat alert triage",
        "Incident escalation and response",
      ],

      idealFor:
        "Organizations that need continuous visibility and protection across employee devices, workstations and servers.",
    },

    {
      id: "xdr-soc",
      code: "XDR SOC",
      title: "XDR SOC",
      shortTitle: "Extended Detection & Response",
      icon: Layers3,

      description:
        "Extended security monitoring across endpoints, networks, cloud environments and other security signals to provide broader threat visibility and coordinated detection.",

      features: [
        "Cross-platform security monitoring",
        "Endpoint and network telemetry",
        "Cloud security visibility",
        "Threat correlation",
        "Advanced detection",
        "Incident investigation and response",
      ],

      idealFor:
        "Businesses with multiple security layers that need unified threat visibility across their IT environment.",
    },

    {
      id: "microsoft-365-mdr",
      code: "MICROSOFT 365 MDR",
      title: "Microsoft 365 MDR",
      shortTitle: "Managed Detection & Response",
      icon: Cloud,

      description:
        "Managed security monitoring for Microsoft 365 environments to identify suspicious activity, account compromise and security threats across cloud productivity services.",

      features: [
        "Microsoft 365 security monitoring",
        "Identity and account monitoring",
        "Suspicious login detection",
        "Email threat monitoring",
        "Cloud activity analysis",
        "Security incident escalation",
      ],

      idealFor:
        "Organizations that rely on Microsoft 365 and need continuous security monitoring across their cloud productivity environment.",
    },

    {
      id: "siem-as-a-service",
      code: "SIEM AS A SERVICE",
      title: "SIEM as a Service",
      shortTitle: "Security Information & Event Management",
      icon: Activity,

      description:
        "Centralized collection, correlation and analysis of security events from across your IT environment to improve threat visibility and security operations.",

      features: [
        "Centralized log collection",
        "Security event monitoring",
        "Event correlation",
        "Threat detection",
        "Security alert management",
        "Security reporting and dashboards",
      ],

      idealFor:
        "Businesses that need centralized security visibility without building and maintaining a complete SIEM operation internally.",
    },

    {
      id: "security-assessments",
      code: "SECURITY ASSESSMENTS",
      title: "Security Assessments",
      shortTitle: "Security Assessment & Risk Management",
      icon: Search,

      description:
        "Identify security weaknesses before attackers exploit them through structured assessments, vulnerability analysis and actionable security recommendations.",

      features: [
        "Security posture assessment",
        "Vulnerability assessment",
        "Network security assessment",
        "Application security assessment",
        "Risk identification",
        "Remediation recommendations",
      ],

      idealFor:
        "Organizations looking to understand their current security posture, identify weaknesses and prioritize security improvements.",
    },

    {
      id: "end-user-protection",
      code: "END USER PROTECTION PLAN",
      title: "End User Protection Plan",
      shortTitle: "Managed End User Security",
      icon: UserRoundCheck,

      description:
        "Protect employees and end-user devices with managed security controls designed to reduce exposure to malware, phishing, unauthorized access and other common threats.",

      features: [
        "Endpoint protection",
        "Malware protection",
        "Phishing protection",
        "Security monitoring",
        "Threat alert management",
        "End-user security support",
      ],

      idealFor:
        "Organizations that want managed protection for employees, endpoints and day-to-day user activity.",
    },

    {
      id: "dedicated-soc-team",
      code: "DEDICATED SOC TEAM",
      title: "Dedicated SOC Team",
      shortTitle: "Dedicated Security Operations",
      icon: Users,

      description:
        "A dedicated security operations team aligned with your environment, security tools, processes and incident response requirements.",

      features: [
        "Dedicated SOC analysts",
        "24/7 security operations",
        "Customer-specific monitoring",
        "Threat investigation",
        "Incident response coordination",
        "Customized security workflows",
      ],

      idealFor:
        "Organizations that require a dedicated extension of their internal security team with specialized SOC expertise.",
    },
  ],

  capabilities: [
    {
      title: "24/7 Security Monitoring",
      description:
        "Continuous monitoring of security events, endpoints, identities, cloud environments and critical systems.",
      icon: ShieldCheck,
    },
    {
      title: "Threat Detection",
      description:
        "Identify suspicious activity and potential threats using managed security monitoring and detection technologies.",
      icon: ShieldAlert,
    },
    {
      title: "Security Investigation",
      description:
        "Analyze security alerts and investigate potential incidents to understand their scope and impact.",
      icon: Search,
    },
    {
      title: "Incident Response",
      description:
        "Coordinate rapid response and escalation when security incidents require immediate action.",
      icon: Zap,
    },
  ],
};

/*
|--------------------------------------------------------------------------
| SOC SERVICE CARD
|--------------------------------------------------------------------------
*/

function SOCServiceCard({ service, index }) {
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
                  <ShieldCheck
                    className="
                      w-3
                      h-3
                      text-[#FF5500]
                    "
                  />
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
| SOC & MDR PAGE
|--------------------------------------------------------------------------
*/

export default function SOCServicesPage() {
  const data = SOC_SERVICES_DATA;

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
              <ShieldCheck className="w-4 h-4" />
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
                Talk to Our Security Team

                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#soc-services"
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
                Explore SOC Services
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
                Security Operations
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
          SOC SERVICES
      ========================================================= */}

      <section
        id="soc-services"
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
              <ShieldAlert className="w-3.5 h-3.5" />
              SOC & MDR Services
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
              Security services designed for
              <span className="text-[#FF5500]">
                {" "}continuous protection
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
              Select the security operations model that best fits your
              organization's infrastructure, risk profile and security
              requirements.
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
              <SOCServiceCard
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
              SOC Capabilities
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
              Security operations that help
              <span className="text-[#FF5500]">
                {" "}protect your business
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
                    Strengthen Your Security
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
                  Need a SOC and MDR model built around your environment?
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
                  Tell us about your security infrastructure, endpoints,
                  cloud environment, compliance requirements and incident
                  response needs. Our team can recommend the right security
                  service model.
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
                Talk to Our Security Team

                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}