import React from "react";

import ProjectCard from "./ProjectCard";

const SubCard = () => {
  const cardData = [
    {
      img: "/sliderpix1.png",
      title: "Live Projects",
      button1Text: "Registration Closed",
      button2Text: "BSC",
      button3Text: "USDT",
      logoimg: "/bsc.png",
      CardHed: "CryptoCitizen",
      border: "hover:border-[#FFF819]"
    },
   

  ];
  return (
    <>
      <div className=" container mx-auto lg:pl-20 pb-12 justify-items-center p-2 lg:p-0 ">
        <div className="lg:w-5/6">
          <div className="lg:w-[60%]  ">
          <h1 className="text-white lg:text-5xl w-full  text-2xl lg:ml-12 p-4 lg:p-0 ">Live Projects</h1> 
        {cardData.map((v, i) => (
          <div className=" ">
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
          {/* <Apply></Apply> */}
    </>
  );
};

export default SubCard;
