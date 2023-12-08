import React from "react";
import rightuser from "../../Assets/Images/Group 46@2x.png";
import cart from "../../Assets/Images/moptro logo-1@2x.png";
import Footer from "../../Components/Footer";

const DashCard = () => {
  return (
    <>
        <div className=" m-auto rounded-[28px]  w-[394px] bg-teal-600 h-[805px]">
        <div className=" m-auto rounded-[28px]  w-[390px] bg-black  h-[800px]  flex justify-center">
          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col">
              <div className="pr-3 pt-3">
                <img
                  className="float-right w-[40px] "
                  src={rightuser}
                  alt=""
                  srcset=""
                />
              </div>

              <div className="mt-10 relative mb-10 ">
                <img className=" m-auto w-[65px]" src={cart} alt="" srcset="" />
                <span className="absolute text-green-600 top-[-16px] bg-slate-600  rounded-full text-center w-[20px] h-[20px] left-[55%]">
                  4
                </span>
              </div>

              <div className=" text-center bg-zinc-900 rounded-[15px] text-white  mt-10 mx-4 ">
                <p className=" bg-opacity-25 bg-teal-900 mb-4  rounded-full text-md text-md m-0 mix-blend-normal opacity-100 p-2">
                  Employee Productivity Dashboard{" "}
                </p>
                <div className="flex justify-around items-center mb-2 text-[12px] ">
                  <span> Productivity on Monday </span>{" "}
                  <span className="text-green-700"> 4%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[4%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100 "></div>
                <div className="flex justify-around mb-2    text-[12px] items-center">
                  <span> Productivity on Tueday </span>{" "}
                  <span className="text-green-700"> 92%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[44%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100  "></div>
                <div className="flex justify-around mb-2  text-[12px] items-center">
                  <span> Productivity on Wednesday </span>{" "}
                  <span className="text-green-700"> 122%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[55%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100 "></div>
                <div className="flex justify-around  mb-2   text-[12px] items-center">
                  <span> Productivity on Thursday </span>{" "}
                  <span className="text-green-700"> 93%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[55%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100 "></div>
                <div className="flex justify-around mb-2   text-[12px] items-center">
                  <span> Productivity on Friday </span>{" "}
                  <span className="text-green-700"> 89%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[55%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100 "></div>
                <div className="flex justify-around  mb-2   text-[12px] items-center">
                  <span> Productivity on Satureday </span>{" "}
                  <span className="text-green-700"> 98%</span>
                </div>
                <div className="prograss-baar ml-6 mb-4 rounded-full h-2  w-[55%] bg-green-600 bg-opacity-50 border border-green-600 p-0 m-0 mix-blend-normal opacity-100 "></div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
