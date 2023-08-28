import React from "react";
import JobTag from "./JobTag";
import JobTileInfo from "./JobTileInfo";
import { FaRegBookmark } from "react-icons/fa";

function HomeJobTile() {
  return (
    <div className="relative flex gap-3 border rounded-xl px-5 py-7 w-[550px]">
      <div className="absolute top-6 right-6">
        <FaRegBookmark />
      </div>
      <div>
        <img
          src="https://superio-nextjs.netlify.app/images/resource/company-logo/1-4.png"
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-3">
        <a href="#" className="font-medium">
          Software Engineer (Android), Libraries
        </a>
        <div className="flex gap-5">
          <JobTileInfo />
          <JobTileInfo />
          <JobTileInfo />
          <JobTileInfo />
        </div>
        <div className="flex gap-5">
          <JobTag />
          <JobTag />
          <JobTag />
        </div>
      </div>
    </div>
  );
}

export default HomeJobTile;
