import React, { Component, useEffect, useRef, seState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper";
import vid2 from "../../Video/video2.mp4";
import vid1 from "../../Video/video1.mp4";

const Mainsection = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef?.current?.addEventListener("canplay", function () {
      setTimeout(function () {
        vidRef.current.play();
      }, 5000);
    });
  }, []);

  return (
    <div className="  ">
      <div className="w-full  lg:opacity-20   relative">
        <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mt-20">
            <video
              className="  rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              src={vid1}
            ></video>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <video
              className="  rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              src={vid2}
            ></video>
          </SwiperSlide>
          <SwiperSlide className="mt-20 ">
            <video
              className="  rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              src={vid1}
            ></video>
          </SwiperSlide>

          <SwiperSlide className=" ">
            {" "}
            <video
              className="  rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              src={vid2}
            ></video>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="containter mx-auto  z-30  lg:absolute lg:right-0 lg:left-0 lg:top-40  ">
        <div className="w-full flex justify-center lg:mb-4 text-white">
          <h1 className="  lg:text-7xl  text-3xl  lg:font-bold">
            The FireStarter Metaverse
          </h1>
        </div>
        <div className="w-full flex justify-center mb-4 lg:mb-0 text-white text-center p-3 lg:p-0  text-sm lg:text-3xl ">
          <p>
            Ultra-rare NFT’s with platform utility. Collect, Trade, Ignite. Own
            The Future.
          </p>
        </div>
      </div>

      <div className="w-full flex   justify-center mb-16">
        <div className="  text-white  flex items-center p-2 rounded-full border-2  border-[#858587]">
          <div className=" bg-white  lg:px-12 px-6 lg:py-4 py-3 text-black  text-sm lg:font-bold rounded-full  hover:text-secondary hover:transition  delay-[50ms] duration-150 ease">
            FIRESTARTER NFT'S
          </div>
          <div className="text-white -mt-1 lg:ml-7 p-2  lg:font-semibold text-sm  lg:text-lg ">
            MY COLLECTION
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-12">
        <div className=" flex justify-center">
          <div className="lg:w-5/6 p-6 text-white">
            <div className="lg:w-1/2">
              <h1 className="text-white lg:text-5xl text-3xl lg:mb-8 mb-2">The Flare</h1>
              <p className="text-white  lg:text-lg p-2 mb-8">
                11,111 NFT’s igniting the future of the FireStarter Metaverse.
                Free to claim for our earliest community members. Follow the
                link below
              </p>
              <div className="lg:w-1/2 w-[80%] bg-white py-3 text-black rounded-full lg:p-4 p-2 flex justify-center items-center lg:font-bold">
                SEE THE COLLECTION
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
