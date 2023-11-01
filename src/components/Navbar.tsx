import React, { useState } from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import search from "../images/search.png";
import home from "../images/home.png";
import action from "../images/action.png";
import comedy from "../images/comedy.png";
import love from "../images/love.png";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [touch, setTouch] = useState(false);
  return (
    <div className="grid grid-cols-2 bg-black w-28 h-screen">
      <div
        onMouseEnter={() => setTouch(true)}
        onMouseLeave={() => setTouch(false)}
      >
        <img src={logo} alt="Logo" className="w-28 ml-5 mt-5" />
        <img src={user} alt="User" className="w-5 ml-9 mt-8 cursor-pointer" />
        <img
          src={search}
          alt="Search"
          className="w-9 ml-7 mt-8 cursor-pointer"
        />
        <img src={home} alt="Home" className="w-9 ml-7 mt-8 cursor-pointer" />
        <img src={love} alt="Love" className="w-16 ml-5 mt-8 cursor-pointer" />
        <img
          src={action}
          alt="Action"
          className="w-16 ml-5 mt-8 cursor-pointer"
        />
        <img
          src={comedy}
          alt="Comedy"
          className="w-16 ml-5 mt-8 cursor-pointer"
        />
      </div>
      {touch && (
        <Fade>
          <div className="z-20 ml-4 w-20 bg-black h-screen font-bold text-base text-slate-300">
            <h4 className="mt-20">Signin</h4>
            <h4 className="mt-10">Search</h4>
            <h4 className="mt-11">Home</h4>
            <h4 className="mt-10">Love</h4>
            <h4 className="mt-10">Action</h4>
            <h4 className="mt-10">Comedy</h4>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Navbar;
