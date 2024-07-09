import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto p-5 lg:p-8 h-screen flex flex-col justify-center items-center">
      <div className="p-0 lg:py-16 lg:px-8 rounded-lg flex flex-col lg:flex-row w-full">
        {/* Text Section */}
        <div className="order-1 lg:order-first bg-blue-50 bg-opacity-5 p-8 rounded-lg w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Digitilize your Dairy Farm
          </h1>
          <p className="font-[400] leading-relaxed mb-8 text-gray-600 text-base">
            Dairy Saathi Software is a platform for dairy farmers who want to
            sell their dairy farm produce straight to customers' doorstep. It
            manages everything in your dairy business in a better way. It
            automates the entire milk selling process right from the total
            production to accounting at a single place.
          </p>
        </div>
        {/* Image Section */}
        <div className="order-2 mx-auto lg:mx-0 w-full lg:w-1/2">
          <img
            src="https://dairysaathi.com/assets/images/tutorials/dairysaathi.png"
            className="max-w-full h-auto rounded-lg"
            alt="Dairy Saathi"
          />
        </div>
      </div>
      {/* Centered Button Section */}
      <div className="flex justify-center items-center w-full mt-8 lg:mt-0">
        <button
          type="button"
          className="focus:outline-none text-white bg-gray-700 hover:bg-gray-950 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
