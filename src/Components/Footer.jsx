import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Footer = () => {

  return (
    <>
    
    <div className="z-0 flex justify-around rounded-[28px] bg-gradient-to-br from-[#0F2323] via-[#0F2323] to-transparent bg-clip-padding-box bg-origin-border p-[4%] shadow-inner inset-x-2  mix-blend-normal border border-[#0F2323] opacity-100 ">
     <div className="z-40  hover:bg-gradient-to-br from-[#5d6b6b] via-[#1e2929] to-transparent bg-clip-padding-box  shadow-inner inset-x-2 inset-y-1 mix-blend-normal opacity-100">
       <Link to="/dashboard">
        <IoIosHome className="text-green-600 z-50" />
      </Link></div>
      <div className="z-40  hover:bg-gradient-to-br from-[#5d6b6b] via-[#1e2929] to-transparent bg-clip-padding-box  shadow-inner inset-x-2 inset-y-1 mix-blend-normal opacity-100"> 

      <Link to="/employee">
        <FaUser className="text-green-600"/>
      </Link>
      </div>
    </div></>
  );
};

export default Footer;
