import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-6 px-16 py-20">
        <div className="col-span-2 flex flex-col gap-5">
          <Logo />
          <div className="flex flex-col gap-2">
            <p className="font-medium text-xl">Call us</p>
            <p className="font-medium text-xl text-blue-600">123 456 7890</p>
            <span className="text-gray-500 text-sm">Ahmedabad</span>
            <span className="text-gray-500 text-sm">
              380001, Gujarat, INDIA
            </span>
            <span className="text-gray-500 text-sm">admin@ritiknagar.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-xl">For Candidates</p>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-700">Browse Jobs</li>
            <li className="text-gray-700">Browse Categories</li>
            <li className="text-gray-700">Candidate Dashboard</li>
            <li className="text-gray-700">Job Alerts</li>
            <li className="text-gray-700">My Bookmarks</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-xl">For Employers</p>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-700">Browse Candidates</li>
            <li className="text-gray-700">Employer Dashboard</li>
            <li className="text-gray-700">Add Jobs</li>
            <li className="text-gray-700">Job Packages</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-xl">About Us</p>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-700">About Us</li>
            <li className="text-gray-700">Job Page Invoice</li>
            <li className="text-gray-700">Terms Page</li>
            <li className="text-gray-700">Blog</li>
            <li className="text-gray-700">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-xl">Helpful Resources</p>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-700">Sitemap</li>
            <li className="text-gray-700">Terms of Use</li>
            <li className="text-gray-700">Privacy Center</li>
            <li className="text-gray-700">Security Center</li>
            <li className="text-gray-700">Accessibility Center</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-5 py-7">
        <div className="text-gray-500 text-sm">
          © 2023 Ritik Nagar. All Right Reserved.
        </div>
        <div className="flex gap-5">
          <FaFacebookF color={"gray"} />
          <FaTwitter color={"gray"} />
          <FaInstagram color={"gray"} />
          <FaLinkedinIn color={"gray"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
