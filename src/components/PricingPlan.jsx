import { useState, useEffect, useRef } from "react";
import "../pricingPlane.css"; // Import the global CSS file
import { Footer } from "../components";
// Header Component
const Header = () => (
  <header>
    <div className="container">
      <h1>Digital Growth & Maintenance Services</h1>
      <p>Everything Your Brand Needs — In One Powerful Package</p>
      <a href="#pricing" className="cta-button">
        View Our Plans
      </a>
    </div>
  </header>
);

// Problem Statement Component
const ProblemStatement = () => (
  <section className="problem-statement">
    <div className="container">
      <h2>Is your business struggling to stay visible online?</h2>
      <p>
        Do you lack time to manage your website, rank on Google, grow your app,
        or post on social media?
      </p>
      <p>
        <strong>We’ve got you covered.</strong>
      </p>
      <p>
        We offer a comprehensive monthly service that keeps your website
        optimized, your SEO strong, your app visible, and your social media
        buzzing — all for just <strong>₹25,000/month</strong> or{" "}
        <strong>₹2,40,000/year</strong>.
      </p>
    </div>
  </section>
);

// Plan Card Component
const PlanCard = ({
  icon,
  title,
  description,
  features,
  dataPlanTarget,
  onLearnMoreClick,
}) => (
  <div className="plan-card" data-plan={dataPlanTarget.replace("-detail", "")}>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a
      href="#"
      className="detail-link"
      data-plan-target={dataPlanTarget}
      onClick={onLearnMoreClick}
    >
      Learn More
    </a>
  </div>
);

// Detailed Plan Section Component
const PlanDetailsSection = ({
  id,
  title,
  icon,
  summary,
  features,
  onBackClick,
  isActive,
}) => (
  <section
    className={`plan-details-section bg-gradient-to-br from-[#000000] to-[#210249] ${
      isActive ? "active" : ""
    }`}
    id={id}
  >
    <div className="container">
      <h2>{title}</h2>
      <div className="plan-detail-content">
        <h3>
          <span className="detail-icon">{icon}</span> {summary.title}
        </h3>
        <p className="detail-summary" style={{ paddingBottom:"5vh"}}>{summary.text}</p>
        <ul >
          {features.map((feature, index) => (
            <li key={index} style={{display:"block"}}>
              <strong>{feature.title}</strong> 
            <p style={{paddingLeft:"10vh", paddingBottom:"3vh"}}>  {feature.description}</p> 
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className="back-to-plans" onClick={onBackClick}>
        Back to Plans Overview
      </a>
    </div>
  </section>
);

// Pricing Section Component
const PricingSection = () => (
  <section className="pricing-section" id="pricing">
    <div className="container">
      <h2> Pricing</h2>
      <div className="price-card">
        <h3>All-In-One Growth Package</h3>
        <p className="price">
          ₹25,000<span>/month</span>
        </p>
        <p className="billing-cycle">or ₹2,40,000/year</p>
        <ul>
          <li>Website Maintenance Included</li>
          <li>SEO Services Included</li>
          <li>ASO Services Included</li>
          <li>Social Media Marketing Included</li>
          <li>No Hidden Charges</li>
        </ul>
        <p className="save-message">Save ₹60,000 with a yearly plan!</p>
        <p className="description">
          Designed for small businesses, startups, and growing brands.
        </p>
      </div>
    </div>
  </section>
);

// Why Choose Us Section Component
const WhyChooseUs = () => (
  <section className="why-choose-us">
    <div className="container">
      <h2>Why Choose Us?</h2>
      <div className="advantages-grid">
        <div className="advantage-item">
          <div className="icon">💡</div>
          <h3>One Team. All Services.</h3>
          <p>
            No need to juggle freelancers or agencies — we handle it all,
            providing a seamless and integrated solution for your digital needs.
          </p>
        </div>
        <div className="advantage-item">
          <div className="icon">📈</div>
          <h3>Data-Driven Execution.</h3>
          <p>
            We don’t just “do marketing.” We analyze data, track performance,
            and make informed decisions to bring you real, measurable results.
          </p>
        </div>
        <div className="advantage-item">
          <div className="icon">🤝</div>
          <h3>Transparent Communication.</h3>
          <p>
            Expect weekly updates and detailed monthly reports. We believe in
            clear, honest communication with no fluff, keeping you in the loop.
          </p>
        </div>
        <div className="advantage-item">
          <div className="icon">🔒</div>
          <h3>Secure & Reliable.</h3>
          <p>
            Your digital assets are always protected. We prioritize security and
            provide reliable services to ensure your online presence is safe and
            sound.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = () => (
  <section className="cta-section">
    <div className="container">
      <h2>Ready to Grow?</h2>
      <p>
        Whether you’re just starting out or ready to scale, our monthly growth
        package gives you everything you need to succeed online.
      </p>
      <a href="#pricing" className="cta-button">
        Get Started Today!
      </a>
    </div>
  </section>
);

// Footer Component

function PricingPlan() {
  const [activePlanDetail, setActivePlanDetail] = useState(null); // State to manage which detail section is active

  const plansOverviewRef = useRef(null);
  const elementsToAnimateFadeIn = useRef([]);
  const elementsToAnimateZoomIn = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const zoomInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "scale(1)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToAnimateFadeIn.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        fadeInObserver.observe(el);
      }
    });

    elementsToAnimateZoomIn.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "scale(0.95)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        zoomInObserver.observe(el);
      }
    });

    return () => {
      fadeInObserver.disconnect();
      zoomInObserver.disconnect();
    };
  }, [activePlanDetail]); // Re-run effect if activePlanDetail changes to apply animations if a section becomes visible

  const handleLearnMoreClick = (e, targetId) => {
    e.preventDefault();
    setActivePlanDetail(targetId);
    // Scroll to the top of the detail section
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBackToPlansClick = (e) => {
    e.preventDefault();
    setActivePlanDetail(null);
    // Scroll back to the plans overview section
    plansOverviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="App">
      <Header />
      <ProblemStatement />
      <hr />

      {/* Plans Overview Section */}
      <section
        className="plans-overview bg-gradient-to-br from-[#000000] to-[#210249]"
        id="plans"
        ref={plansOverviewRef}
        style={{ display: activePlanDetail ? "none" : "block" }}
      >
        <div className="container">
          <h2 ref={(el) => elementsToAnimateFadeIn.current.push(el)}>
            What’s Included
          </h2>
          <div className="plan-grid">
            <PlanCard
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=7o7EtamGnxeB&format=png&color=000000"
                  alt="Maintenance"
                />
              }
              title="Website Maintenance"
              description="Your digital home deserves the best care."
              features={[
                "Regular speed & performance optimization",
                "Bug fixing and UI/UX improvements",
                "Weekly security checks and backups",
                "Mobile and browser compatibility updates",
                "Monthly technical audit reports",
              ]}
              dataPlanTarget="website-maintenance-detail"
              onLearnMoreClick={(e) =>
                handleLearnMoreClick(e, "website-maintenance-detail")
              }
              ref={(el) => elementsToAnimateZoomIn.current.push(el)}
            />
            <PlanCard
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=FN45exYKvCNN&format=png&color=000000"
                  alt="SEO"
                />
              }
              title="SEO (Search Engine Optimization)"
              description="Get discovered by your ideal customers."
              features={[
                "In-depth keyword research & competitor analysis",
                "On-page optimization (meta tags, headings, URLs)",
                "Off-page link-building and citation submissions",
                "Google My Business & local SEO setup",
                "Traffic & ranking reports every month",
              ]}
              dataPlanTarget="seo-detail"
              onLearnMoreClick={(e) => handleLearnMoreClick(e, "seo-detail")}
              ref={(el) => elementsToAnimateZoomIn.current.push(el)}
            />
            <PlanCard
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=119005&format=png&color=000000"
                  alt="ASO Icon"
                />
              }
              title="ASO"
              description="(App Store Optimization) Stand out in crowded app stores."
              features={[
                "Optimized app titles, keywords, & descriptions",
                "High-converting screenshots & visual assets",
                "Review management strategies",
                "Category targeting & competitor benchmarks",
                "Monthly performance tracking (Android + iOS)",
              ]}
              dataPlanTarget="aso-detail"
              onLearnMoreClick={(e) => handleLearnMoreClick(e, "aso-detail")}
              ref={(el) => elementsToAnimateZoomIn.current.push(el)}
            />
            <PlanCard
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=IqO8sjenu7je&format=png&color=000000"
                  alt="Marketing"
                />
              }
              title="Social Media Marketing"
              description="Stay active. Stay relevant. Stay viral."
              features={[
                "12–15 custom-designed posts per month",
                "Content calendar creation (Instagram, Facebook, LinkedIn & more)",
                "Reels & story design support",
                "Caption, hashtag & engagement strategy",
                "Basic community interaction (likes, comments, DMs)",
              ]}
              dataPlanTarget="social-media-detail"
              onLearnMoreClick={(e) =>
                handleLearnMoreClick(e, "social-media-detail")
              }
              ref={(el) => elementsToAnimateZoomIn.current.push(el)}
            />
          </div>
        </div>
      </section>

      <hr />

      {/* Detailed Plan Sections */}
      <PlanDetailsSection
        id="website-maintenance-detail"
        title="Website Maintenance Details"
        icon={
          <img
            src="https://img.icons8.com/?size=100&id=7o7EtamGnxeB&format=png&color=000000"
            alt="Maintenance"
          />
        }
        summary={{
          title: "Your Digital Home Deserves the Best Care",
          text: "Ensure your website runs smoothly, securely, and efficiently with our dedicated website maintenance services. We handle all the technical complexities so you can focus on your business.",
        }}
        features={[
          {
            title: "Regular Speed & Performance Optimization",
            description:
              "We continuously monitor and optimize your site to ensure lightning-fast load times, crucial for user experience and SEO.",
          },
          {
            title: "Bug Fixing and UI/UX Improvements",
            description:
              "Our team promptly addresses any bugs and implements user interface (UI) and user experience (UX) enhancements for a seamless Browse experience.",
          },
          {
            title: "Weekly Security Checks and Backups",
            description:
              "We conduct thorough security audits and perform regular backups to protect your data from threats and ensure quick recovery.",
          },
          {
            title: "Mobile and Browser Compatibility Updates",
            description:
              "Your website will look and function perfectly across all devices and web browsers, reaching a wider audience.",
          },
          {
            title: "Monthly Technical Audit Reports",
            description:
              "Receive detailed reports on your website's health, performance, and security, keeping you informed every step of the way.",
          },
          {
            title: "Plugin & Theme Updates",
            description:
              "We manage all necessary updates to your website's plugins and themes to maintain functionality and security.",
          },
          {
            title: "Content Management System (CMS) Updates",
            description:
              "For CMS-based sites (like WordPress), we ensure your platform is always updated to the latest secure version.",
          },
        ]}
        onBackClick={handleBackToPlansClick}
        isActive={activePlanDetail === "website-maintenance-detail"}
      />

      <PlanDetailsSection
        id="seo-detail"
        title="SEO (Search Engine Optimization) Details"
        icon={
          <img
            src="https://img.icons8.com/?size=100&id=FN45exYKvCNN&format=png&color=000000"
            alt="SEO"
          />
        }
        summary={{
          title: "Get Discovered by Your Ideal Customers",
          text: "Boost your visibility on search engines and attract organic traffic with our comprehensive SEO strategies. We help you rank higher and connect with customers actively searching for your products or services.",
        }}
        features={[
          {
            title: "In-depth Keyword Research & Competitor Analysis",
            description:
              "We identify the most relevant and high-converting keywords for your business and analyze your competitors' strategies to uncover opportunities.",
          },
          {
            title: "On-page Optimization (Meta Tags, Headings, URLs)",
            description:
              "We fine-tune your website's content and structure, including meta descriptions, title tags, headings, and URLs, to be search engine friendly.",
          },
          {
            title: "Off-page Link-Building and Citation Submissions",
            description:
              "We build high-quality backlinks and submit your business information to online directories to enhance your domain authority and credibility.",
          },
          {
            title: "Google My Business & Local SEO Setup",
            description:
              "We optimize your Google My Business profile and implement local SEO tactics to ensure you appear prominently in local search results.",
          },
          {
            title: "Traffic & Ranking Reports Every Month",
            description:
              "Stay informed with transparent monthly reports detailing your website's traffic, keyword rankings, and overall SEO performance.",
          },
          {
            title: "Content Optimization",
            description:
              "We assist in optimizing your website content for keyword relevance and user engagement.",
          },
          {
            title: "Schema Markup Implementation",
            description:
              "We add structured data markup to help search engines better understand your content, potentially leading to rich snippets in search results.",
          },
        ]}
        onBackClick={handleBackToPlansClick}
        isActive={activePlanDetail === "seo-detail"}
      />

      <PlanDetailsSection
        id="aso-detail"
        title="ASO (App Store Optimization) Details"
        icon={
          <img
            src="https://img.icons8.com/?size=100&id=119005&format=png&color=000000"
            alt="ASO Icon"
          />
        } // Added an icon for ASO
        summary={{
          title: "Stand Out in Crowded App Stores",
          text: "Increase your app's discoverability and downloads on both the Apple App Store and Google Play Store with our expert App Store Optimization services.",
        }}
        features={[
          {
            title: "Optimized App Titles, Keywords, & Descriptions",
            description:
              "We craft compelling and keyword-rich titles, keywords, and descriptions that improve your app's search ranking.",
          },
          {
            title: "High-converting Screenshots & Visual Assets",
            description:
              "We design attractive screenshots and other visual assets that encourage users to download your app.",
          },
          {
            title: "Review Management Strategies",
            description:
              "We help you implement strategies to acquire positive reviews and manage negative feedback effectively, boosting your app's reputation.",
          },
          {
            title: "Category Targeting & Competitor Benchmarks",
            description:
              "We identify the best categories for your app and analyze competitor performance to inform your strategy.",
          },
          {
            title: "Monthly Performance Tracking (Android + iOS)",
            description:
              "Receive comprehensive monthly reports on your app's performance, including downloads, rankings, and keyword visibility on both platforms.",
          },
          {
            title: "App Icon Optimization",
            description:
              "We provide guidance on designing an eye-catching app icon that stands out in the app store.",
          },
          {
            title: "Localization Recommendations",
            description:
              "If applicable, we suggest localization strategies to appeal to a global audience.",
          },
        ]}
        onBackClick={handleBackToPlansClick}
        isActive={activePlanDetail === "aso-detail"}
      />

      <PlanDetailsSection
        id="social-media-detail"
        title="Social Media Marketing Details"
        icon={
          <img
            src="https://img.icons8.com/?size=100&id=IqO8sjenu7je&format=png&color=000000"
            alt="Marketing"
          />
        }
        summary={{
          title: "Stay Active. Stay Relevant. Stay Viral.",
          text: "Build a strong online presence and engage with your audience across popular social media platforms with our strategic social media marketing services.",
        }}
        features={[
          {
            title: "12–15 Custom-Designed Posts Per Month",
            description:
              "We create engaging, high-quality visual content tailored to your brand and audience.",
          },
          {
            title:
              "Content Calendar Creation (Instagram, Facebook, LinkedIn & more)",
            description:
              "We plan out your monthly content to ensure consistent posting and strategic messaging across all relevant platforms.",
          },
          {
            title: "Reels & Story Design Support",
            description:
              "Get support for creating dynamic and engaging Reels and Stories, crucial for trending content.",
          },
          {
            title: "Caption, Hashtag & Engagement Strategy",
            description:
              "We craft compelling captions, research effective hashtags, and devise strategies to maximize engagement on your posts.",
          },
          {
            title: "Basic Community Interaction (Likes, Comments, DMs)",
            description:
              "We handle basic interactions to keep your audience engaged and responsive.",
          },
          {
            title: "Platform-Specific Optimization",
            description:
              "Tailoring content and strategies for each social media platform to maximize reach and impact.",
          },
          {
            title: "Monthly Performance Insights",
            description:
              "Receive reports on your social media growth, engagement rates, and top-performing content.",
          },
        ]}
        onBackClick={handleBackToPlansClick}
        isActive={activePlanDetail === "social-media-detail"}
      />

      <hr />

      <PricingSection />
      <hr />
      <WhyChooseUs />
      <hr />
      <CTASection />
      <Footer />
    </div>
  );
}

export default PricingPlan;
