/* eslint-disable react/jsx-key */
import { MdDelete } from "react-icons/md";
const SelectClass = () => {
  const selectedClassData = [
    {
      id: 1,
      image: "../assets/product-feature-03-detail-01.jpg",
      classname: "web design",
      price: "575",
    },
    {
      id: 2,
      image: "./cardpic2.jpg",
      classname: "graphic design",
      price: "450",
    },
    {
      id: 3,
      image: "./cardpic3.png",
      classname: "autocad design",
      price: "700",
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full pl-[400px] pr-10">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl font-semibold">
            Total Items: {selectedClassData.length}
          </h3>
          <h3 className="text-3xl font-semibold">Total Price: $1500</h3>
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
              {selectedClassData.map((item) => (
                <tr>
                  <td className="border">{item.id}</td>
                  <td className="text-center border">
                    <div className="w-14 h-14 mx-auto">
                      <img src={item.image} alt="" className="h-full w-full" />
                    </div>
                  </td>
                  <td className="border">{item.classname}</td>
                  <td className="border">{item.price}</td>
                  <td className="border font-bold">
                    <div className="bg-red-500 cursor-pointer px-3 py-1 flex justify-center items-center mx-auto rounded-lg w-12">
                      <MdDelete className="text-4xl text-white" />
                    </div>
                  </td>

                  <td className="border">
                    <div>
                      <button className="mr-2 px-4 py-2 bg-yellow-300 rounded-lg uppercase transition duration-300 hover:bg-yellow-400">
                        pay one
                      </button>
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

export default SelectClass;
