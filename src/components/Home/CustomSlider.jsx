import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = (props) => {
  const [state, setState] = React.useState({
    display: true,
    width: "full",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" h-auto lg:p-12">
      <div
        className="  md md   lg:p-12   flex lg:w-full"
        style={{
          width: state.width + "px",
          display: state.display ? "block" : "none",
        }}
      >
        <Slider {...settings}>
          <div className="  h-auto  lg:p-4 ">
            <div className="h-full  p-3 lg:p-0 ">
              <div className="flex space-x-3 mb-4  cursor-pointer">
                <div className=" registr text-center flex justify-center items-center rounded-lg  p-2 text-white">
                  Registration Closed
                </div>
                <div className=" text-center flex justify-center  text-white rounded-lg  items-center bg-[#34343E]">
                  <div className=" flex justify-center space-x-2 items-center">
                    <img className="w-1/3 " src="bsc.png" alt=""></img>
                    <div>BSC</div>
                  </div>
                </div>
                <div className=" text-center text-white rounded-lg py-2 flex items-center justify-center w-[15%] bg-[#34343E]">
                  USDT
                </div>
              </div>

              <div className="">
                <h1 className="  text-4xl text-white  mb-6  cursor-pointer  hover:text-secondary">
                  CryptoCitizen
                </h1>
              </div>

              <div className="w-5/6 flex justify-center relative   cursor-pointer  items-center rounded-2xl h-60  bg-[#FFF819]">
                <div className="flex w-full justify-center  items-center">
                  {" "}
                  <img
                    className="w-[40%] rounded-full  "
                    src="sliderpix1.png"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="flex justify-end absolute top-64   left-72 pt-10 px-6">
                <button className="button  flex justify-center items-center">
                  <img src="arrow-right.svg " alt=""></img>
                </button>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div className="  h-auto  lg:p-4 ">
            <div className="h-full  p-3 lg:p-0 ">
              <div className="flex space-x-3 mb-4  cursor-pointer">
                <div className="  text-center bg-[#ff8642] rounded-lg py-2 w-1/3 text-white">
                  Coming Soon
                </div>
                <div className=" text-center w-[30%] flex justify-center  text-white rounded-lg  items-center bg-[#34343E]">
                  <div className=" flex justify-center space-x-2 items-center">
                    <img className="w-[22%] " src="solana.png" alt=""></img>
                    <div>SOLANA</div>
                  </div>
                </div>
                <div className=" text-center text-white rounded-lg py-2  w-[15%] bg-[#34343E]">
                  USDT
                </div>
              </div>

              <div className="">
                <h1 className="  text-4xl text-white  mb-6  cursor-pointer  hover:text-secondary">
                  WITLY
                </h1>
              </div>

              <div className="w-5/6 flex justify-center relative    cursor-pointer  items-center rounded-2xl h-60  bg-[#3AB5FD]">
                <div className="flex w-full justify-center  items-center">
                  {" "}
                  <img
                    className="w-[40%] rounded-full  "
                    src="sliderpix2.png"
                    alt=""
                  ></img>
                </div>
              </div>
              {/* <div className="flex justify-end absolut  bg-red-500   ml-72 pt-10 px-6" ><button className="button flex justify-center items-center">
              <img src="arrow-right.svg " alt=""></img>
              </button></div> */}
            </div>
          </div>
          {/* 3 */}
          <div className="  h-auto  lg:p-4 ">
            <div className="h-full p-3 lg:p-0  ">
              <div className="flex space-x-3 mb-4  cursor-pointer">
                <div className=" registr text-center  rounded-lg py-2 w-1/3 text-white">
                  Coming Soon
                </div>
                <div className=" text-center w-[30%] flex justify-center  text-white rounded-lg  items-center bg-[#34343E]">
                  <div className=" flex justify-center space-x-2 items-center">
                    <img className="w-[22%] " src="bsc.png" alt=""></img>
                    <div>POLYGON</div>
                  </div>
                </div>
                <div className=" text-center text-white rounded-lg py-2  w-[15%] bg-[#34343E]">
                  USDT
                </div>
              </div>

              <div className="">
                <h1 className="  text-4xl text-white  mb-6  cursor-pointer  hover:text-secondary">
                  Colexion
                </h1>
              </div>

              <div className="w-5/6 flex justify-center relative lg:border-none border-2 border-gray-900 hover:border-slate-300 cursor-pointer  items-center rounded-2xl h-60  bg-[#000413]">
                <div className="flex w-full justify-center  items-center  ">
                  {" "}
                  <img
                    className="w-[40%] rounded-full  "
                    src="sliderpix3.png"
                    alt=""
                  ></img>
                </div>
              </div>
              {/* <div className="flex justify-end absolute top-64   left-72 pt-10 px-6" ><button className="button flex justify-center items-center">
              <img src="arrow-right.svg " alt=""></img>
              </button></div> */}
            </div>
          </div>

          <div className=" fixed   h-96 ">
            <div className="text-white h-full w-[80%] p-20 text-4xl  font-semibold mb-12  ">
              <h1 className="mb-16">
                FireStarter<br></br> Projec
              </h1>
              <div>
                <button className="bg-white py-3 px-4  text-black text-lg hover:text-secondary rounded-full">
                  ALL PROJECTS
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default CustomSlider;
