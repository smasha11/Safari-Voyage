import React from 'react';
import { Link } from 'react-router-dom';

const localDestinations = [
  {
    name: 'Watamu 2024 Deals',
    description: `Explore the pristine beaches and marine life of Watamu, a hidden gem on the Kenyan coast. 
    Watamu is renowned for its coral gardens, white sandy beaches, and rich history. Whether you're interested in marine life, culture, or just relaxing by the beach, Watamu offers something for everyone. Don't miss out on snorkeling and diving in the Watamu Marine National Park.`,
    price: 'Ksh 13,500',
    imageUrl: '/src/assets/images/watamu.jpg',
    rating: 4.5,
  },
  {
    name: 'Maasai Mara 2024 Deals',
    description: `Discover the iconic Masai Mara, situated in the southwest of Kenya. Covering an area of 1,510 square km (583 square miles), the Masai Mara National Reserve is a land of breathtaking vistas, abundant wildlife, and endless plains. 
    The quintessential Masai Mara safari delivers many attractions, as the reserve is home to an excellent year-round concentration of game, including the more than two million wildebeest, zebras, and other antelopes that make up the famous Great Migration.`,
    price: 'Ksh 14,000',
    imageUrl: '/src/assets/images/masaaimara.jpg',
    rating: 4.5,
  },
  {
    name: 'Mombasa 3 Days Package 2024',
    description: `Enjoy the sandy beaches of Mombasa with this 3-day package. Includes accommodation, meals, and guided tours. 
    Mombasa offers a unique blend of cultural diversity, historical sites like Fort Jesus, and modern attractions. Relax on the pristine beaches or explore the vibrant Old Town, with its Swahili architecture and bustling markets.`,
    price: 'Ksh 12,000',
    imageUrl: '/src/assets/images/dina.jpg',
    rating: 4.5,
  },
  {
    name: 'Samburu 2024 Safari',
    description: `Experience the rugged wilderness of Samburu with this 3-day safari. Perfect for wildlife enthusiasts. 
    Samburu is known for its unique wildlife, including the reticulated giraffe, Grevy's zebra, and Somali ostrich. The park's semi-arid environment and the Ewaso Ng'iro river create an ideal backdrop for a truly memorable safari experience.`,
    price: 'Ksh 16,000',
    imageUrl: '/src/assets/images/amboseli.jpg',
    rating: 4.5,
  },
  {
    name: 'Lamu Island Getaway 2024',
    description: `Relax in the serene environment of Lamu Island with its rich Swahili culture and pristine beaches. 
    Lamu is Kenya's oldest living town, steeped in history and culture. Wander through the narrow streets, visit ancient mosques, and experience the laid-back island lifestyle. This UNESCO World Heritage site is perfect for those looking to unwind.`,
    price: 'Ksh 11,000',
    imageUrl: '/src/assets/images/watamu.jpg',
    rating: 4.5,
  },
  {
    name: 'Amboseli National Park Adventure',
    description: `Discover the spectacular landscapes and abundant wildlife of Amboseli National Park. 
    Located at the foot of Mount Kilimanjaro, Amboseli is famous for its large herds of elephants and stunning views of Africa's highest peak. This package offers the perfect mix of adventure and relaxation in one of Kenya's most popular parks.`,
    price: 'Ksh 15,000',
    imageUrl: '/src/assets/images/masaaimara.jpg',
    rating: 4.5,
  },
  {
    name: 'Tsavo West Safari',
    description: `Explore the vast wilderness of Tsavo West National Park, known for its red elephants, the stunning Mzima Springs, and diverse landscapes.`,
    price: 'Ksh 17,000',
    imageUrl: '/src/assets/images/tsavo.jpg',
    rating: 4.5,
  },
];

const internationalDestinations = [
  {
    name: 'Dubai 2024 Holiday Package',
    description: `Explore the luxurious city of Dubai with this exclusive 5-day holiday package. Includes accommodation, city tours, and desert safari. 
    Dubai is a city of superlatives, home to the world's tallest building, the Burj Khalifa, and the largest shopping mall. Experience the blend of modernity and tradition, with visits to the old souks and futuristic landmarks.`,
    price: '$2,000',
    imageUrl: '/src/assets/images/dubai.jpg',
    rating: 4.5,
  },
  {
    name: 'Paris 2024 City Tour',
    description: `Experience the romance and culture of Paris with this 4-day city tour. Visit the Eiffel Tower, Louvre Museum, and more. 
    Paris, the City of Light, offers a mix of world-renowned art, architecture, and cuisine. Stroll through the streets, enjoy a café by the Seine, and take in the iconic sights that make Paris one of the most visited cities in the world.`,
    price: '€1,800',
    imageUrl: '/src/assets/images/paris1.jpg',
    rating: 4.5,
  },
  {
    name: 'Mauritius 2024 Beach Vacation',
    description: `Relax on the white sandy beaches of Mauritius with this 7-day all-inclusive package. Perfect for a romantic getaway. 
    Mauritius offers a blend of cultural diversity, tropical landscapes, and luxury resorts. Explore the vibrant coral reefs, enjoy water sports, or simply relax on the beach.`,
    price: '$3,000',
    imageUrl: '/src/assets/images/zanz.jpg',
    rating: 4.5,
  },
];

const Dest = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      
      {/* Local Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">Local Destinations</h2>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {localDestinations.map((destination, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex"
          >
            {/* Image */}
            <div className="w-1/3 relative">
              <img 
                src={destination.imageUrl} 
                alt={destination.name} 
                className="w-full h-48 object-cover rounded-lg" // Adjusted height to 48
              />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow text-orange-500 font-bold text-sm">
                {destination.rating} ★
              </div>
            </div>
            
            {/* Content */}
            <div className="w-2/3 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-700 mb-4">{destination.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 text-xl font-bold">{destination.price}</p>
                <Link to={`/destination/${encodeURIComponent(destination.name)}`} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                  View Package
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">International Destinations</h2>
      <div className="grid grid-cols-1 gap-8">
        {internationalDestinations.map((destination, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex"
          >
            {/* Image */}
            <div className="w-1/3 relative">
              <img 
                src={destination.imageUrl} 
                alt={destination.name} 
                className="w-full h-48 object-cover rounded-lg" // Adjusted height to 48
              />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow text-orange-500 font-bold text-sm">
                {destination.rating} ★
              </div>
            </div>
            
            {/* Content */}
            <div className="w-2/3 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-700 mb-4">{destination.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 text-xl font-bold">{destination.price}</p>
                <Link to={`/destination/${encodeURIComponent(destination.name)}`} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                  View Package
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dest;
