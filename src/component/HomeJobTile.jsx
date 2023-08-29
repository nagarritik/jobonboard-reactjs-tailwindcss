import React from "react";
import JobTag from "./JobTag";
import JobTileInfo from "./JobTileInfo";
import { FaRegBookmark } from "react-icons/fa";

function HomeJobTile({data}) {
  return (
    <div className="relative flex gap-3 border rounded-xl px-5 py-7 w-[550px]">
      <div className="absolute top-6 right-6">
        <FaRegBookmark />
      </div>
      <div>
        <img
          src={data.imgUrl}
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-3">
        <a href="/" className="font-medium">
          {data.title}
        </a>
        <div className="flex gap-5">
          {
            data.info.map(item=><JobTileInfo data={item} />)
          }
        </div>
        <div className="flex gap-5">
          {
            data.tags.map(item=><JobTag data={item}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default HomeJobTile;
