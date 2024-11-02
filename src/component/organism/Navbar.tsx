import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { CiDark } from "react-icons/ci";
import {
  selectDarkMode,
  toggleDarkMode
} from "../../redux-tk/store/features/darkSlice";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectDarkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    console.log(isDark);
  }, [isDark]);

  return (
    <nav className={`w-full py-5 shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <ul className="flex md:px-3 sm:px-1 w-11/12 mx-auto justify-between">
        <li>
          <div className="flex">
            <img
              className="w-9 h-9 drop-shadow-xl logo"
              src={logo}
              alt="Logo"
            />
            <h1 className="ml-2 mt-1 font-bold md:text-[20px]">
              where in the world ?
            </h1>
          </div>
        </li>
        <li className="mt-1">
          <button className={`flex button ${isDark ? 'text-gray-300' : 'text-gray-700'}`} onClick={handleToggleDarkMode}>
            <CiDark className="mt-1 mr-2" />
            Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
