import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row  items-start md:items-center space-y-8 md:space-y-0 px-4">
        <div className="text-center md:text-left md:w-1/3 space-y-4">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="https://www.swiftsales.io/assets/svg/header-logo.svg"
              alt="SwiftSales Logo"
              className="h-12 w-auto"
              width={200}
              height={70}
            />
          </div>
          <p className="text-yellow-500 text-md font-medium max-w-xs mx-auto md:mx-0">
            Our mobile application keeps your customer support at your
            fingertips.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Social Icons */}
            <Link href="#">
              <FaFacebookF
                size={28}
                className="text-gray-700 hover:text-yellow-500"
              />
            </Link>
            <Link href="#">
              <FaLinkedinIn
                size={28}
                className="text-gray-700 hover:text-yellow-500"
              />
            </Link>
            <Link href="#">
              <FaInstagram
                size={28}
                className="text-gray-700 hover:text-yellow-500"
              />
            </Link>
            <Link href="#">
              <FaYoutube
                size={28}
                className="text-gray-700 hover:text-yellow-500"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols md:grid-cols-2 md:items-start md:gap-x-11 gap-y-5">
          <div className="flex flex-col w-full max-w-3xl p-2 space-y-1">
            <h1 className="font-bold text-xl mb-2">Useful Links</h1>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              Terms and Conditions
            </Link>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              Contact Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              Affiliates
            </Link>
          </div>
          <div className="flex flex-col w-full max-w-3xl p-2 space-y-1">
            <h1 className="font-bold text-xl  mb-2">Suuport</h1>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              End-User License Agreement (EULA)
            </Link>
            <Link href="#" className="text-gray-700 hover:text-yellow-500">
              Support and Maintenance
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left px-4">
          <div className="text-gray-700 flex items-center justify-center md:justify-start space-x-2">
            <FaLocationDot className="text-gray-500" />
            <span>Southlake, TX, United States, Texas</span>
          </div>
          <div className="text-gray-700 flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneVolume className="text-gray-500" />
            <span>+1 646-801-9992</span>
          </div>
          <div className="text-gray-700 flex items-center justify-center md:justify-start space-x-2">
            <MdMarkEmailUnread className="text-gray-500" />
            <span>support@swiftsales.io</span>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4 px-4">
          &copy; Copyright 2024 SwiftSales. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
