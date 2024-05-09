import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "./../assets/logo.svg";

import { GoHome } from "react-icons/go";
import { LuBadgePercent, LuSettings } from "react-icons/lu";
import { VscPieChart } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar w-[120px] bg-[#1F1D2B]">
        <ul className="container mx-auto my-0 px-4">
            <li className="my-[15px] pb-[10px]">
                <NavLink className="">
                    <img src={Logo} alt="" className='py-[10px] w-[96px] h-[96px]' />
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] p-6 hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <GoHome className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] p-6 hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <LuBadgePercent className='w-[30px] h-[30px] ' />
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] p-6 hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <VscPieChart className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] p-6 hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <MdOutlineMail className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] p-6 hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <IoIosNotificationsOutline className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] p-6 text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white rounded-[8px] transition duration-300">
                <NavLink className="">
                    <LuSettings className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
            <li className="my-[15px] pl-[30px] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white rounded-[8px] py-9 transition duration-300">
                <NavLink className="">
                    <TbLogout className='w-[30px] h-[30px] '/>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
