import React, { useEffect, useState } from "react";
import FoodData from "../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories,'ctegory');
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6 "> 
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
     
        {categories.map((category, index) => {
          return (
            <div className={` border-b-[2px] ${selectedCategory === category ? "border-b-[#EA7C69] text-white":" border-b-[#fff0]"} categoryFilter pb-3 `} key={index}>
              <button
                onClick={() => dispatch(setCategory(category))}
                className={`px-3 py-2  font-bold rounded-lg hover:border-b-[#EA7C69] hover:text-[#EA7C69] text-[#fff] ${selectedCategory === category && "text-[#EA7C69]"}`}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
      <hr className="mt-[-22.23px]  text-[#393C49]" />
    </div>
  );
};

export default CategoryMenu;
