import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="shadow-lg py-4 mb-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="px-2 mx-2">
            <FaGithub className="inline pr-2 text-4xl" />
            <Link to="/" className="text-base md:text-lg font-bold">
              Github Repos
            </Link>
          </div>
          <div className=" mx-2">
            <div className="flex justify-end">
              <Link
                to="/"
                className="text-gray-600 p-2 font-semibold mx-3 hover:text-gray-800"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 p-2 font-semibold mx-3 hover:text-gray-800"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
