export default function About() {
  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="space-y-4">
              <h2 className="font1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover the Wonders of Kenya with Safari Voyage
              </h2>
              <p className=" font1 text-gray-600 md:text-lg">
                Safari Voyage is a premier tour company that specializes in
                crafting unforgettable travel experiences to Kenya and beyond.
                With our expertise and dedication to exceptional service, we
                strive to make your dream vacation a reality.
              </p>
              <p className=" font1 text-gray-600 md:text-lg">
                From the vast savannas teeming with wildlife to the breathtaking
                landscapes of the Rift Valley, Kenya offers a truly unique and
                awe-inspiring adventure. Let us guide you through this
                remarkable country, where you'll have the opportunity to witness
                the migration of the wildebeest, explore ancient tribal
                cultures, and immerse yourself in the natural wonders that have
                captivated travelers for generations.
              </p>
              <p className=" font1 text-gray-600 md:text-lg">
                Our team of experienced guides and travel experts will ensure
                that every aspect of your safari is tailored to your
                preferences, from the accommodations to the activities. We pride
                ourselves on our attention to detail and our commitment to
                providing an unforgettable experience.
              </p>
            </div>
            <div className=" font1 grid gap-4">
              {[
                {
                  title: "Seamless Travel",
                  icon: PlaneIcon,
                  text: "We handle all the details, from booking flights to arranging hotel accommodations, ensuring a stress-free travel experience.",
                },
                {
                  title: "Curated Experiences",
                  icon: CompassIcon,
                  text: "Our team of experts crafts personalized itineraries that showcase the best of Kenya's stunning landscapes, wildlife, and cultural attractions.",
                },
                {
                  title: "Award-Winning Service",
                  icon: TrophyIcon,
                  text: "Our commitment to excellence has earned us numerous industry awards, ensuring you receive the highest quality of service.",
                },
                {
                  title: "Unparalleled Views",
                  icon: TelescopeIcon,
                  text: "Witness the breathtaking landscapes of Kenya, from the vast savannas to the majestic Rift Valley, all while enjoying the best vantage points.",
                },
                {
                  title: "Cultural Immersion",
                  icon: GroupIcon,
                  text: "Discover the rich cultural heritage of Kenya, from interacting with local tribes to exploring ancient traditions and customs.",
                },
              ].map(({ title, icon: Icon, text }, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <div className="bg-gray-200 rounded-md p-3 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src="https://img.freepik.com/premium-photo/unforgettable-wildlife-safari-adventure-joyful-partners-wonder-with-lioness-african_996993-115035.jpg?w=740"
              width={800}
              height={600}
              alt="Safari Voyage"
              className="rounded-xl object-cover aspect-video"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://img.freepik.com/premium-photo/dubai-beach-camels-passing-by-dubai-jumeirah-beach_1028938-236429.jpg?ga=GA1.1.841413721.1720715939&semt=ais_hybrid"
                width={400}
                height={400}
                alt="Safari Voyage"
                className="rounded-xl object-cover aspect-square"
              />
              <img
                src="https://img.freepik.com/premium-photo/camel-ride-diana-beach-mombasa-kenya_564806-913.jpg?w=740"
                width={400}
                height={400}
                alt="Safari Voyage"
                className="rounded-xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600">
            Book Your Safari
          </button>
        </div>
      </div>
    </div>
  );
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function TelescopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 8.633 1.114 4.456" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10" />
      <path d="M18 4h1a2 2 0 0 1 2 2v2a5 5 0 0 1-5 5V4" />
      <path d="M6 4v9a5 5 0 0 1-5-5V6a2 2 0 0 1 2-2h1" />
      <path d="M9 18a5 5 0 0 1 6 0" />
    </svg>
  );
}
