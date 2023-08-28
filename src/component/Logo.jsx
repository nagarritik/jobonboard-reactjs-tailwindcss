import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[50px] h-[50px] bg-blue-700 rounded-full flex justify-center items-center">
        <span className="text-2xl text-white font-medium">JO</span>
      </div>
      <h1 className="text-3xl font-medium text-blue-700">Job Onboard</h1>
    </div>
  );
}

export default Logo;
