import React from "react";
import Nav from "./Home/Nav";
import Advertisement from "./Home/Advertisement";
import DailyPromotion from "./Home/DailyPromotion";
import NewProducts from "./Home/NewProducts";

const Home = () => {
  return (
    <>
      <Nav />
      <Advertisement />
      <div className="flex flex-col lg:flex-row w-[80vw] mt-[10rem] ml-auto mr-auto mb-[10rem] justify-between">
        <DailyPromotion />
        <NewProducts />
      </div>
    </>
  );
};

export default Home;
