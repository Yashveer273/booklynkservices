"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  Search,
  Bug,
  LockKeyhole,
  Target,
  FileSearch,
  Network,
  Radar,
  CheckCircle2,
  ClipboardCheck,
  Crosshair,
  AlertTriangle,
  Scale,
  Zap,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| SECURITY ASSESSMENT / VAPT DATA
|--------------------------------------------------------------------------
*/

const SECURITY_ASSESSMENT_DATA = {
  slug: "security-assessment-vapt",

  page: {
    eyebrow: "SECURITY ASSESSMENTS",
    title: "Vulnerability Assessment &",
    highlightedTitle: "Penetration Testing",
    description:
      "Identify vulnerabilities, simulate real-world attacks and strengthen your security posture with comprehensive vulnerability assessments and penetration testing designed for modern IT environments.",
  },

  overview: {
    title: "Proactive Security With Expert Precision",
    description:
      "Our security assessments provide a comprehensive approach to threat identification and mitigation, from infrastructure analysis and vulnerability scanning to penetration testing and actionable remediation guidance. We help organizations identify weaknesses before attackers can exploit them.",

    stats: [
      {
        value: "VAPT",
        label: "Security Testing",
      },
      {
        value: "24/7",
        label: "Security Operations Support",
      },
      {
        value: "5+",
        label: "Testing Methodologies",
      },
      {
        value: "360°",
        label: "Security Visibility",
      },
    ],
  },

  assessmentProcess: [
    {
      id: "information-gathering",
      number: "01",
      code: "INFORMATION GATHERING",
      title: "Information Gathering",
      shortTitle: "Understand Your Environment",
      icon: FileSearch,

      description:
        "We begin by understanding the scope, architecture and technology landscape of your IT environment to identify the systems, applications and infrastructure that require assessment.",

      features: [
        "IT infrastructure discovery",
        "Network and asset identification",
        "Domain and DNS intelligence",
        "Application discovery",
        "Technology stack analysis",
      ],
    },

    {
      id: "vulnerability-scanning",
      number: "02",
      code: "VULNERABILITY SCANNING",
      title: "Vulnerability Scanning",
      shortTitle: "Discover Security Weaknesses",
      icon: Radar,

      description:
        "Automated and manual vulnerability scanning identifies security weaknesses across infrastructure, endpoints, networks, applications and exposed services.",

      features: [
        "Infrastructure vulnerability scanning",
        "Network vulnerability assessment",
        "Web application scanning",
        "Configuration analysis",
        "Risk and severity classification",
      ],
    },

    {
      id: "penetration-testing",
      number: "03",
      code: "PENETRATION TESTING",
      title: "Penetration Testing",
      shortTitle: "Simulate Real-World Attacks",
      icon: Crosshair,

      description:
        "Our penetration testing methodology simulates real-world attack scenarios to determine whether identified vulnerabilities can actually be exploited and what impact they could have.",

      features: [
        "Controlled exploitation",
        "Network penetration testing",
        "Web application testing",
        "Authentication testing",
        "Privilege escalation testing",
        "Attack-path analysis",
      ],
    },

    {
      id: "remediation-guidance",
      number: "04",
      code: "REMEDIATION GUIDANCE",
      title: "Remediation Guidance",
      shortTitle: "Turn Findings Into Action",
      icon: ClipboardCheck,

      description:
        "We provide clear findings, risk prioritization and actionable remediation guidance so your team knows exactly what needs to be fixed and how to improve the security posture.",

      features: [
        "Detailed vulnerability reports",
        "Risk prioritization",
        "False-positive validation",
        "Remediation recommendations",
        "Executive-level reporting",
        "Security improvement guidance",
      ],
    },
  ],

  offerings: [
    {
      id: "vulnerability-assessment",
      code: "VULNERABILITY ASSESSMENT",
      title: "Vulnerability Assessment",
      shortTitle: "Identify Security Weaknesses",
      icon: Search,

      description:
        "Get a clear snapshot of vulnerabilities across your infrastructure, networks and applications with prioritized findings and remediation guidance.",

      features: [
        "Infrastructure vulnerability assessment",
        "Network vulnerability scanning",
        "Web application assessment",
        "Risk classification",
        "False-positive validation",
        "Remediation guidelines",
      ],

      idealFor:
        "Organizations that need visibility into security weaknesses and a prioritized roadmap for remediation.",
    },

    {
      id: "penetration-testing",
      code: "PENETRATION TESTING",
      title: "Penetration Testing",
      shortTitle: "Validate Real-World Security",
      icon: Bug,

      description:
        "Go beyond vulnerability scanning by actively testing whether security weaknesses can be exploited and understanding the potential business impact.",

      features: [
        "Network penetration testing",
        "Web application testing",
        "External attack simulation",
        "Authentication testing",
        "Privilege escalation testing",
        "Exploit validation",
      ],

      idealFor:
        "Businesses that need to understand the practical impact of vulnerabilities and validate their security defenses.",
    },
  ],

  capabilities: [
    {
      title: "Threat Identification",
      description:
        "Identify vulnerabilities, misconfigurations and potential attack paths before they become security incidents.",
      icon: ShieldAlert,
    },
    {
      title: "Risk Prioritization",
      description:
        "Understand which vulnerabilities represent the greatest risk and should be addressed first.",
      icon: AlertTriangle,
    },
    {
      title: "Real-World Testing",
      description:
        "Simulate realistic attack scenarios to determine how vulnerabilities could actually be exploited.",
      icon: Target,
    },
    {
      title: "Actionable Reporting",
      description:
        "Receive clear technical and executive reports with practical remediation recommendations.",
      icon: ClipboardCheck,
    },
  ],

  tools: [
    "Nexpose",
    "Nessus / Tenable",
    "DNSDumpster",
    "DNSRecon",
    "Nmap",
    "Sparta",
    "Metasploit / Rapid7",
    "Burp Suite",
    "Kali Linux",
    "Proprietary Flexis Tools & Scripts",
  ],

  comparison: [
    {
      aspect: "Purpose",
      assessment:
        "Identifies and scans for weaknesses in systems, applications and networks.",
      penetration:
        "Simulates real-world attacks to actively exploit vulnerabilities.",
    },
    {
      aspect: "Approach",
      assessment:
        "Systematic scanning without actively exploiting identified weaknesses.",
      penetration:
        "Attempts to breach defenses and evaluate real-world risk and impact.",
    },
    {
      aspect: "Focus",
      assessment:
        "Broad evaluation of potential vulnerabilities and entry points.",
      penetration:
        "Hands-on testing of areas most vulnerable to real-world attacks.",
    },
    {
      aspect: "Outcome",
      assessment:
        "Provides a prioritized list of identified vulnerabilities.",
      penetration:
        "Shows how attacks may succeed or fail and highlights critical security weaknesses.",
    },
    {
      aspect: "Value",
      assessment:
        "Helps identify security gaps and reduce potential exposure.",
      penetration:
        "Helps assess the practical business risk of exploitable vulnerabilities.",
    },
    {
      aspect: "Cost",
      assessment: "Generally less expensive.",
      penetration: "Generally more expensive due to hands-on testing.",
    },
  ],

  benefits: [
    {
      title: "Unbiased Security Perspective",
      description:
        "External security professionals provide an independent view of your security posture.",
      icon: Scale,
    },
    {
      title: "Specialized Expertise",
      description:
        "Access security professionals with expertise in modern vulnerabilities, attack techniques and testing methodologies.",
      icon: ShieldCheck,
    },
    {
      title: "Accurate Evaluation",
      description:
        "Identify weaknesses that internal teams may overlook during normal operational activities.",
      icon: Search,
    },
    {
      title: "Compliance Readiness",
      description:
        "Support security and compliance requirements including HIPAA, PCI DSS, SOC 2, FTC and ISO.",
      icon: CheckCircle2,
    },
  ],
};

/*
|--------------------------------------------------------------------------
| PROCESS CARD
|--------------------------------------------------------------------------
*/

function AssessmentProcessCard({ item }) {
  const Icon = item.icon;

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
            {item.number}
          </span>
        </div>

        <div className="mb-3">
          <span
            className="
              text-[#FF5500]
              text-xs
              font-extrabold
              tracking-[0.14em]
            "
          >
            {item.code}
          </span>
        </div>

        <h3
          className="
            text-2xl
            sm:text-3xl
            font-extrabold
            text-[#1E2022]
            tracking-tight
            leading-tight
          "
        >
          {item.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-stone-400">
          {item.shortTitle}
        </p>

        <p
          className="
            mt-5
            text-sm
            sm:text-[15px]
            text-stone-600
            leading-7
          "
        >
          {item.description}
        </p>

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
            What We Do
          </p>

          <div className="space-y-3">
            {item.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
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

                <span className="text-sm text-stone-700 leading-5">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| OFFERING CARD
|--------------------------------------------------------------------------
*/

function OfferingCard({ offering, index }) {
  const Icon = offering.icon;

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
              text-xs
              font-extrabold
            "
          >
            0{index + 1}
          </span>
        </div>

        <div className="mb-3">
          <span
            className="
              text-[#FF5500]
              text-xs
              font-extrabold
              tracking-[0.14em]
            "
          >
            {offering.code}
          </span>
        </div>

        <h3
          className="
            text-2xl
            sm:text-3xl
            font-extrabold
            text-[#1E2022]
            tracking-tight
          "
        >
          {offering.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-stone-400">
          {offering.shortTitle}
        </p>

        <p className="mt-5 text-sm sm:text-[15px] text-stone-600 leading-7">
          {offering.description}
        </p>

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
            {offering.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
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

                <span className="text-sm text-stone-700 leading-5">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

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

          <p className="text-sm text-stone-600 leading-6">
            {offering.idealFor}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 pt-6 border-t border-stone-100">
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
          <span className="group-hover/link:text-[#FF5500] transition-colors">
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

      <h3 className="text-lg font-extrabold text-[#1E2022] mb-2">
        {capability.title}
      </h3>

      <p className="text-sm text-stone-600 leading-6">
        {capability.description}
      </p>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| SECURITY ASSESSMENT / VAPT PAGE
|--------------------------------------------------------------------------
*/

export default function SecurityAssessmentVAPTPage() {
  const data = SECURITY_ASSESSMENT_DATA;

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
                Start a Security Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#assessment-process"
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
                Explore Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
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
                Proactive Security
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

            <div className="grid grid-cols-2 gap-4">
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
          SECURITY BENEFITS
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F6]">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="max-w-3xl mb-14">
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
              Why VAPT Matters
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
              "
            >
              Proactive threat detection and
              <span className="text-[#FF5500]">
                {" "}compliance protection
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-7">
              Regular vulnerability assessments and penetration testing help
              organizations discover security gaps, reduce exposure and
              strengthen defenses before real attackers find them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Early Threat Identification",
                description:
                  "Identify threats and weaknesses before they become security incidents.",
                icon: Radar,
              },
              {
                title: "Close Security Gaps",
                description:
                  "Get clear guidance to fix vulnerabilities and protect sensitive systems.",
                icon: ShieldCheck,
              },
              {
                title: "Compliance Support",
                description:
                  "Support requirements such as HIPAA, PCI DSS, SOC 2, FTC and ISO.",
                icon: CheckCircle2,
              },
              {
                title: "Breach Prevention",
                description:
                  "Reduce the likelihood of data breaches and unauthorized access.",
                icon: LockKeyhole,
              },
            ].map((item) => (
              <CapabilityCard
                key={item.title}
                capability={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}

      <section
        id="assessment-process"
        className="py-20 sm:py-24 lg:py-28 bg-white"
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
          <div className="max-w-3xl mb-14 sm:mb-16">
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
                mb-5
              "
            >
              <Target className="w-3.5 h-3.5" />
              Our Approach
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
              A consistent approach to
              <span className="text-[#FF5500]">
                {" "}identifying security threats
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
              From information gathering through remediation guidance, our
              assessment process is designed to provide clear findings and
              actionable security improvements.
            </p>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
              lg:gap-7
            "
          >
            {data.assessmentProcess.map((item) => (
              <AssessmentProcessCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE OFFER
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F6]">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="max-w-3xl mb-14">
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
              What We Offer
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
              "
            >
              Choose the right level of
              <span className="text-[#FF5500]">
                {" "}security testing
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-7">
            {data.offerings.map((offering, index) => (
              <OfferingCard
                key={offering.id}
                offering={offering}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOLS
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
          <div
            className="
              grid
              lg:grid-cols-[1fr_1.3fr]
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
                Security Testing Toolkit
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
                Industry-leading tools for
                <span className="text-[#FF5500]">
                  {" "}security testing
                </span>
              </h2>

              <p
                className="
                  mt-6
                  text-base
                  text-stone-600
                  leading-7
                "
              >
                We use a combination of established security platforms,
                penetration testing frameworks and proprietary tools to
                provide comprehensive security assessments.
              </p>
            </div>

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
              "
            >
              {data.tools.map((tool, index) => (
                <div
                  key={tool}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-[#FAF8F6]
                    border
                    border-stone-200
                    p-5
                    transition-all
                    duration-300
                    hover:border-[#FFD0BA]
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#FFF0E7]
                      text-[#FF5500]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Zap className="w-5 h-5" />
                  </div>

                  <div>
                    <span
                      className="
                        text-[10px]
                        font-extrabold
                        text-[#FF5500]
                        tracking-[0.12em]
                      "
                    >
                      TOOL {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        mt-1
                        text-sm
                        sm:text-[15px]
                        font-bold
                        text-[#1E2022]
                      "
                    >
                      {tool}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F6]">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="max-w-3xl mb-14">
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
              Assessment vs Testing
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
              "
            >
              Vulnerability Assessment
              <span className="text-[#FF5500]"> vs </span>
              Penetration Testing
            </h2>

            <p className="mt-5 text-base text-stone-600 leading-7">
              Combining vulnerability assessments and penetration testing
              provides a comprehensive view of your security posture — from
              identifying weaknesses to understanding their real-world impact.
            </p>
          </div>

          <div
            className="
              overflow-x-auto
              rounded-[28px]
              border
              border-stone-200
              bg-white
              shadow-sm
            "
          >
            <table className="w-full min-w-[850px] border-collapse">
              <thead>
                <tr className="bg-[#1E2022] text-white">
                  <th
                    className="
                      text-left
                      px-6
                      py-5
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      w-[20%]
                    "
                  >
                    Aspect
                  </th>

                  <th
                    className="
                      text-left
                      px-6
                      py-5
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      w-[40%]
                    "
                  >
                    Vulnerability Assessment
                  </th>

                  <th
                    className="
                      text-left
                      px-6
                      py-5
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      w-[40%]
                    "
                  >
                    Penetration Testing
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.comparison.map((row, index) => (
                  <tr
                    key={row.aspect}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#FAF8F6]"
                    }
                  >
                    <td
                      className="
                        px-6
                        py-6
                        align-top
                        border-b
                        border-stone-100
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-9
                            h-9
                            rounded-lg
                            bg-[#FFF0E7]
                            text-[#FF5500]
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          <Scale className="w-4 h-4" />
                        </div>

                        <span
                          className="
                            text-sm
                            font-extrabold
                            text-[#1E2022]
                          "
                        >
                          {row.aspect}
                        </span>
                      </div>
                    </td>

                    <td
                      className="
                        px-6
                        py-6
                        align-top
                        border-b
                        border-stone-100
                        text-sm
                        text-stone-600
                        leading-6
                      "
                    >
                      {row.assessment}
                    </td>

                    <td
                      className="
                        px-6
                        py-6
                        align-top
                        border-b
                        border-stone-100
                        text-sm
                        text-stone-600
                        leading-6
                      "
                    >
                      {row.penetration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="
              mt-7
              rounded-2xl
              bg-white
              border
              border-[#FFD9C4]
              p-6
              sm:p-7
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#FFF0E7]
                  text-[#FF5500]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <h3
                  className="
                    text-lg
                    font-extrabold
                    text-[#1E2022]
                  "
                >
                  Combining Both
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-stone-600
                    leading-6
                  "
                >
                  By combining vulnerability assessments and penetration
                  tests, organizations gain a comprehensive view of their
                  security posture, identifying weaknesses and understanding
                  the real-world implications of those weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY OUTSOURCE
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
              Why Outsource VAPT
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#1E2022]
                tracking-tight
              "
            >
              An independent security perspective
              <span className="text-[#FF5500]">
                {" "}when it matters most
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.benefits.map((benefit) => (
              <CapabilityCard
                key={benefit.title}
                capability={benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPLIANCE CTA
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F6]">
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
              bg-[#FFF0E7]
              border
              border-[#FFD9C4]
              px-7
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              lg:py-14
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                w-72
                h-72
                rounded-full
                border
                border-[#FF5500]/15
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
                border-[#FF5500]/15
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
                  <ShieldCheck className="w-5 h-5 text-[#FF5500]" />

                  <span
                    className="
                      text-[#FF5500]
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-wider
                    "
                  >
                    Compliance & Security
                  </span>
                </div>

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-extrabold
                    text-[#1E2022]
                    tracking-tight
                  "
                >
                  Meet compliance requirements with targeted security testing
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    text-stone-600
                    leading-7
                  "
                >
                  Evaluate your security posture, identify system weaknesses,
                  simulate attacks and gain actionable insights to reduce
                  risk, strengthen defenses and support compliance.
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
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="pb-20 sm:pb-24 lg:pb-28 bg-white">
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
                  Ready to uncover the security weaknesses attackers could
                  find?
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
                  Start a vulnerability assessment or penetration test and
                  gain a clear understanding of your security posture with
                  actionable recommendations from our security team.
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
                Start Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}