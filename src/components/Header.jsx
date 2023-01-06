
import Navbarbtn from "./Navbarbtn";
import { Link, NavLink } from "react-router-dom";


const Header = () => {


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <section className={"  flex   lg:flex-row flex-col  p-3 w-full "}>
      <div className="  lg:w-1/3 pb-5 lg:pb-0 flex justify-center lg:justify-start   h-auto ">
        <div className="  ">
          <Link className="w-full " to={"/"}>
            <div className="   ">
              {
                <img
                  className="lg:w-[320px] w-[280px] "
                  src="/logo.fcbc44c0.svg"
                  alt=""
                />
              }
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`lg:w-full  flex  space-x-4 lg:space-x-5  items-center  lg:justify-end justify-center mb-6 lg:mb-0 '
        
        } `}
      >
        <div>
          <NavLink
            to={"/leaderboard"}
            className={({ isActive }) =>
              classNames(
                "   lg:text-base   text-sm lg:font-medium py-2 hover:text-secondary",
                isActive ? "text-white border-b-2 border-[#C58BFF]" : "text-white"
              )
            }
          >
            LEADERBOARD
          </NavLink>
        </div>
        <div className="text-center ">
          <NavLink
            to={"/metaverse-nft"}
            className={({ isActive }) =>
              classNames(
                "    lg:text-base   text-sm lg:font-medium py-2 hover:text-secondary",
                isActive ? "text-white border-b-2 border-[#C58BFF]" : "text-white"
              )
            }
          >
            METAVERSE NFT
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              classNames(
                "   lg:text-base   text-sm lg:font-medium py-2  hover:text-secondary",
                isActive ? "text-white border-b-2 border-[#C58BFF]" : "text-white"
              )
            }
          >
            PROJECTS
          </NavLink>
        </div>
        <div className="hidden lg:flex   z-50 ">
          
          <Navbarbtn
            text={"Account"}
            dropdown={[
              { name: "LOCKUP", path: "" },
              { name: "LOCKUP 2.0", path: "" },
              { name: "STAKING", path: "" },
              { name: "LINKING WALLETS", path: "" },
              { name: "MY PORTFOLIO", path: "" },
            ]}
          />
        </div>
        <div className="hidden lg:block ">
        <div className="   border  border-stone-500   text-white w-[230px] flex justify-start items-center text-xl  rounded-full bg-[#393838] ">
          <dropdown className="bg-[#2F2F33] flex rounded-l-full p-2">
            <div>
              <img className="w-[40px]" alt="" src="eth.png"></img>
            </div>

            <img className="ml-2" alt="" src="chevron-down.svg"></img>


            
          </dropdown>

          <h1 className="ml-2 hover:text-secondary">0xe174bF3F9 </h1>
        </div>
        </div>
       
        
      </div>
    </section>
  );
};

export default Header;
