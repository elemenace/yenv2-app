import React from "react";

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      {/* Left Section: Image */}
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src="\public\bg.png"
            alt="About Us Illustration"
            className="w-full h-auto object-cover" // Makes the image responsive and fills the container
          />
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Soldier's <span className="text-red-600">Heart</span>
          </h2>
          <p className="text-gray-700">
            Soldiers' Heart was created by this team as a joke, but they decided
            to make it a reality. Released in November 21, 2024, the game
            centers on a soldier fighting for his lover. The gameplay involves
            multiple levels where the player must rescue his beloved from the
            clutches of dragons. Download it to learn more! Let's fight for the
            ones we love!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
