import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="main mb-56 lg:pb-12">
        <div className="hero w-full   lg:w-full ">
       
          <div className="w-full    absolute">
            <div className="flex relative  lg:gap-40  gap-10 bg-star">
              <div className="  grow w-full  pt-12">
                <img className="w-full " alt="" src="rightpix.png"></img>
              </div>

              <div className=" absolute  w-[120px] h-[120px] left-1/2 top-1/4 -translate-x-1/5 -translate-y-1/2 ">
                <img className="w-full " alt="" src="bg-1.png"></img>
              </div>

              <div className=" -mt-2  lg:grow w-full">
                <img className="w-full " alt="" src="right.png"></img>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className=" flex justify-center  items-center relative top-20 bottom-0 left-0 right-0  w-full ">
            <div className=" ">
              <h1 className="text-white text-center font-bold mb-6 lg:text-4xl   text-3xl">
                A Launchpad for<br></br> Initial Metaverse Offerings
              </h1>
              <p className="text-white text-center mb-6  lg:text-3xl text-2xl">
                Own The Future
              </p>
              <div className="w-full flex   justify-center ">
                <div className=" subbtn  text-white  flex items-center p-2 rounded-full lg:w-full  border-red-500">
                  <div className="  btn  lg:w-4/6  text-white p-4  text-sm font-bold rounded-full  hover:text-secondary hover:transition  delay-[50ms] duration-150 ease">
                    CRYPTOCITIZEN PRE-SALE
                  </div>
                  <div className="text-white -mt-1 lg:ml-7 p-2  font-semibold lg:text-3xl  text-2xl">
                    soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
