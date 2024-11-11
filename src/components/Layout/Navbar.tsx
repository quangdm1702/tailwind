import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex sm:hidden justify-between items-center w-screen h-16 bg-[#6A1B9A] px-2 py-2">
        <div
          className="text-3xl text-[#ffffff] cursor-pointer"
          onClick={handleShow}
        >
          <FaAlignJustify />
        </div>

        {show ? (
          <div
            className="flex justify-center items-center text-3xl text-[#000000] cursor-pointer bg-[#ffffff] w-12 h-12 rounded-full"
            onClick={handleShow}
          >
            <IoClose />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/21/15/32/beautiful-8778428_640.png"
              alt="avatar"
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      <div className={`${show ? "flex flex-col h-full absolute z-50" : "hidden"} sm:block h-screen w-48 bg-[#6A1B9A] text-[#ffffff]`}>
        <div className="flex flex-col items-center py-5">
          <div className="w-24 rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/21/15/32/beautiful-8778428_640.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold">Phương Thảo</h3>
        </div>
        <ul className="list-none w-full">
          <li className="mb-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F00] text-[#ffffff] font-bold py-2 px-2 mb-2 w-full block"
                  : "bg-[#ffffff] text-[#6A1B9A] font-bold py-2 px-2 mb-2 w-full block"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F00] text-[#ffffff] font-bold py-2 px-2 mb-2 w-full block"
                  : "bg-[#ffffff] text-[#6A1B9A] font-bold py-2 px-2 mb-2 w-full block"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to="/educations"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F00] text-[#ffffff] font-bold py-2 px-2 mb-2  w-full block"
                  : "bg-[#ffffff] text-[#6A1B9A] font-bold py-2 px-2 mb-2  w-full block"
              }
            >
              EDUCATIONS
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
