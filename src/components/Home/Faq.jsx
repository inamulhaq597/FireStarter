import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Faq() {
  return (
    <div className="w-full  lg:pt-16 mb-6 lg:mb-0">
      <div className="w-full flex justify-center  text-5xl mb-16 font-bold text-white">
        <h1>FAQ</h1>
      </div>
      <div className="mx-auto  lg:w-4/6 rounded-3xl  p-2">
        <div className="bg-[#22262D] rounded-3xl  mb-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full p-4  items-center justify-between rounded-2xl bg-[#22262D] px-4 py-4 text-left text-lg  text-white ">
                  <span className={`${open? "text-[#BD86F4]" : ""}`}>How can projects use FireStarter</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-145 transform text-[#BD86F4]" : "rotate-180 "
                    } h-10 w-10 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4   p-4   text-md text-white">
                  The FireStarter platform allows early-stage crypto projects to
                  raise funds through our IMO launch process. In utilizing the
                  FireStarter Networks, projects are able to reach massive
                  audiences and fund at an unmatched pace. We tokenize culture.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* 2 */}
        <div className="bg-[#22262D] rounded-3xl  mb-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full p-4  items-center justify-between rounded-2xl bg-[#22262D] px-4 py-4 text-left text-lg text-white ">
                  <span className={`${open? "text-[#BD86F4]" : ""}`}>What is Token Burn ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-145 transform text-[#BD86F4]" : "rotate-180 "
                    } h-10 w-10 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4   p-4   text-md text-white">
                  A token burn is done by permanently removing some tokens from
                  circulation, thus increasing scarcity. Unlocking or unstacking
                  before the 30 day mark will result in penalties. A % of
                  penalties if burned to increase scarcity
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* 3 */}
        <div className="bg-[#22262D] rounded-3xl  mb-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full p-4  items-center justify-between rounded-2xl bg-[#22262D] px-4 py-4 text-left text-lg text-white ">
                  <span className={`${open? "text-[#BD86F4]" : ""}`}>What is the $FLAME Token Address ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-145 transform text-[#BD86F4]" : "rotate-180 "
                    } h-10 w-10 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4   p-4   text-md text-white">
                  The $FLAME Token Address:
                  0x22e3f02f86bc8ea0d73718a2ae8851854e
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* 4 */}

        <div className=" rounded-3xl bg-[#22262D]  mb-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full p-4  items-center justify-between rounded-2xl bg-[#22262D] px-4 py-4 text-left  text-lg text-white ">
                  <span className={`${open? "text-[#BD86F4]" : ""}`}>How do I look $FLAME ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-145 transform text-[#BD86F4]" : "rotate-180 "
                    } h-10 w-10 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4   p-4   text-md text-white">
                  Step 1. Go to firestarter.fi <br></br>Step 2.Connect your Wallet <br></br>Step
                   3. Go to Accounts Page <br></br>Step 4. Scroll Down to Lock Section
                  <br></br>Step 5. Determine amount of $FLAME to be locked and click
                  Approve to make sure enough funds are available to
                  participate. <br></br>Step 6. Once approved, you can then lock your
                  $FLAME with the Lock Button and establish your Tier.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>


      <div className="w-full flex justify-center">
      
        <button className="text-black hover:text-secondary  font-bold  py-4 px-4  rounded-full  bg-white">SEE ALL QUESTIONS</button>
      </div>
    </div>
  );

  
}
