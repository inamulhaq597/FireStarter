import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

const ProjectMainSection = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="container mx-auto  pt-16  pb-20 text-white">
      <div className="flex justify-center ">
        <div className="lg:w-5/6  ">
          <div className="lg:w-full flex   justify-between">
            <div>
              <h1 className="text-white lg:text-6xl   text-2xl lg:font-bold">Projects</h1>
            </div>
            <div className="flex items-center  lg:space-x-4  space-x-2">
              <h1 className="text-gray-500  text-xl ml-4 ">Network</h1>
              <div>
              
                <Menu as="div" className="relative inline-block text-left">
                  <div className=" lg:w-[100%]  ">
                    <Menu.Button className="flex lg:w-full lg:justify-center p-3  items-center rounded-full  bg-[#2F2F33] lg:px-6 lg:py-4   py-1 text-sm lg:font-bold text-white shadow-sm  ">
                      ALL NETWORKS
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
                                "  py-2 flex   space-x-2 items-center text-sm"
                              )}
                            >
                              <img
                                className="   w-[24%]  "
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
                                "  space-x-2 py-2 flex justify-center items-center text-sm"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainSection;
