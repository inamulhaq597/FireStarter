import React from "react";
import Apply from "../components/Home/Apply";
import CustomSlider from "../components/Home/CustomSlider";
import Faq from "../components/Home/Faq";
import Fivesection from "../components/Home/Fivesection";
import Herocard from "../components/Home/Herocard";
import Herosection from "../components/Home/Herosection";
import Imo from "../components/Home/Imo";
import Incobaters from "../components/Home/Incobaters";
import Partners from "../components/Home/Partners";
import Power from "../components/Home/Power";
import Securty from "../components/Home/Securty";
const Home = () => {
  return (
    <>
      <Herosection></Herosection>
      <Power></Power>
      <Herocard></Herocard>
      <CustomSlider></CustomSlider>
      <Fivesection></Fivesection>
      <Incobaters></Incobaters>
      <Apply></Apply>
      <Imo></Imo>
      <Partners></Partners>
      <Faq></Faq>
      <Securty></Securty>
    </>
  );
};

export default Home;
