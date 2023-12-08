import React, { useEffect, useState } from "react";
import rightuser from "../../Assets/Images/Group 46@2x.png";
import cart from "../../Assets/Images/moptro logo-1@2x.png";
import Footer from "../../Components/Footer";
import { CiSearch } from "react-icons/ci";

const List = [
  {
    "EMP ID": 1,
    Name: "Argun",
    DOB: "16-11-2000",
    Role: "Software Engineer",
  },
  {
    "EMP ID": 2,
    Name: "Mahesh",
    DOB: "15-01-2000",
    Role: "Web Developer",
  },
];

function Card({ ID, Name, DOB, Role }) {
  return (
    <div className="mx-7 relative mt-5 p-3 rounded-[17px] text-sm space-y-5 bg-slate-800">
      <p className="flex gap-x-8">
        <span className="text-gray-300"> EMP ID </span>
        <span className="text-white"> : {ID}</span>
      </p>
      <p className="flex gap-x-10">
        {" "}
        <span className="text-gray-300">Name</span>{" "}
        <span className="text-white"> : {Name}</span>
      </p>
      <p className="flex gap-x-12">
        {" "}
        <span className="text-gray-300">DOB</span>{" "}
        <span className="text-orange-800">: {DOB}</span>
      </p>
      <p className="flex gap-x-12">
        {" "}
        <span className="text-gray-300">Role</span>{" "}
        <span className="text-green-600">: {Role}</span>
      </p>
      <span className="absolute text-slate-400 top-3 right-5 text-sm border border-black items-center w-[25px] text-center rounded-full h-[25px] ">
        {ID}
      </span>
    </div>
  );
}

function Header() {
  return (
    <div>
      <div className="pr-3 pt-3  ">
        <img
          className="float-right user w-[40px]"
          src={rightuser}
          alt=""
          srcset=""
        />
      </div>

      <div className="mt-10 relative ">
        <img className=" m-auto w-[50px] user " src={cart} alt="" srcset="" />
        <span className="absolute text-green-600 top-[-16px] bg-slate-600  rounded-full text-center w-[20px] h-[20px] left-[55%]">
          {" "}
          4{" "}
        </span>
      </div>
    </div>
  );
}

const Employee = () => {
  const [filteredList, setFiltredList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setFiltredList(List);
  }, []);

  const SearchHandler = (text) => {
    if (text == "") {
      setFiltredList(List);
    } else {
      const newData = List.filter((item) => {
        let SmallName = item.Name.toLowerCase();
        let SearchingName = text.toLowerCase();
        if (SmallName == SearchingName) {
          return item;
        }
      });
      setFiltredList(newData);
    }
  };

  return (
    <>
      <div className=" m-auto rounded-[28px]  w-[394px] bg-teal-600 h-[805px]">
        <div className=" m-auto rounded-[28px]  w-[390px] bg-black  h-[800px]  flex justify-center">
          <div className="flex flex-col w-full justify-between">
            <Header />
            <div className=" text-center p-2  mx-4 ">
              <div className="relative">
                <div className="absolute text-white right-8 top-3">
                  <CiSearch />
                </div>
                <input
                  onChange={(e) => SearchHandler(e.target.value)}
                  type="text"
                  className=" p-2 w-full bg-zinc-900 rounded-full text-white placeholder:text-center placeholder:text-white placeholder:text-sm"
                  placeholder="Search with name"
                />
              </div>
            </div>
            <div className="">
              {" "}
              {filteredList.map((item) => (
                <Card
                  ID={item["EMP ID"]}
                  Role={item.Role}
                  Name={item.Name}
                  DOB={item.DOB}
                />
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
