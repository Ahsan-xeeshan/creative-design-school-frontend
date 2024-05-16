/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AddClass = () => {
  const data = useSelector((state) => state.userInfo.value);
  const instructorname = data.username;
  const email = data.email;
  const id = data.id;

  const [classname, setClassname] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCreateClass = async () => {
    try {
      const response = await axios.post(
        `https://creative-school-design.onrender.com/api/v1/classes/createclass`,
        {
          instructorname: instructorname,
          email: email,
          instructorid: id,
          image: image,
          classname: classname,
          price: price,
          category: category,
          quantity: quantity,
        }
      );
      // Check if the request was successful
      if (response.status === 200) {
        await Swal.fire({
          icon: "success",
          title: "Class created successfully!",
          showConfirmButton: false,
          timer: 3000, // Close alert after 1.5 seconds
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      // Handle errors
      console.error("Error creating class:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="bg-white w-screen mt-16 py-8">
      <div className=" mx-auto my-16">
        <h1 className="mb-12 pt-8  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  text-center lg:text-6xl ">
          Add a Class{" "}
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
                name="classname"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={classname}
                onChange={(e) => setClassname(e.target.value)}
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
                name="image"
                id="floating_password"
                className="block mt-5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                  name="price"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  name="quantity"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
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
              onClick={handleCreateClass}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
