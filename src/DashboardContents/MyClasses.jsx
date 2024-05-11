/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../Components/Layouts/Container";
const MyClasses = () => {
  const data = useSelector((state) => state.userInfo.value);
  const instructorid = data.id;
  const [myClassData, setMyClassData] = useState([]);

  useEffect(() => {
    const myClassDetails = async () => {
      const data = await axios.get(
        `https://creative-school-design.onrender.com/api/v1/classes/myclasses`,
        {
          params: {
            instructorid: instructorid,
          },
        }
      );
      setMyClassData(data.data);
    };
    myClassDetails();
  }, [data.id]);

  const handleDelete = async (id) => {
    // Display SweetAlert confirmation dialog
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    // If user confirms deletion
    if (confirmed.isConfirmed) {
      try {
        // Send delete request
        const response = await axios.post(
          `https://creative-school-design.onrender.com/api/v1/classes/deleteclass/`,
          {
            id,
          }
        );

        // Handle success response
        if (response.status === 200) {
          // Display success message
          await Swal.fire(
            "Deleted!",
            "Your class has been deleted.",
            "success"
          );
          // Optionally, you can redirect or refresh the page after deletion
        } else {
          // Display error message if deletion fails
          await Swal.fire(
            "Error!",
            "Oops!, Failed to delete class. Please try again later.",
            "error"
          );
        }
      } catch (error) {
        // Display error message if request fails
        await Swal.fire(
          "Error!",
          "Failed to delete class. Please try again later.",
          "error"
        );
      }
    } else {
      // If user cancels deletion
      await Swal.fire("Cancelled", "Your class is safe :)", "info");
    }
  };

  return (
    <div>
      <Container>
        <div>
          <h1 className="mb-12 mt-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900  text-center md:text-5xl lg:text-6xl ">
            My Class{" "}
          </h1>
        </div>
        <div className="flex flex-wrap">
          {myClassData.map((item) => (
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-2/4 p-4">
              <div className="c-card block  shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-white ">
                <div className="relative pb-56 lg:pb-96 overflow-hidden">
                  <img
                    className="absolute inset-0 w-full transition-transform duration-300 ease-in-out "
                    src={item.image}
                    alt="jakey chaine"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold  tracking-wide text-xs">
                    Category -{" "}
                    <span className="uppercase">{item.category}</span>
                  </span>
                  <h2 className="my-2 text-2xl font-bold">{item.classname}</h2>
                  <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">Dollar</span>&nbsp;
                    <span className="font-bold text-xl">{item.price}</span>
                    &nbsp;
                    <span className="text-sm font-semibold">$</span>
                  </div>
                </div>
                <div className="p-4 border-t border-b text-xl text-gray-700">
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                    <span className="font-bold pr-1">Seat : </span>{" "}
                    {item.quantity}
                  </span>
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                    <span className="font-bold pr-1">Enrolled : </span> 2
                  </span>
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                    <span className="font-bold pr-1"> Instructor Name : </span>{" "}
                    {item.instructorname}
                  </span>
                  <span className="flex items-center">
                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                    <span className="font-bold pr-1">Email : </span>
                    {item.email}
                  </span>
                </div>
                <div className="p-4 bg-white flex h-16 border-t items-center justify-between">
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      item.status === "accept"
                        ? "bg-green"
                        : item.status === "reject"
                        ? "bg-red"
                        : "bg-yellow"
                    } `}
                  >
                    Status-
                    <span className="uppercase font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex gap-x-2">
                    <Link
                      to="/dashboard/update-class"
                      state={{ from: item }}
                      className="p-3  font-bold rounded-xl bg-pink-400 text-white transition-all duration-300 hover:bg-pink-500 uppercase           
              "
                    >
                      Update
                    </Link>
                    <button
                      className="p-3  font-bold rounded-xl bg-red-400 text-white transition-all duration-300 hover:bg-red-500            
              "
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {item.feedback && (
                  <div className="p-4 bg-[#E9D5FF]  h-16 flex items-center gap-3">
                    <span className="text-xl font-bold">Admin FeedBack:</span>
                    <span className="text-xl">{item.feedback}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyClasses;
