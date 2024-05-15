import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaGooglePlusG,
  FaHome,
  FaInstagram,
} from "react-icons/fa";
import { FaLinkedinIn, FaPhone, FaPrint } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Flex from "../Layouts/Flex";
import FooterContent from "../Layouts/FooterContent";

const Footer = () => {
  return (
    <div className="bg-[#ececec]">
      <div className="lg:flex lg:items-center lg:justify-between border-b border-gray-300 p-[25px]">
        <div className="hidden lg:block">
          Get connected with us on social networks:
        </div>
        <Flex className="items-center justify-center gap-x-[25px]">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <BsTwitterX />
          </a>
          <a href="#">
            <FaGooglePlusG className="text-xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="#">
            <FaGithub className="text-xl" />
          </a>
        </Flex>
      </div>
      <div className="md:flex flex-wrap p-[15px]">
        <div className="py-10 sm:w-1/2 lg:w-1/4 text-center sm:text-left">
          <p className="w-[300px] md:w-[340px] lg:w-[220px] xl:w-[390px]">
            Creative design school is a premier creative design school that
            ignites the spark of imagination and empowers students to become
            innovative thinkers and creators.
          </p>
        </div>
        <div className="pl-5 sm:w-1/2 lg:w-1/4 text-center sm:text-left">
          <FooterContent title="CHROMAVIBE">
            <ul>
              <a href="#">
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  ArtSpectrum
                </li>
              </a>
              <a href="#">
                {" "}
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  VisionaryFusion
                </li>
              </a>
              <a href="#">
                {" "}
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  PixelWave
                </li>
              </a>
              <a href="#">
                {" "}
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  DreamScape
                </li>
              </a>
            </ul>
          </FooterContent>
        </div>
        <div className=" sm:w-1/2 lg:w-1/4 text-center sm:text-left">
          <FooterContent title="USEFUL LINKS">
            <ul>
              <a href="#">
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  Pricing
                </li>
              </a>
              <a href="#">
                {" "}
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  Settings
                </li>
              </a>
              <a href="#">
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  Orders
                </li>
              </a>
              <a href="#">
                <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                  Help
                </li>
              </a>
            </ul>
          </FooterContent>
        </div>
        <div className="sm:pl-5 lg:pl-0 sm:w-1/2 lg:w-1/4 text-center sm:text-left">
          <FooterContent title="CONTACT">
            <ul>
              <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                <Flex className="items-center justify-center sm:justify-start gap-2">
                  <FaHome />
                  <p>New York, NY 10012, US</p>
                </Flex>
              </li>
              <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                <Flex className="items-center justify-center sm:justify-start  gap-2">
                  <IoMdMail />
                  <p>info@example.com</p>
                </Flex>
              </li>
              <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                <Flex className="items-center justify-center sm:justify-start  gap-2">
                  <FaPhone />
                  <p>+ 01 234 567 88</p>
                </Flex>
              </li>
              <li className="font-dm font-sm text-[#6D6D6D] pb-5 hover:pl-1 ease-linear duration-300">
                <Flex className="items-center justify-center sm:justify-start  gap-2">
                  <FaPrint />
                  <p>+ 01 234 567 89</p>
                </Flex>
              </li>
            </ul>
          </FooterContent>
        </div>
      </div>

      <div className="bg-[#475569] text-center py-6">
        <p className="text-white">© 2023 Copyright:Creative Design School</p>
      </div>
    </div>
  );
};

export default Footer;
