import React, { useState } from "react";
import signin from "../images/signin.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha");
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,7), rgba(0,0,0,0.1)), url(${signin})`,
        }}
      ></div>
      <div>
        <h1 className="text-xl font-semibold text-white mt-24 mb-5">
          Log in or Sign up to continue
        </h1>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
          inputStyle={{ backgroundColor: "black", color: "white" }}
          placeholder="Enter your mobile number"
        />
        <h6 className="text-gray-500 text-xs mt-3">
          By proceeding you confirm that you are above 18 years <br /> of age
          and agree to the privacy Policy and Terms of Use.
        </h6>
        {phone && (
          <button
            onClick={sendOtp}
            type="button"
            className="text-white bg-blue-700 text-lg hover:bg-blue-800 focus:ring-4 mt-10 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 h-12 w-72 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Otp
          </button>
        )}

        <div id="recaptcha" className="mt-5"></div>
        {phone && (
          <input
            type="number"
            id="input"
            onChange={(e) => setOtp(e.target.value)}
            className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
            placeholder="Enter Otp"
            required
          />
        )}
        {otp && (
          <button
            onClick={verifyOtp}
            type="button"
            className="text-white bg-blue-700 text-lg hover:bg-blue-800 focus:ring-4 mt-10 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 h-12 w-72 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Verify Otp
          </button>
        )}
        {otp && (
          <h3 className="text-slate-500 ml-3 mt-20">
            Enter code, number an{" "}
            <span className="text-blue-500">Click Get Opt</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Signin;
