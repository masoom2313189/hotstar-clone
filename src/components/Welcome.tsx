import React from "react";
import avengers from "../images/avengers.png";

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,7), rgba(0,0,0,0.1)), url(${avengers})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen grid- grid-cols-2"
    >
      <div>
        <h1 className="text-slate-300 pt-60 font-bold text-4xl">Endgame</h1>
        <h1 className="text-slate-300 mt-3">13-10-2023</h1>
        <h1 className="text-slate-300 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          consequatur aperiam explicabo eveniet odio ex non deleniti laborum
          quaerat quasi iste, nesciunt assumenda optio consectetur illum ullam
          ipsum possimus sunt?
        </h1>
        <h1 className="text-yellow-500 font-bold text-3xl mt-8">Review</h1>
        <button className="bg-gray-500 mt-10 w-80 h-12 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Watch Now
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Welcome;
