/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import "dotenv/config";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../Components/Layouts/Container";
import login from "../assets/login.jpg";
import { loggedInUser } from "../slices/userSlices";
const LogIn = () => {
  const api = process.env.REACT_APP_BASE_URL;
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const data = await axios.post(`${api}/authentication/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    console.log(data);
    if (data.data.success) {
      setSuccessMsg(data.data.success);
      Swal.fire({
        title: "WELCOME",
        text: "Login Successfull",
        icon: "success",
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        navigate("/");
        dispatch(loggedInUser(data.data));
        localStorage.setItem("userInfo", JSON.stringify(data.data));
      }, 2000);
      setErrorMsg("");
    } else {
      setErrorMsg(data.data.error);
    }
  };

  return (
    <div className="bg-white py-24">
      <Container>
        <div className="block lg:flex mx-auto">
          <div className="lg:w-1/2 mr-12 flex items-center">
            <img src={login} alt="" />
          </div>
          <div className="relative flex flex-col rounded-lg flex-shrink-0 w-full  max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="flex flex-1 flex-col p-8 gap-2 text-[#570df8]">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  className=" bg-sky-50 mb-4 w-full border-none text-[#570df8]"
                />
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  className=" bg-sky-50 input-bordered mb-4 w-full border-none text-[#570df8] "
                />
                <div className="flex flex-col mt-6">
                  <input
                    type="button"
                    className="bg-[#570df8] hover:bg-[#613cb3] transition-all duration-300 text-white inline-flex flex-shrink-0 flex-wrap items-center justify-center select-none text-center py-2 cursor-pointer uppercase font-semibold rounded-lg"
                    value="Login"
                    onClick={handleLogin}
                  />
                </div>
                <div
                  className="text-center flex items-center justify-center my-4 relative whitespace-nowrap before:absolute before:content-[''] before:block before:w-[120px] before:h-[1px] before:bg-[#1f29371a] before:left-1 before:top-[50%]
                after:absolute after:content-[''] after:block after:w-[120px] after:h-[1px] after:bg-[#1f29371a] after:right-1 after:top-[50%] flex-row"
                >
                  OR
                </div>
                <div className="mt-4 flex gap-x-2">
                  <a
                    href="#"
                    type="button"
                    className="flex w-full items-center justify-center rounded-md border-none p-2 hover:bg-orange-300 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1"
                  >
                    <FaGoogle className="text-xl" />
                  </a>
                </div>
              </form>
              <p className="text-2xl text-red-600"></p>
              <p className="text-2xl text-red-600"></p>
              <p className="my-4 font-semibold text-center">
                You are New -
                <Link to="/signup" className="text-orange-600 font-bold">
                  Sign Up
                </Link>
              </p>
              <p className="font-semibold underline text-[#f000b8] text-center">
                <Link to="/"> Home page</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LogIn;
