import React from "react";
import vid2 from "../../Video/video2.mp4";
const Therdsection = () => {
  return (
    <div className="therd">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-5/6 ">
            <div className="lg:w-1/2 lg:p-0 p-6  mb-6">
              <h1 className=" mb-3 lg:text-4xl text-3xl text-white">The FireStarters</h1>

              <p className="text-white  lg:text-xl  ">
                On 2021-10-14 18:00:00, 200 Flare NFT holders will be able to
                claim our first FireStarter - Hiro. A legend among the stars,
                his role in the FireStarter Metaverse will unravel with time and
                patience. Should your Flare not Ignite at this time, please try
                again next.
              </p>
            </div>
            <div className="w-full  p-4 lg:p-0">
            <div className="lg:w-1/4   bg-white mb-24 text-black rounded-full lg:p-4 p-2 flex justify-center items-center lg:font-bold">
              SEE THE COLLCTION
            </div>
            </div>
           

            

<div className="container mx-auto  relative ">
        <div className=" flex justify-center p-6 lg:p-0 ">
          <div className="lg:w-5/6 border lg:p-12 p-2  h-auto  rounded-3xl border-[#444448] text-white bg-[#0B0B0F]">
            <div className="lg:w-1/2  p-2">
              <h1 className="text-white lg:text-5xl  text-3xl mb-6">The Flare</h1>
              <p className="text-white  text-sm "> Total: 11,111</p>
              <p className="text-white text-sm  mb-2">Price: Free</p>
              <ul className="mb-6">
                <h1 className="text-white text-lg mb-2">Utility</h1>

                <li className="  text-sm mb-1">
                  
                  FireStarter Projects and $FLAME Airdrop Participation
                </li>
                <li className="  text-sm">
                  
                  FireStarter Projects and $FLAME Airdrop Participation
                </li>
              </ul>

              <p className="text-white text-lg ">
                All Flare NFT's will ignite at some point in the future
              </p>
            </div>
          </div>
        </div>

        <div className=" nftcard2  bg-[#15161C]  lg:w-[392px] p-4 -top-24   absolute right-0 mr-4 lg:mr-0 lg:right-20 -lg:top-40 lg:bottom-50 lg:left-30">
          <div className="mb-3">
            <video autoPlay muted loop playsInline src={vid2}></video>
          </div>
          <div className="">
            <div className="w-1/2 flex">
              <img className="w-1/4" src="nftfirelogo.png" alt=""></img>
              <h1 className=" text-2xl text-white ">Flare</h1>
            </div>
            <div className=" text-lg text-white ">
              <h1 className= "     text-white">#1</h1>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therdsection;
