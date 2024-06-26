/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../Components/Layouts/Container";
import OAuth from "../Components/Layouts/OAuth";
import register from "../assets/register.jpg";
const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleLinkClick = () => {
    // Set isPending to true before transitioning
    setIsPending(true);
    // Start a transition to prioritize rendering updates
    startTransition(() => {
      setIsPending(false); // Reset isPending after transition
    });
  };

  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    username: "",
    image: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleShowPassword = () => {
    setShowValues(!showValues);
  };
  const handleCheckbox = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    if (registrationData.password !== registrationData.confirmpassword) {
      setErrorMsg("Passwords do not match");
      return; // Exit the function early
    }
    const data = await axios.post(
      `https://creative-school-design.onrender.com/api/v1/authentication/registration`,
      {
        username: registrationData.username,
        image: registrationData.image,
        email: registrationData.email,
        password: registrationData.password,
        confirmpassword: registrationData.confirmpassword,
      }
    );
    console.log(data);
    if (data.data.success) {
      setSuccessMsg(data.data.success);
      setErrorMsg("");
      Swal.fire({
        title: "HURRAY!",
        text: "Registration Successful!",
        icon: "success",
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      console.log(data.data);
      setErrorMsg(data.data);
    }
  };
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="block lg:flex mx-auto">
          <div className="lg:w-1/2 mr-12 flex items-center">
            <img src={register} alt="" />
          </div>
          <div className="relative flex flex-col rounded-lg flex-shrink-0 w-full  max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="flex flex-1 flex-col p-8 gap-2 text-[#570df8]">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form>
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  name="username"
                  placeholder="name"
                  onChange={handleChange}
                  className=" bg-sky-50 mb-4 w-full border-none rounded-xl"
                />
                <label htmlFor="photourl">Photo</label>
                <input
                  required
                  type="text"
                  name="image"
                  placeholder="photo URL"
                  onChange={handleChange}
                  className=" bg-sky-50 mb-4 w-full border-none  rounded-xl"
                />
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  className=" bg-sky-50 mb-4 w-full border-none rounded-xl"
                />
                <label htmlFor="password">Password</label>
                <input
                  required
                  type={showValues ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  className=" bg-sky-50 input-bordered mb-4 w-full border-none rounded-xl"
                />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  required
                  type={showValues ? "text" : "password"}
                  name="confirmpassword"
                  placeholder="confirm password"
                  onChange={handleChange}
                  className=" bg-sky-50 input-bordered mb-4 w-full border-none rounded-xl"
                />

                <p className=" mt-4 mb-3 underline">
                  {" "}
                  <a onClick={handleShowPassword}>show password</a>{" "}
                </p>
                <label className="label">
                  <a href="#" className=" text-gray-400">
                    Forgot password?
                  </a>
                </label>
                <div className="flex flex-col border mt-3 rounded-lg p-2">
                  <label className="flex items-center justify-between px-4 py-2 cursor-pointer">
                    <span className="text-[#1f2937] text-sm">
                      Accept terms and conditions
                    </span>
                    <input
                      type="checkbox"
                      onClick={handleCheckbox}
                      className=" bg-sky-50 w-6 h-6 focus:ring-0 rounded-lg border-none checked:bg-[#f000b8] checked:border-[#f000b8] checked:color-white checked:focus:ring-0"
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-6">
                  {checked ? (
                    <input
                      type="button"
                      className="bg-[#570df8] hover:bg-[#613cb3] transition-all duration-300 text-white inline-flex flex-shrink-0 flex-wrap items-center justify-center select-none text-center py-2 cursor-pointer uppercase font-semibold rounded-lg"
                      onClick={handleSignUp}
                    />
                  ) : (
                    <input
                      type="button"
                      className="bg-[#bbbabd] disabled transition-all duration-300 text-white inline-flex flex-shrink-0 flex-wrap items-center justify-center select-none text-center py-2 cursor-pointer uppercase font-semibold rounded-lg"
                      value="sign up"
                    />
                  )}
                </div>
                <div
                  className="text-center flex items-center justify-center my-4 relative whitespace-nowrap before:absolute before:content-[''] before:block before:w-[120px] before:h-[1px] before:bg-[#1f29371a] before:left-1 before:top-[50%]
                after:absolute after:content-[''] after:block after:w-[120px] after:h-[1px] after:bg-[#1f29371a] after:right-1 after:top-[50%] flex-row"
                >
                  OR
                </div>
                <OAuth />
              </form>
              {errorMsg && (
                <p className="absolute left-32 font-bold w-[250px] bottom-[105px] text-sm text-red-600">
                  {errorMsg.error}
                </p>
              )}
              <p className="text-2xl text-red-600"></p>
              <p className="my-4 font-semibold text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="pl-1 text-orange-600 font-bold"
                  onClick={handleLinkClick}
                >
                  Log In
                </Link>
              </p>
              <p className="font-semibold underline text-[#f000b8] text-center">
                <Link to="/" onClick={handleLinkClick}>
                  {" "}
                  Home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
