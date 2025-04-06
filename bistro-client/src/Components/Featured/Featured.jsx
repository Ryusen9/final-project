import React from "react";
import featuredImg from "../../../public/assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center my-7 h-[65vh] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-amber-300 mb-4 font-Inter font-semibold">
          ---Check it out---
        </p>
        <p className="border-t-2 border-b-2 text-center text-xl lg:text-4xl p-2 font-Cinzel font-semibold">
          From Our Menu
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center max-w-6xl px-4">
        {/* Image section */}
        <div
          className="w-full h-96 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${featuredImg})` }}
        />

        {/* Text Content */}
        <div className="text-left text-white space-y-3">
          <p className="text-lg font-semibold">March 20, 2025</p>
          <p className="text-2xl font-bold">WHERE CAN I GET SOME?</p>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quisquam. Tempore aliquid nesciunt distinctio eveniet, autem laborum officia magni.
          </p>
          <button className="mt-4 px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
