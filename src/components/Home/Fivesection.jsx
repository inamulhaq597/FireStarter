import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Fivesection = () => {
  return (
    <div className="container mx-auto ">
      <div className="w-full flex flex-col lg:flex-row   p-3 lg:p-16">
        <div className="    lg:w-1/2 lg:p-6 p-3 text-white">
          <h1 className=" headline  mb-8 leading-snug lg:text-4xl  text-2xl   lg:font-semibold">
            We facilitate the early stage <br></br>funding of Metaverse projects
            and communities by amplifying them<br></br> through culture.
          </h1>

          <div className="w-full flex space-x-2 flex-row mb-6 lg-mb-0 ">
            <div className=" lg:w-1/3      ">
              <Menu as="div" className="relative inline-block text-left">
                <div className=" lg:w-[100%]  ">
                  <Menu.Button className="flex lg:w-full lg:justify-center p-3  items-center rounded-full  bg-[#2F2F33] lg:px-6 lg:py-5   py-1 text-sm lg:font-bold text-white shadow-sm  ">
                    BUY$FLAME TOKEN
                    <ChevronDownIcon
                      className="lg:-mr-1 flex lg:justify-end lg:items-end lg:ml-2 lg:h-5 lg:w-5 h-8 w-8"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 px-10  rounded-lg origin-top-right  bg-[#2F2F33] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "text-secondary" : "text-white",
                              "block  py-2 flex   space-x-2 items-center text-sm"
                            )}
                          >
                            <img
                              className="w-[24%]  "
                              src="herocardpix1.png"
                              alt=""
                            ></img>
                            <h1 className="">KUCOIN</h1>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? " text-secondary" : "text-white",
                              "block   space-x-2 py-2 flex justify-center items-center text-sm"
                            )}
                          >
                            <img
                              className="w-[24%]  "
                              src="herocardpix2.png"
                              alt=""
                            ></img>
                            <h1 className="">QUICKSWAP</h1>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className=" lg:w-[33%] p-2 text-black lg:p-4 lg:ml-4 rounded-full flex justify-center items-center lg:font-bold bg-white">
              <h1 className="hover:text-secondary text-center  text-sm">LOOK $FLAME TOKENS</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  text-white">
          <div className="p-6">
            <h1 className="text-white  font-semibold lg:mb-4 mb-2 lg:text-4xl text-2xl">
              Initial Metaverse Offering
            </h1>
            <p className="text-white  lg:text-lg   ">
              Introducing the IMO. Incubated projects with Metaverse
              integrations and solutions. Powered by communities from around the
              world. Own The Future.
            </p>
          </div>

          {/* 2 */}
          <div className="p-6">
            <h1 className="text-white  font-semibold mb-4 lg:text-4xl text-2xl">
              Amplified through Culture
            </h1>
            <p className="text-white  lg:text-lg">
              Our Celebrity, Influencer, and Industry Partners - providing
              unparalleled reach and social backing to FireStarter Projects.
            </p>
          </div>

          {/* 3 */}
          <div className="p-6">
            <h1 className="text-white  font-semibold mb-4 lg:text-4xl text-2xl">
              Community over Everything
            </h1>
            <p className="text-white  lg:text-lg">
              We don’t just launch tokens, we launch communities. Giving early
              adopters the first chance at participation, governance, and
              access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivesection;
