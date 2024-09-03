import React from 'react';

const reviews = [
  {
    initials: 'AA',
    name: 'Ali abdi',
   
    review: 'Amazing experience! The travel agency planned our trip perfectly. Highly recommend.',
  },
  {
    initials: 'YA',
    name: 'Yussuf Aden',
   
    review: 'The best travel experience I have ever had. Everything was organized seamlessly.',
  },
  {
    initials: 'RT',
    name: 'Robert T.',
  
    review: 'Fantastic service! Our vacation was stress-free, thanks to the detailed planning.',
  },
  // Add more reviews as needed
];

const Review = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Traveler Testimonials</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {reviews.map((customer, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                  {customer.initials}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{customer.name}</h4>
                 
                </div>
              </div>
              <p className="mb-4 text-gray-700">{customer.review}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <span className="ml-2 text-gray-600">5/5 Stars</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
