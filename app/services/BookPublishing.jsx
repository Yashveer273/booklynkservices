import React from 'react';
import "./BookPublishing.css"




export default  function BookPublishing () {
    // Data structures for easy iteration in React (using content from the feature cards in the prompt)
    const featureCards = [
        { icon: '📚', title: 'Book Creation', details: ['Professional writing or editing', 'Premium cover & interior design', 'eBook + Paperback formatting'] },
        { icon: '🛒', title: 'Publishing & Distribution', details: ['Amazon, Kindle & Flipkart listing', '500 high-quality printed copies', '0% Royalty — You keep all revenue'] },
        { icon: '🔥', title: 'Marketing & Bestseller Launch', details: ['Amazon Assured Bestseller strategy', '3-Month social media management', 'Meta + Amazon ads & influencer campaigns'] },
        { icon: '🎬', title: 'Media & Branding', details: ['Book trailer & author interviews', 'Press release on 200+ platforms', 'Live TV Interviews + Wikipedia page'] },
    ];

    const instagramEmbedUrl = "https://www.instagram.com/reel/DP9pTQGjXWd/embed/";

    return (
        <div className="font-sans antialiased">
          

            {/* HERO SECTION */}
            <section className="booklynk-hero">
                <div className="hero-content">
                    <h1>From a Spark of an Idea to a Nationwide Bestseller</h1>
                    <p>Your story deserves more than just publishing — it deserves a launch that transforms you into a recognised author with influence, authority and a powerful digital presence.</p>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="booklynk-story">
                <div className="story-inner">
                    <p>Every great book begins with a vision. We refine that vision into a professionally written manuscript, transform it with world-class design, publish it globally, and position you as a truly premium author.</p>
                    <p>From writing → publishing → marketing → media features → bestseller badge — <strong>we take complete ownership of your book’s journey.</strong></p>
                </div>
            </section>

            {/* INSTAGRAM REEL SECTION (EMBEDDED) */}
            <section className="booklynk-reel">
                <h2 className="section-title">Our Service Trailer</h2>
                <div className="reel-wrapper">
                    <div className="reel-iframe-container">
                        <iframe 
                            src={instagramEmbedUrl}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="encrypted-media"
                            title="Instagram Service Trailer Reel"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="booklynk-features">
                <h2 className="section-title">Your Complete Bestseller Package</h2>

                <div className="feature-grid">
                    {featureCards.map((card, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <ul>
                                {card.details.map((detail, dIndex) => (
                                    <li key={dIndex}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICE SECTION */}
            <section className="booklynk-price">
                <div className="price-box">
                    <h3>Your One-Time Complete Package</h3>
                    <span className="price">₹8,00,000 + GST</span>
                    <p>No hidden charges. All-inclusive.</p>
                    </div>
            </section>

            
        </div>
    );
};

