/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "./Container";

const ClassCard = () => {
  const data = useSelector((state) => state.userInfo.value);
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    const classDetails = async () => {
      const data = await axios.get(
        `https://creative-school-design.onrender.com/api/v1/classes/allclasses`
      );
      setClassData(data.data);
    };
    classDetails();
  }, [classData]);

  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {classData.map((item) => (
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
                    <span className="font-bold pr-1">Enrolled : </span>{" "}
                    {item.enrolled}
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
                <div className="p-4  bg-purple-200 flex border-t items-center justify-between">
                  <p>
                    <span className="font-bold text-2xl">Admin feedback :</span>{" "}
                    <span className="text-xl"> {item.feedback}</span>
                  </p>
                </div>
                {data !== null &&
                data.role === "admin" &&
                data.role === "instructor" ? (
                  <div className="hidden"></div>
                ) : (
                  <div className="p-4 bg-purple-100 flex h-16 border-t items-center justify-between">
                    <button
                      className="p-3  font-bold rounded-xl bg-blue-200 text-blue-800            
              "
                    >
                      Add to Cart
                    </button>
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

export default ClassCard;
