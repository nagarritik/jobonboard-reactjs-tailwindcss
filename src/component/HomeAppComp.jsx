import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function HomeAppComp() {
  return (
    <div className="grid grid-cols-2 py-8 px-12">

      <div>
        <img
          src="https://superio-nextjs.netlify.app/images/resource/mobile-app.png"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <span className="text-blue-500 font-medium text-xl">DOWNLOAD & ENJOY</span>
        <p className="font-medium text-3xl">Get the Superio Job <br /> Search App</p>
        <span className="text-gray-500 text-sm">
          Search through millions of jobs and find the right fit. Simply <br /> swipe
          right to apply.
        </span>
        <div className="flex gap-5">
          <div className="flex bg-black w-[175px] justify-center items-center rounded gap-3 py-2">
            <div>
              <FaApple color="white" size={"25"} />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm">Download on the</span>
              <span className="text-white">Apple Store</span>
            </div>
          </div>

          <div className="flex bg-black w-[175px] justify-center items-center rounded gap-3 py-2">
            <div>
              <FaGooglePlay color="white" size={"25"} />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm">Get it on</span>
              <span className="text-white">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAppComp;
