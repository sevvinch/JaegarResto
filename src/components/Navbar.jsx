import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-5 mx-6  mb-5">
      <div>
        <h1 className="text-[28px] font-semibold text-white leading-[140%] mb-[10px]">Jaegar Resto</h1>
        <h3 className="text-[16px] font-normal text-[#E0E6E9] leading-[140%] mb-[10px]">
          Tuesday, 2 Feb 2021
        </h3>
      </div>
      <div className="flex items-center border rounded-xl h-[60px] px-[20px] gap-3 w-[250px]">
        <FaSearch className="text-[#fff]"/>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search for food, coffe, etc.."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="   text-sm  bg-transparent outline-none w-full text-[#fff]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
