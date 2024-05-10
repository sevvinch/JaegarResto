import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
} from "../redux/slices/CartSlice";

const FoodItem = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
        }}
        className="absolute right-10 text-gray-600 cursor-pointer "
      />
      <img src={img} alt={name} className="w-[50px] h-[50px] " />
      <div className="leading-5 ">
        <h2 className="text-white text-[16px] font-normal tracking-[0%] leading-[130%] mb-[4px] ">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-[#ABBBC2] font-bold mb-[14px]">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <span className="py-[13px] px-[16px] bg-[#2D303E] border border-[#2D303E] rounded-[8px] text-white text-[16px] font-normal tracking-[0%] leading-[140%] ">{qty}</span>
          </div>
        </div>
        <input
        type="text"
        placeholder="Please, just little bit spicy only."
        className="mt-2 p-[14px] pr-[50px]  border border-transparent rounded-[8px]  ml-[-50px]  text-sm  bg-[#2D303E] outline-none w-[300px] text-[#fff] "
      />
      </div>
    </div>
  );
};

export default FoodItem;
