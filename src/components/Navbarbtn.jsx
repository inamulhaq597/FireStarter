import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
export default function Navbarbtn({ text, dropdown, buttonClassName }) {
  const navigate = useNavigate();
  return (
    <div className="  ">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button
            className={
              " text-[black] flex items-center  rounded-full bg-[white] px-[15px] py-2  text-lg font-bold hover:text-secondary   " +
              buttonClassName
            }
          >
            {text}
            <ChevronDownIcon
              className="    h-6 w-full text-[black] hover:text-secondary"
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
          <Menu.Items className="absolute mt-3   rounded-2xl w-[205px] origin-top-right pb-3 pt-3  bg-gray shadow-lg ">
            <div className=" ">
              {dropdown &&
                dropdown.map((v) => (
                  <Menu.Item key={v.path}>
                    {({ active }) => (
                      <button
                        onClick={() => navigate(v.path)}
                        className={`${
                          active ? "  " : "text-white"
                        } group flex w-full items-center  font-bold p-3  py-2 hover:text-secondary hover:bg-[#5A5561] `}
                      >
                        {v.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
