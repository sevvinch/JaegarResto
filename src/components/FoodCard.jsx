import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[192px] h-[230px] bg-[#1F1D2B] p-[12px] flex flex-col rounded-[16px] gap-2 mb-[50px] mt-[30px] "    onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating,  img, qty: 1 })
            );
            handleToast(name);
          }}  >
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] mt-[-60px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-[14px] font-normal leading-[130%] tracking[0%] text-center px-[15px] text-[#FFFFFF] mb-[8px]">
        <h2 className="text-[14px] font-normal leading-[130%] tracking[0%] text-center px-[10px] text-[#FFFFFF] mb-[8px]">{name}</h2>
        <span className="text-[#FFFFFF]  text-[14px] font-normal leading-[130%] tracking[0%] text-center p-[15px] mb-[8px]">${price}</span>
      </div>
      <p className="text-sm font-normal text-center text-[#FFFFFF] mb-[14px]">{desc.slice(0, 30)}...</p>
    </div>
  );
};

export default FoodCard;
