import React from "react";
import Apply from "../Home/Apply";
import ProjectCard from "./ProjectCard";

const Completed = () => {
  const cardData = [
    {
      img: "/cardpix1.png",
      title: "Completed Projects",
      button1Text: " Closed",
      button2Text: "BSC",
      button3Text: "BUSD",
      logoimg: "/bsc.png",
          CardHed: "Harmony Launcher",
      
      border: "none"
    },
    {
      img: "/cardpix2.png",
      title: "",
      button1Text: "closed",
      button2Text: "BSC",
      button3Text: "BUSD",
      logoimg: "/bsc.png",
        CardHed: "ritestream",
        border: "hover:border-[#6743BF]"
    },
    {
      img: "/cardpix3.png",
      title: "",
      button1Text: "Registration Closed",
      button2Text: "Closed",
      button3Text: "POLYGON",
      logoimg: "/bsc.png",
        CardHed: "OneTo11 Games",
        border: "hover:border-[#3AB5FD]"
    },
    {
      img: "/cardpix4.svg",
      title: "",
      button1Text: "Registration Closed",
      button2Text: "BSC",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "FireStarter",
      
      border: "hover:border-[#904C3A]"
    },
    {
      img: "/cardpix5.png",
      title: "",
      button1Text: " Closed",
      button2Text: "SOLANA",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "Decimated",
      
      border: "hover:border-[#378A9A]"
    },
    {
      img: "/cardpix6.png",
      title: "",
      button1Text: " Closed",
      button2Text: "BSC",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "REV3AL",
      
      border: "hover:border-[#FFFFFF]"
    },
    {
      img: "/cardpix7.png",
      title: "",
      button1Text: "Closed",
      button2Text: "SOLANA",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "Legends of Elumia",
      
      border: "hover:border-[#904C3A]"
    },
    {
      img: "/cardpix8.png",
      title: "",
      button1Text: "Closed",
      button2Text: "ETH",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "Nicky Diamonds NFT",
      
      border: "hover:border-[#C4A2FF]"
    },
    {
      img: "/cardpix9.png",
      title: "",
      button1Text: " Closed",
      button2Text: "SOLANA",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "Metamall",
    
        
      border: "hover:border-[#844E7D]"
    },
    {
      img: "/cardpix10.png",
      title: "",
      button1Text: "RClosed",
      button2Text: "POLYGON",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "H3RO3S AG",
      border: "hover:border-[#CDAB64]"
    },
    {
      img: "/cardpix11.png",
      title: "",
      button1Text: "Closed",
      button2Text: "ETH",
      button3Text: "USDT",
      logoimg: "/bsc.png",
        CardHed: "Animal Concerts",
        border:"none"
    },
  ];
  return (
    <>
      <div className=" container mx-auto lg:pl-20 pb-12 justify-items-center p-2   ">
        <div className=" ">
          <h1 className="text-white lg:text-5xl text-2xl p-2 lg:ml-12  ">Completed Projects</h1>
          <div className="w-full grid  lg:grid-cols-2 space-y-12 lg:space-y-0 ">
            {cardData.map((v, i) => (
              <div className="  ">
                <ProjectCard
                  img={v.img}
                  logoimg={v.logoimg}
                  title={v.title}
                  button1Text={v.button1Text}
                  button2Text={v.button2Text}
                  button3Text={v.button3Text}
                        CardHed={v.CardHed}
                        border={v.border}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Apply></Apply>
    </>
  );
};

export default Completed;
