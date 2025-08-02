import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { Feedback } from '../constants/index';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FeedbackSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleFeedback = () => {
    setShowAll(prev => !prev);
  };

  const visibleFeedback = showAll ? Feedback : Feedback.slice(0, 3);

  return (
    <section id='feedback' className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-20 px-4 md:px-10 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleFeedback.map((item, index) => (
            <FeedbackCard key={index} data={item} />
          ))}
        </div>

        {Feedback.length > 3 && (
          <button
            onClick={toggleFeedback}
            className="mt-10 text-purple-300 hover:text-white transition-colors duration-300 flex items-center mx-auto"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="ml-2" />
              </>
            ) : (
              <>
                Show More <FaChevronDown className="ml-2 animate-bounce" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default FeedbackSection;
