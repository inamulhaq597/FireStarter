import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
const MainTabel = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories, setCategories] = useState({
    Top25: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
       
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
     
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
     
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
     
      },
    ],
    Top100: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
       
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        
      },
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
       
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        
      },
     
    ],
    Top200: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
      
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",

      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
     
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
     
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      
      },
    ],
    NFTHolders: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
       
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
   
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
       
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
       
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
    
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
       
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
       
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
       
      },

      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      
      },
    ],
  });
  const [selectedTab, setSelectedTab] = useState("Top25");
  console.log("categories", categories[selectedTab]);
  return (
    <div className="lg:w-5/6 lg:ml-32   bg-[#15171C] lg:rounded-3xl p-4 lg:p-0 lg:flex justify-center">
    <div className="w-full   overflow-x-auto  lg:flex justify-center">
      <div className="lg:w-5/6  ">
        <div className="w-full bg-[#15171C]  px-2 py-16 ">
          <Tab.Group>
            <Tab.List className="flex lg:space-x-1  space-x-10 rounded-xl ">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  onClick={() => setSelectedTab(category)}
                  className={classNames(
                    "lg:w-[10%]    text-lg font-medium  text-white",
                    "ring-white ring-opacity-60 focus:outline-none  ",
                    selectedTab === category
                      ? " border-b-2 border-[#C58BFF]"
                      : " "
                  )}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mt-2  ">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    " bg-[#15171C] lg:p-3",
                    " ring-opacity-60  "
                  )}
                >
                  <div className="bg-[#101216] border-2  rounded-2xl border-[#2D3449] w-[760px] lg:p-4  lg:w-full">
                    <table class="lg:w-full">
                      <thead className="text-[#46484D] w-full ">
                        <tr className="pl-12 ">
                          <th className="lg:pb-5 p-4 lg:p-0   ">#</th>
                          <th className="p-4 lg:p-0">NFT</th>
                          <th className="p-4 lg:p-0">Flamers</th>
                          <th className="p-4 lg:p-0">FLAME Power</th>
                          <th className="p-4 lg:p-0">Tier</th>
                          <th className="p-4 lg:p-0">Allocation Multiplier</th>
                          <th className="p-4 lg:p-0">Access/Tickets</th>
                          <th className="p-4 lg:p-0">Cooldown</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories[selectedTab].map((v, i) => (
                          <tr className="">
                            <td className="text-[#B782ED] border-b border-t border-[#2D3449] p-4 lg:p-0 ">
                              {i + 1}
                            </td>
                            <td className="border-b border-t border-[#2D3449] lg:w-[8%]  text-center">
                              <img
                                className="lg:pl-6 w-1/2 lg:w-full ml-4 lg:ml-0 "
                                src="flame.svg"
                                alt=""
                              ></img>
                            </td>
                            <td className="border-b border-t  p-3 lg:p-0 border-[#2D3449] lg:w-1/6  text-[#B782ED]  text-center">
                              0x42cB...22571A
                            </td>
                            <td className="border-b border-t p-3 lg:p-0 border-[#2D3449] lg:w-1/6 text-[#B782ED]  text-center">
                              403,339
                            </td>
                            <td className="border-b border-t border-[#2D3449] lg:w-[8%]  text-center">
                              <img
                                className="lg:pl-6 w-1/2 lg:w-full ml-4 lg:ml-0 "
                                src="flame.svg"
                                alt=""
                              ></img>
                            </td>
                            <td className="border-b border-t border-[#2D3449] w-1/6 text-[#B782ED]  text-center">
                              8 x
                            </td>
                            <td className="border-b lg:p-6 border-[#2D3449] border-t w-1/6 text-[#B782ED]  text-center">
                              Guaranteed
                            </td>
                            <td className="border-b border-[#2D3449] border-t w-1/6 text-[#B782ED]  text-center"></td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      </div>
      </div>
  );
};

export default MainTabel;
