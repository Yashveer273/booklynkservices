"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Sparkles,
  Code2,
  Globe,
  Bot,
  Workflow,
  Zap,
  BarChart3,
  Layers3,
  ShieldCheck,
  Rocket,
  Cpu,
  Smartphone,
  Monitor,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| AI & DIGITAL SOLUTIONS DATA
|--------------------------------------------------------------------------
*/

const AI_DIGITAL_SERVICES_DATA = {
  slug: "ai-digital-solutions",

  page: {
    eyebrow: "AI & DIGITAL SOLUTIONS",
    title: "AI & Digital Solutions",
    highlightedTitle: "Built for Modern Digital Growth",
    description:
      "Build intelligent digital experiences with AI-powered solutions, modern web and application development, workflow automation and digital growth strategies designed around your business goals.",
  },

  overview: {
    title: "Technology Solutions Built Around Your Business",
    description:
      "From AI-powered experiences and custom web applications to automation and digital growth solutions, we help businesses turn technology into practical, scalable and measurable business outcomes.",

    stats: [
      {
        value: "AI",
        label: "Intelligent Experiences",
      },
      {
        value: "WEB",
        label: "Modern Web Solutions",
      },
      {
        value: "APP",
        label: "Custom Applications",
      },
      {
        value: "360°",
        label: "Digital Growth",
      },
    ],
  },

  services: [
    {
      id: "ai-powered-experiences",
      code: "AI-POWERED EXPERIENCES",
      title: "AI-Powered Experiences",
      shortTitle: "Intelligent AI Solutions",
      icon: BrainCircuit,

      description:
        "Create intelligent customer and business experiences using modern AI technologies that automate processes, improve interactions and help teams make faster decisions.",

      features: [
        "AI-powered business solutions",
        "AI chatbots and virtual assistants",
        "Intelligent customer experiences",
        "AI content and workflow automation",
        "AI-powered recommendations",
        "Data-driven intelligent solutions",
      ],

      idealFor:
        "Businesses looking to use artificial intelligence to improve customer experiences, automate repetitive work and create smarter digital products.",
    },

    {
      id: "custom-web-solutions",
      code: "CUSTOM WEB SOLUTIONS",
      title: "Custom Web Solutions",
      shortTitle: "Modern Websites & Web Platforms",
      icon: Globe,

      description:
        "Design and develop modern, responsive and scalable websites and web platforms tailored to your business requirements, users and digital objectives.",

      features: [
        "Business websites",
        "Custom web applications",
        "Responsive UI/UX development",
        "Modern frontend development",
        "Backend and API integration",
        "Scalable web architecture",
      ],

      idealFor:
        "Organizations that need a professional digital presence, custom web platform or scalable application built around their unique business requirements.",
    },

    {
      id: "custom-app-solutions",
      code: "CUSTOM APP SOLUTIONS",
      title: "Custom App Solutions",
      shortTitle: "Web & Mobile Applications",
      icon: Smartphone,

      description:
        "Build customized applications that connect your users, teams and business processes through intuitive interfaces, reliable backend systems and scalable technology.",

      features: [
        "Business application development",
        "Mobile application development",
        "Web application development",
        "API and third-party integrations",
        "Database and backend development",
        "Application maintenance and enhancement",
      ],

      idealFor:
        "Businesses that need custom applications to digitize operations, improve customer engagement or create new digital products.",
    },

    {
      id: "automation-solutions",
      code: "DIGITAL AUTOMATION",
      title: "Digital Automation",
      shortTitle: "Smarter Workflows & Operations",
      icon: Workflow,

      description:
        "Reduce manual work and improve operational efficiency by connecting systems, automating repetitive processes and creating intelligent digital workflows.",

      features: [
        "Business process automation",
        "Workflow automation",
        "System and API integrations",
        "Automated notifications",
        "Data synchronization",
        "AI-assisted process automation",
      ],

      idealFor:
        "Organizations that want to reduce repetitive manual tasks, improve productivity and create more efficient digital operations.",
    },

    {
      id: "digital-growth",
      code: "DIGITAL GROWTH",
      title: "Digital Growth Solutions",
      shortTitle: "Technology for Business Growth",
      icon: BarChart3,

      description:
        "Use technology, data and digital experiences to strengthen your online presence, improve customer engagement and create sustainable opportunities for growth.",

      features: [
        "Digital strategy development",
        "Website optimization",
        "Conversion-focused experiences",
        "Customer journey optimization",
        "Analytics and performance tracking",
        "Digital process improvement",
      ],

      idealFor:
        "Businesses looking to improve their digital presence, customer engagement and overall online growth using technology-driven strategies.",
    },

    {
      id: "ai-integration",
      code: "AI INTEGRATION",
      title: "AI Integration",
      shortTitle: "AI Across Your Existing Systems",
      icon: Layers3,

      description:
        "Integrate AI capabilities into your existing applications, websites and business workflows without replacing the technology infrastructure you already use.",

      features: [
        "AI API integration",
        "Existing application enhancement",
        "Intelligent search and recommendations",
        "AI-powered customer support",
        "Business workflow integration",
        "AI automation strategy",
      ],

      idealFor:
        "Organizations that already have digital systems and want to introduce practical AI capabilities into their existing technology ecosystem.",
    },
  ],

  capabilities: [
    {
      title: "Artificial Intelligence",
      description:
        "Build practical AI capabilities that improve experiences, automate processes and support smarter business decisions.",
      icon: BrainCircuit,
    },
    {
      title: "Modern Development",
      description:
        "Develop responsive, scalable and user-focused websites and applications using modern development technologies.",
      icon: Code2,
    },
    {
      title: "Intelligent Automation",
      description:
        "Connect systems and automate repetitive processes to improve efficiency and reduce operational overhead.",
      icon: Workflow,
    },
    {
      title: "Digital Growth",
      description:
        "Use technology, analytics and optimized digital experiences to improve engagement and create new growth opportunities.",
      icon: Rocket,
    },
  ],
};

/*
|--------------------------------------------------------------------------
| AI SERVICE CARD
|--------------------------------------------------------------------------
*/

function AIDigitalServiceCard({ service, index }) {
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

        {/* Icon + Number */}

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
            Discuss This Solution
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
| AI & DIGITAL SOLUTIONS PAGE
|--------------------------------------------------------------------------
*/

export default function AIDigitalSolutionsPage() {
  const data = AI_DIGITAL_SERVICES_DATA;

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
              <Sparkles className="w-4 h-4" />
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
                Talk to Our Digital Team

                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#ai-digital-services"
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
                Explore Solutions
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
                Digital Innovation
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
          AI DIGITAL SERVICES
      ========================================================= */}

      <section
        id="ai-digital-services"
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
              <Sparkles className="w-3.5 h-3.5" />
              AI & Digital Services
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
              Technology solutions designed for
              <span className="text-[#FF5500]">
                {" "}digital growth
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
              From intelligent AI experiences to custom applications,
              automation and digital growth, choose the solution that best
              fits your business goals and technology requirements.
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
              <AIDigitalServiceCard
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
              Digital Capabilities
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
              Technology that helps
              <span className="text-[#FF5500]">
                {" "}move your business forward
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
                    Build What's Next
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
                  Ready to build a smarter digital experience?
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
                  Tell us about your business, digital goals and technology
                  requirements. Our team can help you identify the right AI,
                  web, application and automation solutions for your next
                  stage of growth.
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
                Start Your Digital Project

                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}