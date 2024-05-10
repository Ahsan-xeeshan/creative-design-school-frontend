/* eslint-disable react/jsx-key */
import { FaGithub } from "react-icons/fa";
import { FaDribbble, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const InstructorCard = () => {
  const instructorData = [
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
    {
      name: "dewer hossain",
      email: "test@gmail.com",
      image: "./profile.jpg",
    },
  ];
  return instructorData.map((item) => (
    <div className="flex flex-col justify-center max-w-xs mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <img
        src={item.image}
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-400">
            {item.email}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <a
            href="#"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaDribbble />
          </a>
          <a
            href="#"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <MdOutlineMail />
          </a>
        </div>
      </div>
    </div>
  ));
};

export default InstructorCard;
