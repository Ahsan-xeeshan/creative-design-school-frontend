/* eslint-disable no-undef */
import axios from "axios";

import { useEffect, useState } from "react";
import { FaList, FaUsers } from "react-icons/fa6";
import { GrCheckboxSelected } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import {
  MdOutlineAddToPhotos,
  MdOutlineAlignHorizontalCenter,
  MdOutlineManageHistory,
  MdOutlinePayment,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { loggedOutUser } from "../../slices/logoutSlice";
import Preloader from "./Preloader";

const Sidebar = () => {
  const data = useSelector((state) => state.userInfo.value);
  const [isPending, setIsPending] = useState(false);

  const handleLinkClick = () => {
    // Set isPending to true before transitioning
    setIsPending(true);
    // Start a transition to prioritize rendering updates
    startTransition(() => {
      setIsPending(false); // Reset isPending after transition
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after the operation is complete
    }, 1000); // Simulating a 2-second loading delay
  }, []);

  const dispatch = useDispatch();

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
        location.href = "/login";
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
    <div className="flex">
      <div
        className="bg-[#014BCC] fixed w-1/6 h-screen hidden lg:block"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium border-0 border-b-[3px] border-white pb-8 my-5">
            <li className="border-2 border-white rounded-xl mb-10">
              <div className="flex items-center p-2 rounded-lg text-white group">
                <span className="ms-3 text-4xl text-center font-bold w-64 capitalize">
                  {data !== null && data.role} Dashboard
                </span>
              </div>
            </li>
            <li>
              {data !== null && data.role == "admin" && (
                <Link
                  to="manage-classes"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                  onClick={handleLinkClick}
                >
                  <MdOutlineManageHistory className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    Manage Class
                  </span>
                </Link>
              )}
            </li>
            <li>
              {data !== null && data.role == "admin" && (
                <Link
                  to="all-users"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <FaUsers className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    All Users
                  </span>
                </Link>
              )}
            </li>
            <li>
              {data !== null && data.role == "instructor" && (
                <Link
                  to="my-classes"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <FaList className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    My Classes
                  </span>
                </Link>
              )}
            </li>
            <li>
              {data !== null && data.role == "instructor" && (
                <Link
                  to="add-class"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <MdOutlineAddToPhotos className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    Add a Class
                  </span>
                </Link>
              )}
            </li>
            <li>
              {data !== null && data.role == "student" && (
                <Link
                  to="selected-classes"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <GrCheckboxSelected className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    Selected Classes
                  </span>
                </Link>
              )}
            </li>

            <li>
              {data !== null && data.role == "student" && (
                <Link
                  to="enrolled-classes"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <MdOutlineAlignHorizontalCenter className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    Enrolled Classes
                  </span>
                </Link>
              )}
            </li>
            <li>
              {data !== null && data.role == "student" && (
                <Link
                  to="payment-history"
                  onClick={handleLinkClick}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
                >
                  <MdOutlinePayment className="text-2xl font-bold" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                    Payment History
                  </span>
                </Link>
              )}
            </li>
          </ul>
          <ul className="space-y-2 font-medium border-0 mt-5 pb-8 ml-5">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
              >
                <IoHome className="text-2xl font-bold" />
                <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-classes"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8]"
              >
                <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                  All Classes
                </span>
              </Link>
            </li>
            <li>
              <button
                className="flex w-full items-center p-2 text-white rounded-lg hover:bg-[#3045697e] group focus:bg-[#570DF8] text-2xl"
                onClick={handleLogout}
              >
                <span className="pl-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        {loading ? (
          // Render your preloader component here while data is loading
          <Preloader />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
