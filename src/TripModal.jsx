import React from 'react';
import { useParams } from 'react-router-dom';

const destinations = [
  {
    name: 'Watamu',
    image: 'watamu.jpg',
    price: 'Ksh 29,600',
    location: 'Malindi Watamu',
    days: '3',
    highlights: `Watamu is a small town located approximately 105 km north of Mombasa and about 15 km south of Malindi on the Indian Ocean coast of Kenya. 
    It lies on a small headland, between the Blue Lagoon and Watamu Bay. Its main economic activities are tourism and fishing.`,
    aboutTour: {
      inclusions: ['Return Flight Tickets', 'Travel Insurance', 'Return Transfers', 'Return SGR tickets', '2 Nights Accommodation'],
      exclusions: ['All not mentioned above'],
      specialNotes: [
        'Things to do in Malindi, Watamu & Kilifi',
        'Bio Ken Snake Park',
        'Hell\'s Kitchen',
        'Vasco Da Gama Pillar',
        'Portuguese chapel',
        'Snorkeling in Malindi Marine National Park',
        'Water Sports',
        'Dolphin and Whale Watching',
        'Deep-Sea Fishing',
        'Skydiving',
        'Snorkeling and Diving'
      ],
    },
  },
  // Add more destinations here...
];

const TripModal = () => {
  const { destinationName } = useParams();
  const destination = destinations.find(dest => dest.name === destinationName);

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header with Trip Title and Price */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{destination.name}</h2>
        <p className="text-2xl text-red-500">{destination.price}</p>
      </div>

      {/* Photo Gallery */}
      <div className="mb-8">
        <img src={`"/src/assets/images/watamu.jpg"`} alt={destination.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
        {/* Add more images here as needed */}
      </div>

      {/* Trip Information */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Trip Information</h3>
        <ul className="space-y-2">
          <li><strong>Location:</strong> {destination.location}</li>
          <li><strong>Days Count:</strong> {destination.days}</li>
          <li><strong>Includes:</strong> Free Sightseeing & Hotel</li>
        </ul>
      </div>

      {/* Highlights */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Highlights</h3>
        <p className="text-gray-700">{destination.highlights}</p>
      </div>

      {/* About The Tour */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">About The Tour</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Inclusions</h4>
            <ul className="list-disc list-inside space-y-1">
              {destination.aboutTour.inclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Exclusions</h4>
            <ul className="list-disc list-inside space-y-1">
              {destination.aboutTour.exclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <h4 className="font-bold mt-8 mb-2">Special Notes</h4>
        <ul className="list-disc list-inside space-y-1">
          {destination.aboutTour.specialNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripModal;
