import React from "react";

function HomeRecruiting() {
  return (
    <div className="rounded grid grid-cols-2 bg-blue-100 h-[275px] mx-[100px]">
      <div
      className="flex items-center ml-5">
        <img
        className="h-[225px] mix-blend-multiply"
          src="https://img.freepik.com/free-vector/organic-flat-public-relations-concept-illustrated_23-2148891184.jpg?w=740&t=st=1693309068~exp=1693309668~hmac=1e1f2bc4f60765fc59f6c839ee3a5070cef9b864644e35c1e9aa80929253b025"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <p className="text-2xl font-medium">Recruiting?</p>
        <span className="text-sm text-gray-500">
          Advertise your jobs to millions of monthly users and search 15.8
          million <br /> CVs in our database.
        </span>
        <button className="w-max text-white bg-blue-500 px-5 py-2 rounded">Starting Recruiting Now</button>
      </div>
    </div>
  );
}

export default HomeRecruiting;
