"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Server,
  Cloud,
  Workflow,
  Users,
  Settings2,
  Code2,
  Network,
  MonitorCheck,
  Layers3,
  CheckCircle2,
  Zap,
  LockKeyhole,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| DEDICATED ENGINEERS SERVICES DATA
|--------------------------------------------------------------------------
*/

const DEDICATED_ENGINEERS_DATA = {
  slug: "dedicated-engineers",

  page: {
    eyebrow: "IT & REMOTE PROJECTS",
    title: "Dedicated Engineers",
    highlightedTitle: "Technical Expertise That Scales With You",
    description:
      "Extend your technical capabilities with experienced engineers who integrate directly into your existing teams, tools, and workflows. Get the expertise you need for cloud, DevOps, infrastructure, networking, and technical projects without the overhead of traditional hiring.",
  },

  overview: {
    title: "Build the Technical Team You Need",
    description:
      "Get access to skilled engineers who work as an extension of your organization. Our dedicated engineering model gives you the flexibility to add specialized technical expertise, accelerate projects, support ongoing operations, and scale your team as your requirements change.",

    stats: [
      {
        value: "24/7",
        label: "Technical Support",
      },
      {
        value: "Cloud",
        label: "Engineering Expertise",
      },
      {
        value: "DevOps",
        label: "Automation & Infrastructure",
      },
      {
        value: "Flexible",
        label: "Engagement Models",
      },
    ],
  },

  services: [
    {
      id: "cloud-devops",
      code: "CLOUD & DEVOPS",
      title: "Cloud & DevOps Engineers",
      shortTitle: "Cloud Infrastructure & DevOps",
      icon: Cloud,

      description:
        "Experienced engineers who help design, deploy, automate, monitor, and maintain modern cloud infrastructure while improving development and deployment workflows.",

      features: [
        "AWS, Azure & Google Cloud",
        "Cloud infrastructure deployment",
        "CI/CD pipeline implementation",
        "Docker & containerization",
        "Infrastructure automation",
        "Cloud monitoring & optimization",
        "Server and application deployment",
        "Backup & disaster recovery",
        "Cloud security and access management",
      ],

      idealFor:
        "Businesses that need cloud and DevOps expertise without building and maintaining a complete internal engineering team.",
    },

    {
      id: "technical-teams",
      code: "DEDICATED TECHNICAL TEAMS",
      title: "Dedicated Technical Teams",
      shortTitle: "Your Extended Engineering Team",
      icon: Users,

      description:
        "Build a dedicated team of engineers based on your technical requirements, project scope, and operational workload. Your engineers work as an extension of your existing organization.",

      features: [
        "Dedicated engineers",
        "Project-based engineering teams",
        "Infrastructure engineers",
        "Cloud engineers",
        "DevOps engineers",
        "System administrators",
        "Network engineers",
        "Technical project support",
        "Team scaling and replacement",
      ],

      idealFor:
        "Organizations that need additional engineering capacity for projects, infrastructure, migrations, development, or ongoing technical operations.",
    },

    {
      id: "flexible-engagement",
      code: "FLEXIBLE ENGAGEMENT MODELS",
      title: "Flexible Engagement Models",
      shortTitle: "Scale Your Engineering Capacity",
      icon: Workflow,

      description:
        "Choose an engagement model that matches your workload. Start with a single engineer and scale to a complete technical team as your requirements evolve.",

      features: [
        "Single dedicated engineer",
        "Multiple-engineer teams",
        "Part-time engineering support",
        "Full-time dedicated resources",
        "Project-based engagement",
        "Long-term technical staffing",
        "Flexible team scaling",
        "Resource replacement support",
      ],

      idealFor:
        "Businesses that need technical expertise without the long-term commitment and overhead associated with traditional hiring.",
    },
  ],

  capabilities: [
    {
      title: "Faster Scaling",
      description:
        "Add experienced engineers when your workload increases without waiting months for traditional recruitment.",
      icon: Zap,
    },
    {
      title: "Specialized Expertise",
      description:
        "Access engineers with expertise across cloud, DevOps, infrastructure, networking, systems, and other technical disciplines.",
      icon: Code2,
    },
    {
      title: "Lower Operational Overhead",
      description:
        "Reduce the costs and administrative burden associated with recruitment, onboarding, equipment, benefits, and employee management.",
      icon: Settings2,
    },
    {
      title: "Seamless Integration",
      description:
        "Our engineers work with your existing tools, processes, communication channels, and technical workflows.",
      icon: Layers3,
    },
  ],

  process: [
    {
      number: "01",
      title: "Understand Your Requirements",
      description:
        "We learn about your project, infrastructure, technical environment, required skills, workload, and team structure.",
      label: "Requirement assessment",
    },
    {
      number: "02",
      title: "Find the Right Expertise",
      description:
        "We identify engineers whose technical skills and experience match your specific requirements.",
      label: "Pre-vetted engineering resources",
    },
    {
      number: "03",
      title: "Integrate With Your Team",
      description:
        "Your dedicated engineers integrate with your existing tools, communication channels, processes, and workflows.",
      label: "Fast team integration",
    },
    {
      number: "04",
      title: "Grow When You Need To",
      description:
        "Increase, reduce, or change your engineering resources as your business and project requirements evolve.",
      label: "Flexible scaling",
    },
  ],

  technologies: [
    {
      category: "Cloud",
      tools: "AWS, Microsoft Azure, Google Cloud",
    },
    {
      category: "DevOps",
      tools: "Docker, Jenkins, Git, CI/CD",
    },
    {
      category: "Infrastructure",
      tools: "Linux, Windows Server, VMware",
    },
    {
      category: "Automation",
      tools: "Ansible, Terraform, Infrastructure as Code",
    },
    {
      category: "Monitoring",
      tools: "Nagios, PRTG, SolarWinds",
    },
    {
      category: "Databases",
      tools: "MySQL, MongoDB, PostgreSQL",
    },
    {
      category: "Networking",
      tools: "Firewalls, VPN, DNS, DHCP, VLAN",
    },
    {
      category: "Collaboration",
      tools: "Microsoft 365, Teams, Slack",
    },
  ],
};

/*
|--------------------------------------------------------------------------
| SERVICE CARD
|--------------------------------------------------------------------------
*/

function EngineerServiceCard({ service, index }) {
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
                  <CheckCircle2
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
| DEDICATED ENGINEERS PAGE
|--------------------------------------------------------------------------
*/

export default function DedicatedEngineersPage() {
  const data = DEDICATED_ENGINEERS_DATA;

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
              <Server className="w-4 h-4" />
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
                Talk to Our Engineering Team

                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#engineering-services"
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
                Explore Engineering Services
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
                Dedicated Engineering
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
          ENGINEERING SERVICES
      ========================================================= */}

      <section
        id="engineering-services"
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
              <Layers3 className="w-3.5 h-3.5" />
              Engineering Services
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
              Engineering expertise built around
              <span className="text-[#FF5500]">
                {" "}your requirements
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
              Choose the engineering capabilities you need or combine
              multiple disciplines to create a dedicated technical team
              aligned with your projects and operational requirements.
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
              <EngineerServiceCard
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
              Why Dedicated Engineers
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
              Technical expertise that helps
              <span className="text-[#FF5500]">
                {" "}your business scale
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
          HOW IT WORKS
      ========================================================= */}

      <section
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
              How It Works
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
              From requirement to
              <span className="text-[#FF5500]">
                {" "}dedicated engineering team
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
              Our onboarding process is designed to make adding technical
              resources simple, fast, and aligned with your existing
              organization.
            </p>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {data.process.map((step) => (
              <div
                key={step.number}
                className="
                  relative
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
                    flex
                    items-center
                    justify-between
                    mb-6
                  "
                >
                  <span
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#FFF0E7]
                      text-[#FF5500]
                      flex
                      items-center
                      justify-center
                      font-extrabold
                    "
                  >
                    {step.number}
                  </span>

                  <ArrowRight
                    className="
                      w-5
                      h-5
                      text-stone-300
                    "
                  />
                </div>

                <h3
                  className="
                    text-lg
                    font-extrabold
                    text-[#1E2022]
                    mb-3
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-stone-600
                    leading-6
                  "
                >
                  {step.description}
                </p>

                <div
                  className="
                    mt-5
                    pt-4
                    border-t
                    border-stone-100
                    flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle2
                    className="
                      w-4
                      h-4
                      text-[#FF5500]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      text-stone-500
                    "
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY STACK
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
              Technology Stack
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
              Works with your
              <span className="text-[#FF5500]">
                {" "}existing technology
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
              Our engineers adapt to the tools, platforms, and workflows
              already used by your organization. No unnecessary re-tooling
              required.
            </p>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-stone-200
            "
          >
            <div
              className="
                grid
                grid-cols-[0.8fr_2fr]
                bg-[#FAF8F6]
                border-b
                border-stone-200
                px-6
                py-4
              "
            >
              <div
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-stone-500
                "
              >
                Category
              </div>

              <div
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-stone-500
                "
              >
                Supported Technologies
              </div>
            </div>

            {data.technologies.map((technology, index) => (
              <div
                key={technology.category}
                className={`
                  grid
                  grid-cols-[0.8fr_2fr]
                  px-6
                  py-5
                  gap-4
                  ${
                    index !== data.technologies.length - 1
                      ? "border-b border-stone-100"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    text-sm
                    font-extrabold
                    text-[#1E2022]
                  "
                >
                  {technology.category}
                </div>

                <div
                  className="
                    text-sm
                    text-stone-600
                    leading-6
                  "
                >
                  {technology.tools}
                </div>
              </div>
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
                    Build Your Engineering Team
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
                  Need more technical expertise without the hiring overhead?
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
                  Tell us about your projects, infrastructure, technology
                  stack, and engineering requirements. Our team can recommend
                  the right dedicated engineering model for your organization.
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
                Talk to Our Engineering Team

                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}