import React from "react";
import { FaCoins } from "react-icons/fa";

function HomeCategoryTile() {
  return (
    <div className="flex justify-start items-center border px-5 py-3 rounded-xl gap-3 w-[350px] hover:shadow">
      <div className="bg-gray-100 w-[70px] h-[70px] rounded-xl flex justify-center items-center">
        <FaCoins color="blue"/>
      </div>
      <div>
        <p className="font-medium text-xl">Accounting / Finance</p>
        <span className="text-gray-500">(2 open positions)</span>
      </div>
    </div>
  );
}

export default HomeCategoryTile;
