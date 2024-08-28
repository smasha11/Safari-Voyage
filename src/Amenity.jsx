import React from 'react';

// Rename the array to avoid naming conflicts
const amenities = [
  { name: 'Meals', image: "/src/assets/images/meal.jpg" },
  { name: 'Activities', image: "/src/assets/images/activity.jpg" },
  { name: 'Drinks', image: "/src/assets/images/drinks.jpg" },
  { name: 'Wellness', image: "/src/assets/images/wellness.jpg" },
];

const Amenity = () => {
  return (
    <div className="max-w-6xl mx-auto px-9 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">
        What is an <span className="text-orange-500">All-Inclusive</span> Holiday?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        No more carrying your wallet around on vacation! Our resorts include everything you need in one low price:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10"> {/* Add ml-10 for left margin */}
        {amenities.map((amenity) => (
          <div key={amenity.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={amenity.image} alt={amenity.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">{amenity.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenity;
