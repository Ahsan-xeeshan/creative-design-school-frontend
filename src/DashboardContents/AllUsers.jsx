import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/jsx-key */
const AllUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userDetails = () => {
      axios
        .get("http://localhost:8080/api/v1/authentication/allusers")
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    userDetails();
  }, [userData]);

  const handleAdmin = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to update user role to admin. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make admin!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          "http://localhost:8080/api/v1/authentication/beadmin",
          {
            id,
          }
        );
        console.log("Role updated for user with id:", id);
        Swal.fire("Success!", "User role updated to admin.", "success");
      }
    } catch (error) {
      console.error("Error updating role for user with id:", id, error);
      Swal.fire("Error!", "Failed to update user role.", "error");
    }
  };

  const handleStudent = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to update user role to student. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make student!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          "http://localhost:8080/api/v1/authentication/bestudent",
          {
            id,
          }
        );
        location.reload(true);
        console.log("Role updated for user with id:", id);
        Swal.fire("Success!", "User role updated to student.", "success");
      }
    } catch (error) {
      console.error("Error updating role for user with id:", id, error);
      Swal.fire("Error!", "Failed to update user role.", "error");
    }
  };

  const handleInstructor = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to update user role to instructor. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make instructor!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          "http://localhost:8080/api/v1/authentication/beinstructor",
          {
            id,
          }
        );
        console.log("Role updated for user with id:", id);
        Swal.fire("Success!", "User role updated to instructor.", "success");
      }
    } catch (error) {
      console.error("Error updating role for user with id:", id, error);
      Swal.fire("Error!", "Failed to update user role.", "error");
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full pl-[400px] pr-10">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl font-semibold uppercase">
            Total Users: {userData.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 uppercase font-bold">#</th>
                <th className="py-5 uppercase font-bold">Image</th>
                <th className="py-5 uppercase font-bold"> name</th>
                <th className="py-5 uppercase font-bold">email</th>
                <th className="py-5 uppercase font-bold">role</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => (
                <tr>
                  <td className="border" key={index}>
                    {index + 1}
                  </td>
                  <td className="text-center border">
                    <div className="w-[64px] h-[64px] mx-auto py-2">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[48px] w-[56px] rounded-xl"
                      />
                    </div>
                  </td>
                  <td className="border">{item.username}</td>
                  <td className="border">{item.email}</td>

                  <td className="border">
                    <div>
                      {item.role == "admin" ? (
                        <button className="border border-pink-400 text-pink-400 text-xl px-4 py-2 rounded-lg uppercase">
                          admin
                        </button>
                      ) : (
                        <div>
                          {item.role == "student" ? (
                            <button
                              className="mr-2 px-4 py-2 text-white bg-[#570DF8] rounded-lg uppercase transition duration-300 hover:bg-[#014BCC] disabled:bg-gray-400 disabled:text-gray-300"
                              disabled
                            >
                              student
                            </button>
                          ) : (
                            <button
                              className="mr-2 px-4 py-2 text-white bg-[#570DF8] rounded-lg uppercase transition duration-300 hover:bg-[#014BCC]"
                              onClick={() => handleStudent(item._id)}
                            >
                              student
                            </button>
                          )}
                          {item.role == "instructor" ? (
                            <button
                              className="mr-2 px-4 py-2 text-white bg-yellow-400 rounded-lg uppercase transition duration-300 hover:bg-yellow-700 disabled:bg-gray-400 disabled:text-gray-300"
                              disabled
                            >
                              instructor
                            </button>
                          ) : (
                            <button
                              className="mr-2 px-4 py-2 text-white bg-yellow-400 rounded-lg uppercase transition duration-300 hover:bg-yellow-700 disabled:bg-gray-400 disabled:text-gray-300"
                              onClick={() => handleInstructor(item._id)}
                            >
                              instructor
                            </button>
                          )}
                          <button
                            className="px-4 py-2 text-white bg-pink-500 rounded-lg uppercase transition duration-300 hover:bg-pink-700"
                            onClick={() => handleAdmin(item._id)}
                          >
                            admin
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
