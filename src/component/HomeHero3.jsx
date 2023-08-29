import React from "react";
import HomeJobTile from "./HomeJobTile";

function HomeHero3() {
  const jobInfo = [
    {
      title: "Software Engineer (Android), Libraries",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-1.png",
      info: ["Segment", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Full Time", "Private", "Urgent"],
    },
    {
      title: "Recruiting Coordinator",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-2.png",
      info: ["Catalyst", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Freelancer", "Private", "Urgent"],
    },
    {
      title: "Product Manager, Studio",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-3.png",
      info: ["Invision", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Part Time", "Private", "Urgent"],
    },
    {
      title: "Senior Product Designer",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-4.png",
      info: ["Upwork", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Temporary", "Private", "Urgent"],
    },
    {
      title: "Senior Full Stack Engineer, Creator Success",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-5.png",
      info: ["Medium", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Full Time", "Private", "Urgent"],
    },
    {
      title: "Software Engineer (Android), Libraries",
      imgUrl:
        "https://superio-nextjs.netlify.app/images/resource/company-logo/1-6.png",
      info: ["Figma", "London, UK", "11 hours ago", "$35k - $45k"],
      tags: ["Freelancer", "Private", "Urgent"],
    },
  ];
  return (
    <div className="h-[max-content] flex flex-col justify-center items-center py-32">
      <p className="text-3xl font-medium  mb-3">Featured Jobs</p>
      <span className="text-gray-500">
        Know your worth and find the job that qualify your life
      </span>
      <div className="grid grid-cols-2 gap-8 my-8">
        {jobInfo.map((item) => (
          <HomeJobTile data={item} />
        ))}
      </div>
      <button className="bg-blue-700 text-white px-5 py-3 rounded">
        Load more listing
      </button>
    </div>
  );
}

export default HomeHero3;
