import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { GrDocumentUpload } from "react-icons/gr";

function HomeHero1() {
  return (
    <div className="bg-blue-50 h-[750px] flex relative items-center">
      <div className="ml-[150px]">
        <p className="text-[50px] font-medium mb-5">
          There Are <span className="text-blue-500">93,178</span> Postings Here
          <br /> For you!
        </p>
        <span className="text-gray-500">
          Find Jobs, Employment & Career Opportunities
        </span>
        <div className="flex gap-3 bg-white rounded-xl border  p-5 items-center mt-10 mb-5">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Job title, Keyword or Company"
            className="w-[300px]"
          />
          <div className="h-[50px] w-[1px] bg-gray-200"></div>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City or postcode"
          />
          <button className="bg-blue-600 text-white px-6 py-4 rounded-xl">
            Find jobs
          </button>
        </div>
        <div>
          <span>Popular searches: </span>
          <div className="inline-flex">
            <span className="text-sm text-blue-500 rounded-full px-2">Designer</span>
            <span className="text-sm text-blue-500 rounded-full px-2">Developer</span>
            <span className="text-sm text-blue-500 rounded-full px-2">Web</span>
            <span className="text-sm text-blue-500 rounded-full px-2">IOS</span>
            <span className="text-sm text-blue-500 rounded-full px-2">PHP</span>
            <span className="text-sm text-blue-500 rounded-full px-2">Senior</span>
            <span className="text-sm text-blue-500 rounded-full px-2">Engineer</span>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute right-5 bottom-0"
          src="https://superio-nextjs.netlify.app/images/resource/banner-img-1.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center gap-3 bg-white px-5 py-3 rounded shadow absolute top-[60px] right-[450px]">
        <div className="bg-yellow-100 h-[40px] w-[40px] flex justify-center items-center rounded">
          <MdOutlineMail size={30} color="orange" />
        </div>
        <div>
          <span className="font-medium">
            Work Inquiry From <br /> Ali Tufan
          </span>
        </div>
      </div>

      <div className="bg-white shadow rounded flex flex-col gap-3 justify-center items-center px-5 py-3 absolute right-[20px] top-[135px]">
        <span className="font-medium">10k+ Candidates</span>
        <img
          src="https://superio-nextjs.netlify.app/images/resource/multi-peoples.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center gap-5 bg-white px-8 py-5 rounded shadow absolute right-[50px] top-[375px]">
        <div className="bg-red-100 h-[50px] w-[50px] flex justify-center items-center rounded-full">
          <LiaSuitcaseSolid size={25} color="red" />
        </div>
        <div>
          <p className="font-medium">Creative Agency</p>
          <span className="text-sm">Startup</span>
        </div>
        <BsCheckCircleFill size={35} color="red" opacity={0.2} />
      </div>

      <div className="flex gap-3 justify-center items-center bg-white shadow rounded px-5 py-3 absolute top-[500px] right-[375px]">
        <div className="bg-blue-200 h-[40px] w-[40px] flex justify-center items-center rounded-full">
          <GrDocumentUpload size={20} color="white" />
        </div>
        <div>
          <p className="font-medium">Upload Your CV</p>
          <span className="text-sm">It only takes a few seconds</span>
        </div>
      </div>
    </div>
  );
}

export default HomeHero1;
