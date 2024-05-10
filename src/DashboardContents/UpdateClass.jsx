/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state; // Provide a default value for from if location.state is null

  const data = useSelector((state) => state.userInfo.value);

  const instructorname = data.username;
  const email = data.email;
  const id = data.id;

  const [updatedClassname, setUpdatedClassname] = useState(from.classname);
  const [updatedImage, setUpdatedImage] = useState(from.image);
  const [updatedCategory, setUpdatedCategory] = useState(from.category);
  const [updatedPrice, setUpdatedPrice] = useState(from.price);
  const [updatedQuantity, setUpdatedQuantity] = useState(from.quantity);

  const handleUpdateClass = async () => {
    try {
      // Assuming data contains a success message or relevant data
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to update class details. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          `http://localhost:8080/api/v1/classes/updateclass/${from._id}`,
          {
            instructorname: instructorname,
            email: email,
            instructorid: id,
            image: updatedImage,
            classname: updatedClassname,
            price: updatedPrice,
            category: updatedCategory,
            quantity: updatedCategory,
          }
        );
        navigate("/dashboard/my-classes");
        console.log("class updated for user with id:", id);
        Swal.fire("Success!", "Class Updated Successfully.", "success");
      }
    } catch (error) {
      console.error("Error updating class for user with id:", id, error);
      Swal.fire("Error!", "Failed to update class.", "error");
    }
  };

  return (
    <div className="bg-white w-screen mt-16 py-8">
      <div className=" mx-auto my-16">
        <h1 className="mb-12 pt-8  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  text-center lg:text-6xl ">
          Class Details Update{" "}
        </h1>
        <div>
          <form className="w-[600px] mx-auto">
            <div>
              <label htmlFor="#" className="text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="floating_email"
                className="block font-bold py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={data.email}
                value={data.email}
                disabled
              />
            </div>
            <div className="pt-3">
              <label htmlFor="#" className="text-sm text-gray-400">
                Instructor Name
              </label>
              <input
                type="text"
                name="username"
                value={data.username}
                id="floating_email"
                className="block font-bold py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={data.username}
                disabled
              />
            </div>
            <div className="relative z-0 w-full mt-5 mb-5 group">
              <input
                type="text"
                name="updatedClassname"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={updatedClassname}
                onChange={(e) => setUpdatedClassname(e.target.value)}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Add Class Name
              </label>
            </div>
            <div className="relative z-0 w-full mt-5 mb-5 group">
              <input
                type="text"
                name="updatedImage"
                id="floating_password"
                className="block mt-5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={updatedImage}
                onChange={(e) => setUpdatedImage(e.target.value)}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Add Class Image URL
              </label>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Category
              </label>
              <select
                id="countries"
                name="updatedCategory"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select</option>
                <option>Programming & Tech</option>
                <option>Video & Animation</option>
                <option>Business</option>
                <option>Consulting</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 mt-3">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="updatedPrice"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={updatedPrice}
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Price
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="updatedQuantity"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={updatedQuantity}
                  onChange={(e) => setUpdatedQuantity(e.target.value)}
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Available Quantity
                </label>
              </div>
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleUpdateClass}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClass;
