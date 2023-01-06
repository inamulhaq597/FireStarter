import React from "react";
import vid1 from "../../Video/video1.mp4";

const Flaresub = () => {
  return (
    <div className="firesection">
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

        <div className=" nftcard  bg-[#15161C]  lg:w-[392px] p-4 -top-20   absolute right-0  lg:right-20 -lg:top-40 lg:bottom-50 lg:left-30">
          <div className="mb-3">
            <video autoPlay muted loop playsInline src={vid1}></video>
          </div>
          <div className="">
            <div className="w-1/2 flex">
              <img className="w-1/4" src="nftfirelogo.png" alt=""></img>
              <h1 className=" text-2xl text-white ">Flare</h1>
            </div>
            <div className=" text-lg text-white ">
              <h1 className="text-white">#1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flaresub;
