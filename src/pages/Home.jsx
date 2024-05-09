import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/FoodCategory";
import FoodItems from "../components/FoodItems";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </div>
  );
};

export default Home;
