import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectClass = () => {
  const data = useSelector((state) => state.userInfo.value);
  const buyerId = data.id;
  const [selectedClassData, setSelectedClassData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchSelectedClasses = async () => {
      try {
        const response = await axios.get(
          `https://creative-school-design.onrender.com/api/v1/classes/selectedclasses`,
          {
            params: {
              buyerId: buyerId,
            },
          }
        );
        setSelectedClassData(response.data);
      } catch (error) {
        console.error("Error fetching selected classes:", error);
      }
    };
    fetchSelectedClasses();
  }, [buyerId]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = selectedClassData.reduce(
        (acc, item) => acc + Number(item.price),
        0
      );
      setTotalPrice(totalPrice);
    };
    calculateTotalPrice();
  }, [selectedClassData]);

  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await axios.post(
          `https://creative-school-design.onrender.com/api/v1/classes/deleteselection`,
          { id }
        );
        if (response.status === 200) {
          await Swal.fire("Deleted!", "Removed from the cart.", "success");
          // Refresh the page
          window.location.reload(true);
        } else {
          await Swal.fire(
            "Error!",
            "Oops!, Failed to delete class. Please try again later.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error deleting class:", error);
        await Swal.fire(
          "Error!",
          "Failed to delete class. Please try again later.",
          "error"
        );
      }
    } else {
      await Swal.fire("Cancelled", "Your class is safe :)", "info");
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full lg:pl-[400px] lg:pr-10">
        <div className="uppercase px-5 md:px-0 py-1 md:py-0 font-semibold h-[60px] md:flex md:justify-evenly md:items-center">
          <h3 className="text-xl md:text-3xl font-semibold">
            Total Items: {selectedClassData.length}
          </h3>
          <h3 className="text-xl md:text-3xl font-semibold">
            Total Price: ${totalPrice}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 uppercase font-bold">#</th>
                <th className="py-5 uppercase font-bold">Image</th>
                <th className="py-5 uppercase font-bold">Class Name</th>
                <th className="py-5 uppercase font-bold">Price</th>
                <th className="py-5 uppercase font-bold">Action</th>
                <th className="py-5 uppercase font-bold">Pay</th>
              </tr>
            </thead>
            <tbody>
              {selectedClassData.map((item, index) => (
                <tr key={index}>
                  <td className="border">{index + 1}</td>
                  <td className="text-center border">
                    <div className="w-14 h-14 mx-auto">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full rounded-2xl"
                      />
                    </div>
                  </td>
                  <td className="border">{item.classname}</td>
                  <td className="border">{item.price}</td>
                  <td className="border font-bold">
                    <div
                      className="bg-red-500 cursor-pointer px-3 py-1 flex justify-center items-center mx-auto rounded-lg w-12"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDelete className="text-4xl text-white" />
                    </div>
                  </td>
                  <td className="border">
                    <Link
                      to={`/dashboard/payment/${item._id}`}
                      className="mr-2 px-4 py-2 bg-yellow-300 rounded-lg uppercase transition duration-300 hover:bg-yellow-400"
                    >
                      pay one
                    </Link>
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

export default SelectClass;
