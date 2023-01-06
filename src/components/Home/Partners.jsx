import React from "react";

const Partners = () => {
  return (
    <div className="container mx-auto p-6  ">
      <div className="w-full lg:text-4xl  text-6xl font-semibold flex justify-center mb-12 text-white">
        Partners
      </div>
      <div className="flex justify-center  ">
        <div className="lg:w-5/6  flex lg:flex-row flex-col  lg:space-x-12">
          <div className="lg:w-1/2 ">
            <div className="text-white mb-10">
              <img src="patrenpolygon.svg " alt=""></img>
            </div>
            <div className="text-white">
              <img src="patrenstoshe.svg " alt=""></img>
            </div>
          </div>

          {/* 2 */}
          <div className="lg:w-1/2 ">
            <div className="text-white lg:mb-10">
              <img className="" src="patrenparsiq.svg " alt=""></img>
            </div>
            <div className="text-white lg:mb-10">
              <img src="patrenchainlink.svg " alt=""></img>
            </div>

            <div className="text-white ">
              <img className=" ml-6 lg:ml-0" src="patrenquickswap.svg " alt=""></img>
            </div>
          </div>
          {/* 3 */}
          <div className="lg:w-1/2 mb-2 lg:mb-0">
            <div className="text-white lg:mb-10">
              <img className=" ml-3 lg:ml-0 " src="patrenblockpass.svg " alt=""></img>
            </div>
            <div className="text-white lg:mb-14 mb-8" >
              <img src="patrentransform.svg " alt=""></img>
            </div>

            <div className="text-white">
              <img className=" ml-7 lg:ml-0 " src="patrencoingecko.svg " alt=""></img>
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <div className="text-white lg:mb-10 ">
              <img className=" ml-5 lg:ml-0 " src="patrenquantstamp.svg " alt=""></img>
            </div>
            <div className="text-white">
              <img src="patrenkucoin.svg " alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
