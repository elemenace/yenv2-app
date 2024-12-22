import React, { useState, useEffect } from "react";

function Home() {
  // Array of images
  const images = [
    "/public/girl.jpg",
    "/public/pic2.jpg",
    "/public/pic3.jpg",
    "/public/pic4.jpg",
  ];

  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Change the image every 1 second
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex  h-screen w-screen">
      {/* Background Image */}
      <img
        src={images[currentImage]} // Dynamically set the image source
        alt={`Background ${currentImage + 1}`}
        className="absolute top-0 left-0 h-full w-full object-cover" // Fullscreen image
      />

      {/* Buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-10">
        {/* App Store Button */}
        <a
          href="#"
          className="flex items-center justify-center border-2 border-red-700 rounded-full bg-black text-white px-8 py-2 text-center transition duration-200 ease-in-out hover:bg-transparent hover:text-black"
        >
          <span className="icon">
            <svg
              className="h-8 w-8" // Increased size of the icon
              fill="currentColor"
              viewBox="-52.01 0 560.035 560.035"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
            </svg>
          </span>
          <span className="ml-4 flex flex-col items-start leading-none">
            <span className="text-sm mb-1">Download form</span>
            <span className="font-semibold">App store</span>
          </span>
        </a>

        {/* Discord Button */}
        <a
          href="#"
          className="flex items-center justify-center border-2 border-red-700 rounded-full bg-black text-white px-8 py-2 text-center transition duration-200 ease-in-out hover:bg-transparent hover:text-black"
        >
          <svg
            viewBox="0 -28.5 256 256"
            className="h-8 w-8" // Increased size of the icon
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
          </svg>
          <span className="ml-4 flex flex-col items-start leading-none">
            <span className="text-sm mb-1">JOIN THE</span>
            <span className="font-semibold">DISCORD</span>
          </span>
        </a>
        {/*Add this when scroling */}
      </div>
    </div>
  );
}

export default Home;
