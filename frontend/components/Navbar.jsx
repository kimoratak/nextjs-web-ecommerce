import Link from "next/link";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-400 flex justify-between md:justify-around items-center py-2.5">
        <div>
          <Link href="#" className="text-sm md:text-lg text-white  font-bold">
            E-commerce
          </Link>
        </div>

        <form className="flex md:w-[400px]">
          <input
            type="text"
            className="hidden md:flex w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md"
            placeholder="Search..."
          />
          <button
            className="md:inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md"
            type="submit"
          >
            <span className="hidden md:flex">Search</span>
            <IoSearch className="md:hidden flex" />
          </button>
        </form>

        <div className="hidden md:flex">
          <Link href="#" className="text-white text-3xl relative">
            <FaPlus className="absolute top-1 right-[3px] text-[8px]" />
            <div className="bg-red-600 w-6 h-6 absolute rounded-full left-[20px]  flex justify-center items-center z-10">
              <span className="text-[10px] text-white">99</span>
            </div>
            <FaShoppingBasket className="relative" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
