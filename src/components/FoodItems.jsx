import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/Data.js";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return (
    <>
      {/* <div className="">
        <h3 className="">Choose dishes</h3>
        <div className="">Dine in</div>
      </div> */}
      <div className="flex flex-wrap gap-10 justify-center overflow-y-scroll h-[80vh] cartSroll lg:justify-start mx-6 pt-[70px]">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            img={food.img}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
