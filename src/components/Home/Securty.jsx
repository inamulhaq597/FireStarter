import React from "react";

const Securty = () => {
  return (
    <div className="container mx-auto lg:p-12 p-3 ">
      <div className="flex justify-center  bottomShadow  rounded-3xl border border-[#0B0B0F]   ">
        <div className="securty lg:w-5/6 ">
          <div className="w-full lg:p-6 flex justify-end hover:translate-x-3 translate-y-3 ">
            <img className="lg:w-[3%] w-[6%] " src="securtyarrow.svg" alt=""></img>
          </div>
          <div className="w-full pt-6 pl-2 lg:pt-0 lg:pl-0 text-white lg:text-3xl text-4xl font-semibold text-center">
            Securty By
          </div>
          <div className="w-full  flex justify-center  ">
            <img className="lg:w-[35%] w-[90%]" src="securtylogo.svg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securty;
