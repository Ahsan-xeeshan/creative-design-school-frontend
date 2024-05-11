/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { Transition } from "@headlessui/react";
import axios from "axios";

import { Button } from "flowbite-react";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { RxHome } from "react-icons/rx";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { loggedOutUser } from "../../slices/logoutSlice";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/", icon: <RxHome /> },
    {
      name: "All-classes",
      path: "/all-classes",
      htmlElement: (
        <span className="bg-yellow-500 uppercase py-1 px-2 text-[9px] rounded-lg">
          New
        </span>
      ),
      icon: <BsInfoCircle />,
    },

    {
      name: "All-instructor",
      path: "/all-instructor",
      icon: <FaChalkboardUser />,
    },
    data !== null && data.role === "student"
      ? {
          name: "Selected Classes ",
          htmlElement: (
            <span className="bg-black text-white uppercase py-1 px-2 text-[9px] rounded-lg">
              2+
            </span>
          ),
          path: "/dashboard/selected-classes",
        }
      : {
          name: "",
        },
    data !== null
      ? {
          name: "Dashboard",
          htmlElement: (
            <span className="w-4 h-4 rounded-full bg-[#3ABEF7]"></span>
          ),
          path: "/dashboard",
        }
      : {
          name: "",
        },
  ];

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to log out. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          `https://creative-school-design.onrender.com/api/v1/authentication/logout`
        );
        localStorage.clear();
        dispatch(loggedOutUser());
        location.reload(true);
        navigate("/");
        Swal.fire(
          "Logged Out!",
          "You have been successfully logged out.",
          "success"
        );
      }
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire("Error!", "Failed to log out.", "error");
    }
  };

  return (
    <nav className="bg-white lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F1F5F9]"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className=" flex items-center justify-between gap-5 mr-2">
              <div>
                <FaRegMoon className="text-2xl" />
              </div>
              <div>
                {data !== null && (
                  <img
                    src={data.image}
                    alt=""
                    className="w-[45px] h-[35px] rounded-full"
                  />
                )}
              </div>
              <div>
                {data === null ? (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-base uppercase text-[#4406CB]"
                  >
                    Login <CiLogin className="text-xl font-bold" />
                  </Link>
                ) : (
                  <Button onClick={handleLogout} className="text-[#4406CB]">
                    <VscSignOut className="text-3xl" />
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className=" flex mx-auto items-center justify-center lg:items-stretch lg:justify-start rounded-lg bg-[#F1F5F9]">
            {/* Navigation links */}
            <div className="hidden lg:block rounded-lg">
              <div className="flex last:rounded-e-lg">
                {menuItems.map((item) => (
                  <Link
                    to={item.path}
                    className={`bg-transparent ${
                      item.name === "" ? "hidden" : "block"
                    } last:rounded-e-lg first:rounded-s-lg hover:bg-[#DCDDDF] hover:rounded-e-lg px-3 py-2  text-[13px] font-medium flex items-center gap-2`}
                  >
                    {item.icon} {item.name} {item.htmlElement}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute right-0 lg:flex items-center justify-between gap-5 mr-10 ">
        <div>
          <FaRegMoon className="text-2xl" />
        </div>
        <div>
          {data !== null && (
            <img
              src={data.image}
              alt=""
              className="w-[45px] h-[35px] rounded-full"
            />
          )}
        </div>
        <div>
          {data === null ? (
            <Link
              to="/login"
              className="flex items-center gap-2 px-1 py-3 rounded-lg font-semibold transition-all duration-300 text-base uppercase text-[#4406CB] hover:bg-[#4406CB] hover:text-white"
            >
              Login <CiLogin className="text-xl font-bold" />
            </Link>
          ) : (
            <Button onClick={handleLogout} className="text-[#4406CB]">
              <VscSignOut className="text-3xl" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="lg:hidden absolute bg-white mt-4 ml-4 rounded-xl z-50"
            ref={ref}
          >
            <div className="mx-3 my-2 px-3 py-2 pb-3 space-y-1 bg-[#F1F5F9] rounded-xl">
              {menuItems.map((item) => (
                <Link
                  to={item.path}
                  className=" hover:bg-gray-700 hover:text-white flex items-center gap-2  px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.icon} {item.name} {item.htmlElement}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
