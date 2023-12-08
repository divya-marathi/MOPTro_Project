import React, { useState, useRef } from "react";
import Group3 from "../../Assets/Images/Group 3.png";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import Mobile from "../../Components/Mobile";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail || !password) {
      setError("Please enter a valid email and password.");
      return;
    }
    navigate("/dashboard");
    console.log("Logging in...");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  $(passwordRef.current).on("input", function () {
    const passwordValue = $(this).val();
    if (passwordValue.length < 6) {
      setError("Password must be at least 6 characters.");
    } else {
      setError("");
    }
  });

  return (
    <>
      <div className=" m-auto rounded-[28px]  w-[394px] bg-teal-600 h-[805px]">
        <div className=" m-auto rounded-[28px]  w-[390px] bg-black  h-[800px]  flex justify-center items-center">
          <div className="absolute w-[100%] flex flex-col  text-center justify-center items-center rounded-md ">
            <div className="">
              <img
                src={Group3}
                alt="Group 3"
                className="object-cover mix-blend-normal opacity-100"
              />
              <h1 className="text-[#36A546CC] opacity-50 text-md mt-4 mb-6">
                #We are Electric
              </h1>
            </div>
            <div className="items-center flex flex-col w-[330px]">
              <input
                className="rounded-full bg-opacity-60 bg-gray-900 shadow-inner mix-blend-normal  text-gray-200  opacity-100 text-sm pl-4 mb-5 p-2 w-[80%]"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                ref={emailRef}
                style={{
                  boxShadow:
                    "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
                }}
              />
              <input
                className="rounded-full bg-opacity-60 bg-gray-900 shadow-inner text-gray-200 mix-blend-normal opacity-100 text-sm mb-8 p-2 pl-4 w-[80%]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                style={{
                  boxShadow:
                    "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
                }}
              />

              <button
                className="bg-gradient-to-b from-green-500 via-green-700 to-black border border-[#284207fd] text-white font-semibold mix-blend-normal opacity-100 rounded-full py-2 px-12 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 hover:border-opacity-50  mt-4 w-[80%]"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
            {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
            <h2 className="text-[#36A546CC] text-sm sm:text-md mt-4 mb-6">
              Forgot password?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
