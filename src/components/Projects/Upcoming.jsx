import React from "react";
import ProjectCard from "./ProjectCard";

const Upcoming = () => {
  const cardData = [
    {
      img: "/sliderpix2.png",
      title: "Upcoming Projects",
      button1Text: "Coming Soon",
      button2Text: "SOLANA",
      button3Text: "USDC",
      logoimg: "/solana.png",
      CardHed: "WITLY",
      border: "hover:border-[#3AB5FD]"
      
    },
    {
      img: "/sliderpix3.png",
      title: "",
      button1Text: "Coming Soon",
      button2Text: "POLYGON",
      button3Text: "USDC",
      logoimg: "/bsc.png",
      CardHed: "Colexion",
      border: "none"
    },
  ];
  return (
    <>
      <div className=" container mx-auto lg:pl-20 pb-12 justify-items-center p-2     ">
              <div className=" ">
                  <h1 className="text-white lg:text-5xl text-2xl p-2 lg:ml-12  ">Upcoming Projects</h1> 
          <div className="w-full flex lg:flex-row flex-col   space-y-12 lg:space-y-0 ">
            {cardData.map((v, i) => (
              <div  className=" lg:w-[60%]  ">
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
    </>
  );
};

export default Upcoming;
