import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: '~Akash Sharma',
    rating: 4,
    comment: 'The technicians arrived right on schedule and handled every single service with extreme professionalism and cleanliness.',
  },
  {
    id: 2,
    name: '~Priya Venkat',
    rating: 5,
    comment: 'Transparent pricing and super polite experts. The upkeep visits saved me so much hassle throughout the year.',
  },
  {
    id: 3,
    name: '~Rohit Malhotra',
    rating: 5,
    comment: 'Extremely prompt service and top-notch quality work. Everything is managed effortlessly without any follow-ups needed.',
  },
  {
    id: 4,
    name: '~Neha Gupta',
    rating: 4,
    comment: 'Immaculate service quality! The booking process was smooth and the service partner was extremely courteous.',
  },
  {
    id: 5,
    name: '~Vikram Deshmukh',
    rating: 5,
    comment: 'Very professional upkeep services. Having regular checkups gives complete peace of mind for our household.',
  },
  {
    id: 6,
    name: '~Ananya Iyer',
    rating: 4,
    comment: 'Reliable, efficient, and very well-trained experts. Highly appreciate the transparent service experience.',
  }
];

const Care360Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards at a time on desktop, responsive on smaller screens
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  // Slice visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Navigation Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              Trusted Users
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              What Our <span className="text-orange-600">Happy</span> Customers Say
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer"
              aria-label="Previous Testimonials"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer"
              aria-label="Next Testimonials"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80 flex flex-col justify-between transition-all hover:shadow-md hover:border-orange-200"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User info (Name & Location only, no avatars/initials) */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.location}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length - itemsPerPage + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? 'bg-orange-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Care360Testimonials;