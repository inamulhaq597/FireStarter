import React from "react";

const Herocard = () => {
  return (
      <>
          
          
      <div className="container mx-auto  flex p-3 lg:p-0 lg:flex-row flex-col justify-center lg:space-x-10  space-y-10   mb-12 ">
        {/* 1 */}
        <div class="flex card1   h-[250px] lg:w-[400px] rounded-3xl  lg:p-4 lg:mt-10 text-white ">
          <div className="lg:w-1/2 w-1/2"></div>

          <div className="flex items-center  lg:w-1/2">
            <div className="w-full ">
              <h1 className=" lg:text-2xl font-bold mb-5">Buy FLAME</h1>
              <div className="mb-5">
                <d  iv className="bg-gray-500     p-2 rounded-full flex items-center bg-transpclr ">
                  <img className="w-1/5" alt="" src="herocardpix1.png"></img>
                  <h1 className=" ml-2  hover:text-secondary font-semibold text-lg">
                    KUCOIN
                  </h1>
                </d>
              </div>

              <div className="mb-5">
                {" "}
                <div className="bg-gray-500    p-2 rounded-full flex items-center bg-transpclr ">
                  <img className="w-1/5" alt="" src="herocardpix1.png"></img>
                  <h1 className=" ml-2  hover:text-secondary font-semibold text-lg">
                    KUCOIN
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div class="flex card2 box-border h-[250px] lg:w-[400px] rounded-3xl p-4 text-white ">
          <div className="w-1/2 "></div>

          <div className="flex items-center p-4 lg:p-0 w-[240px]">
            <div className="w-full  ">
              <h1 className=" lg:text-2xl mt-4 font-bold mb-4">Lock FLAME</h1>
              <div className="">
                <p className="mb-3">
                  Look FLAME and{" "}
                  <span className="text-secondary">
                    get access to our upcoming IMOs
                  </span>{" "}
                  on FireStarter
                </p>
              </div>

              <div className="mb-5">
                <div className="bg-white lg:py-4 py-3 rounded-full flex items-center justify-center ">
                  <h1 className=" text-black  hover:text-secondary lg:font-semibold lg:text-lg">
                    LOCK FLAME
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div class="flex card3 box-border h-[250px] lg:w-[400px] rounded-3xl p-4 text-white ">
          <div className="w-1/2 "></div>

          <div className="flex items-center p-4 lg:p-0  w-[240px]">
            <div className="w-full  ">
              <h1 className=" lg:text-2xl mt-4 font-bold mb-4">Earn FLAME</h1>
              <div className="">
                {" "}
                <p className="mb-3">
                  Earn <span className="text-secondary">up to 800% APY</span> in
                  $FLAME rewards by staking your LP tokens
                </p>
              </div>

              <div className="mb-5">
                {" "}
                <div className="bg-white lg:py-4 py-3 rounded-full flex items-center justify-center ">
                  <h1 className=" text-black  hover:text-secondary lg:font-semibold lg:text-lg">
                    Earn FLAME
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herocard;
