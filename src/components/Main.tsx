import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div className="flex bg-slte-950 h-screen w-full">
      <div className="w-1/12">
        <Navbar />
      </div>
      <div className="w-11/12">
        <Welcome />
      </div>
    </div>
  );
};

export default Main;
