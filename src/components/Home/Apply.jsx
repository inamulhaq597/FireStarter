import React from "react";

const Apply = () => {
  return (
    <section className="w-full lg:p-12 p-3  flex justify-center">
    
        <div className="apply  lg:h-[400px]  h-[430px]  lg:w-[90%] rounded-3xl  flex flex-col justify-center  items-center container mx-auto ">
          <h1 className="text-white mb-16 p-3 lg:text-5xl text-3xl   text-center  lg:font-semibold">
            Is your project ready to join the Metaverse?
          </h1>

          <button className="lg:py-3   p-4 bg-white lg:w-1/6 lg:font-semibold  hover:text-secondary text-xl rounded-full">
            APPLY HERE
          </button>
        </div>
    
    </section>
  );
};

export default Apply;
