import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageBase64 } from "../utility/Imagebase64";
import signuppp from "../assets/profile.gif";

function Signup(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [data, setData] = useState({
    firstName: " ",
    DateofBirth: " ",
    email: " ",
    password: "",
    confirmpassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleProfileImage = async (e) => {
    const data = await ImageBase64(e.target.files[0]);
    console.log("Image in text format:", data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, DateofBirth, email, password, confirmpassword } = data;
    if (firstName &&  DateofBirth && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchdata = await fetch(
          `${process.env.REACT_APP_SERVICE_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataa = await fetchdata.json();
        console.log(dataa);
      } else {
        alert("password did not match");
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h1 className="ak text-center text-white text-2xl font-bold">SIGN UP</h1>

      <div className="abhi shadow-lg rounded max-w-sm m-auto p-3 mt-3">

      <div className="w-full max-w-sm bg-white shadow-lg rounded m-auto flex items-center flex-col p-4 mt-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
          <img
            src={data.image ? data.image : signuppp}
            alt="User Signup"
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              className="hidden"
              onChange={handleProfileImage}
              accept="image/*"
            />
          </label>
        </div>

        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400 shadow-lg"
            value={data.firstName}
            onChange={handleOnchange}
          />
          <label htmlFor="lastName">Date Of Birth</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded shadow focus-within:outline-blue-400"
            value={data.DateofBirth}
            onChange={handleOnchange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded shadow-lg focus-within:outline-blue-400"
            value={data.email}
            onChange={handleOnchange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 mb-2 py-1 bg-slate-200 rounded outline-none shadow focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="h-10 w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnchange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex mb-2 px-2 py-1 bg-slate-200 rounded outline-none shadow-lg focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="h-10 w-full bg-slate-200 border-none outline-none"
              value={data.confirmpassword}
              onChange={handleOnchange}
            />
            <span className="flex text-xl" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>
          <button
            type="submit"
            className="max-w-[120px] m-auto w-full bg-slate-400 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded mt-3"
          >
            Signup
          </button>
        </form>
        <p className="text-left mt-3 mb-3">
          Already have accound?{" "}
          <Link className="text-cyan-500" to="/login">
            Login
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Signup;
