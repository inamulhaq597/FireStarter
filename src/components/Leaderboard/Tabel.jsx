import React from "react";
import MainTabel from "./MainTabel";

const Tabel = () => {
  //   Top25: [
  //     {
  //       id: 1,
  //       title: "Does drinking coffee make you smarter?",
  //       // date: "5h ago",
  //       // commentCount: 5,
  //       // shareCount: 2,
  //     },
  //     {
  //       id: 2,
  //       title: "So you've bought coffee... now what?",
  //       // date: "2h ago",
  //       // commentCount: 3,
  //       // shareCount: 2,
  //     },
  //   ],
  //   Top100: [
  //     {
  //       id: 1,
  //       title: "Is tech making coffee better or worse?",
  //       // date: "Jan 7",
  //       // commentCount: 29,
  //       // shareCount: 16,
  //     },
  //     {
  //       id: 2,
  //       title: "The most innovative things happening in coffee",
  //       // date: "Mar 19",
  //       // commentCount: 24,
  //       // shareCount: 12,
  //     },
  //   ],
  //   Top200: [
  //     {
  //       id: 1,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       // date: "2d ago",
  //       // commentCount: 9,
  //       // shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       // date: "4d ago",
  //       // commentCount: 1,
  //       // shareCount: 2,
  //     },
  //   ],
  //   NFTHolders: [
  //     {
  //       id: 1,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       // date: "2d ago",
  //       // commentCount: 9,
  //       // shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       // date: "4d ago",
  //       // commentCount: 1,
  //       // shareCount: 2,
  //     },
  //   ],
  // });
  return (
    <>
      <div className="container mx-auto ">
        <div className="w-full  flex justify-center ">
          <div className="text-white lg:w-5/6 w-full p-5  text-2xl ">
            <span className="text-[#B781ED]">Top 25 Flamers</span> get
            Guaranteed Access. Others are placed in our tiered lottery system.
          </div>
        </div>
        <div className="">
          <div className=" ">
            <MainTabel></MainTabel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabel;
