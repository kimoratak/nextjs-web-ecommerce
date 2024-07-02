import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <>
      <nav className="bg-gray-400 flex justify-around items-center py-2.5">
        <div>
          <Link href="#" className="text-2xl text-white font-bold">
            E-commerce
          </Link>
        </div>

        <form className="flex  w-[500px]">
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md"
            placeholder="input for Search..."
          />
          <button
            className="inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md"
            type="submit"
          >
            Search
          </button>
        </form>

        <div>
          <Link href="#" className="text-white text-3xl">
            {/* <div className="bg-red-600 w-3 h-3 absolute  rounded-full left-[87%] top-2"></div> */}
            <div className="bg-red-600 w-5 h-5 relative rounded-full left-[25px] top-[8px] flex justify-center items-center z-10">
              <span className="text-[12px] text-white  ">99</span>
            </div>
            <FaShoppingBasket className="top-[-8px] relative" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Home;
