import React from 'react';

const destinations = [
  { name: 'Mombasa North Coast', packages: 2, image: "/src/assets/images/raha.jpg", size: 'large' },
  { name: 'Diani/Ukunda', packages: 2, image: "/src/assets/images/dinaa.jpg", size: 'medium' },
  { name: 'Malindi/Watamu', packages: 2, image: "/src/assets/images/watamu.jpg", size: 'medium' },
  { name: 'Maasai Mara', packages: 2, image: "/src/assets/images/masaaimara.jpg", size: 'medium' },
  { name: 'Amboseli', packages: 1, image: "/src/assets/images/amboseli.jpg", size: 'medium' },
  { name: 'Samburu', packages: 2, image: "/src/assets/images/samburu.jpg", size: 'small' },
  { name: 'Naivasha', packages: 1, image: "/src/assets/images/naivasha.jpg", size: 'small' },
  { name: 'Nakuru', packages: 0, image: "/src/assets/images/naks.jpg", size: 'small' },
  { name: 'Mt Kenya', packages: 1, image: "/src/assets/images/mtkenyaa.jpg", size: 'small' },
];

const Destination = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-4">
        Popular <span className="text-orange-500">destinations</span>
      </h2>
      <p className="text-center mb-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Explore the stunning landscapes and diverse wildlife of Kenya, from national reserve safaris to traditional Swahili culture. Immerse yourself in the unique experiences this destination has to offer.
      </p>

      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {destinations.map((destination, index) => {
          let classes = "relative overflow-hidden rounded-lg";
          if (index === 0) {
            classes += " col-span-2 row-span-2";
          } else if (index < 5) {
            classes += " col-span-2";
          } else {
            classes += " col-span-1";
          }

          return (
            <div key={destination.name} className={classes}>
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                <p className="text-white text-sm">
                  ({destination.packages}) Package{destination.packages !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destination;
