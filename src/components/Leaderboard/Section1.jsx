import React from "react";
import Herocard from "../Home/Herocard";

const Section1 = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="flex pt-16 pb-10  justify-center">
        <div className="w-5/6 ">
          <h1 className="text-white lg:text-6xl  text-4xl mb-6 font-semibold">
            FLAME Leaderboard
          </h1>

          <p className="text-white lg:text-3xl ">
            Reach the top - Own The Future. Leaders receive higher allocations
            and more access to our IMO’s. The more FLAME Power you accumulate,
            the better chance you have of winning.
          </p>
        </div>

        <div></div>
      </div>
      <div className="flex  justify-center">
        <div className="text-white lg:text-4xl mb-6 flex font-semibold w-5/6">
          <div className="lg:w-1/2 ">
            <h1>How to increase your FLAME Power?</h1>
          </div>
          <div className="p-2 -mt-2 lg:mt-0  ml-2 lg:ml-0 rounded-full bg-gray-800 hover:bg-gray-400">
            <img src="aerrowup.svg" alt=""></img>
          </div>
        </div>
      </div>
     
      <Herocard></Herocard>
    </div>
  );
};

export default Section1;
