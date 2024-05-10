/* eslint-disable no-undef */
import axios from "axios";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [classData, setClassData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await axios.get(
          `https://creative-school-design.onrender.com/api/v1/classes/allclasses`
        );
        setClassData(response.data);
        // Initialize feedbackData with empty feedback for each class
        setFeedbackData(
          response.data.map((item) => ({ id: item._id, feedback: "" }))
        );
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };
    fetchClassDetails();
  }, []);

  const handleFeedback = async (id, feedback) => {
    try {
      await axios.post(
        `https://creative-school-design.onrender.com/api/v1/classes/updatefeedback`,
        {
          id,
          feedback,
        }
      );

      console.log("Feedback updated for class with id:", id);
      Swal.fire("Success!", "Feedback Updated Successfully", "success");
    } catch (error) {
      console.error("Error updating feedback for class with id:", id, error);
      Swal.fire("Error!", "Failed to update feedback.", "error");
    }
  };

  const handleInputChange = (id, value) => {
    // Update feedbackData with new feedback for the corresponding class
    setFeedbackData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, feedback: value } : item
      )
    );
  };

  const handleAccept = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to accept the class. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, accept the class!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(`${api}/classes/classaccept`, {
          id,
        });
        location.reload(true);
        console.log("Role updated for user with id:", id);
        Swal.fire("Success!", "Class accepted successfully", "success");
      }
    } catch (error) {
      console.error("Error updating role for user with id:", id, error);
      Swal.fire("Error!", "Failed to accept the class.", "error");
    }
  };

  const handleReject = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to reject the class. Proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reject the class!",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        await axios.post(
          `https://creative-school-design.onrender.com/api/v1/classes/classreject`,
          {
            id,
          }
        );
        location.reload(true);
        console.log("Role updated for user with id:", id);
        Swal.fire("Success!", "Class Rejected", "success");
      }
    } catch (error) {
      console.error("Error updating role for user with id:", id, error);
      Swal.fire("Error!", "Failed to reject the class.", "error");
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full pl-[400px] pr-10">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl font-semibold">
            Total Classes: {classData.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 uppercase font-bold">#</th>
                <th className="py-5 uppercase font-bold">Class Image</th>
                <th className="py-5 uppercase font-bold">Class Name</th>
                <th className="py-5 uppercase font-bold">Ins.Email</th>
                <th className="py-5 uppercase font-bold">status</th>
                <th className="py-5 uppercase font-bold">Feedback</th>
                <th className="py-5 uppercase font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {classData.map((item, index) => (
                <tr key={item._id}>
                  <td className="border">{index + 1}</td>
                  <td className="text-center border">
                    <div className="w-14 h-14 mx-auto">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                  </td>
                  <td className="border">{item.classname}</td>
                  <td className="border">{item.email}</td>
                  <td className="border font-bold">{item.status}</td>
                  <td className="border font-bold">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const feedbackValue =
                          feedbackData.find((data) => data.id === item._id)
                            ?.feedback || "";
                        handleFeedback(item._id, feedbackValue);
                      }}
                      className="grid-rows-2 grid p-2"
                    >
                      <input
                        type="text"
                        name="feedback"
                        value={
                          feedbackData.find((data) => data.id === item._id)
                            ?.feedback || ""
                        }
                        placeholder="Feedback Type here"
                        onChange={(e) =>
                          handleInputChange(item._id, e.target.value)
                        }
                        className="input bg-red-100 rounded-xl w-auto max-w-xs"
                      />
                      <button
                        type="submit"
                        className="mx-auto mt-2 bg-black text-white p-2 rounded-md"
                      >
                        Feedback
                      </button>
                    </form>
                  </td>
                  <td className="border">
                    <div>
                      {item.status === "accept" ? (
                        <button
                          className="mr-2 px-4 py-2 text-white bg-[#570DF8] rounded-lg uppercase disabled:bg-gray-400 disabled:text-gray-300"
                          disabled
                        >
                          accept
                        </button>
                      ) : (
                        <button
                          className="mr-2 px-4 py-2 text-white bg-[#570DF8] rounded-lg uppercase transition duration-300 hover:bg-[#014BCC]"
                          onClick={() => handleAccept(item._id)}
                        >
                          accept
                        </button>
                      )}
                      {item.status === "reject" ? (
                        <button
                          className="px-4 py-2 text-white bg-red-500 rounded-lg uppercase disabled:bg-gray-400 disabled:text-gray-300"
                          disabled
                        >
                          decline
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 text-white bg-red-500 rounded-lg uppercase transition duration-300 hover:bg-red-700"
                          onClick={() => handleReject(item._id)}
                        >
                          decline
                        </button>
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

export default ManageClass;
