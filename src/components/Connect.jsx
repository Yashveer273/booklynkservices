import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Successful PR Projects', value: 50 },
  { label: 'Successful IT Projects', value: 10 },
  { label: 'Happy PR Clients', value: 35 },
  { label: 'Happy IT Clients', value: 15 },
];

const Connect = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let count = 0;
      const increment = stat.value > 100 ? 2 : 1;
      const interval = setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(interval);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[index] = count;
          return updated;
        });
      }, 20);
    });
  };

  return (
    <section id='connect'
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 sm:px-10 md:px-20 transition-all"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 animate-fade-up">Let’s Connect</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 hover:scale-105 transform transition-all backdrop-blur-md shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-white">
                {counts[index]}
                {stat.label.includes('Projects') ? '+' : ''}
              </h3>
              <p className="text-sm mt-2 text-violet-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
