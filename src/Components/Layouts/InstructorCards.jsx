/* eslint-disable react/jsx-key */
import { Button } from "flowbite-react";

const instructorData = [
  {
    name: "delwer hossain",
    designation: "Senior Designer, Co-Founder",
    image: "./profile.jpg",
  },
  {
    name: "delwer hossain",
    designation: "Senior Designer, Co-Founder",
    image: "./profile.jpg",
  },
  {
    name: "delwer hossain",
    designation: "Senior Designer, Co-Founder",
    image: "./profile.jpg",
  },
  {
    name: "delwer hossain",
    designation: "Senior Designer, Co-Founder",
    image: "./profile.jpg",
  },
];

const InstructorCards = () => {
  return instructorData.map((item) => (
    <div className=" px-6 py-6 text-center ">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        <div className=" flex items-center justify-center bg-grey-light mx-auto mb-8 ">
          <img
            src={item.image}
            alt=""
            className="rounded-full border h-64 w-64"
          />
        </div>
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-grey-darker text-base mb-4">{item.designation}</p>
        <Button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-white rounded-lg text-base uppercase font-semibold p-2 mx-auto">
          Contact
        </Button>
      </div>
    </div>
  ));
};

export default InstructorCards;
