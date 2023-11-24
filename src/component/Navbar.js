import React, { useContext } from "react";
import { RiBook2Line } from "react-icons/ri";
import { BiSolidToggleLeft, BiMoon, BiSolidToggleRight } from "react-icons/bi";
import { ThemeContext } from "./ContextTheme";
import SelectFont from "./SelectFont";

const Navbar = () => {
  const { darkTheme, handleTheme } = useContext(ThemeContext);
  return (
    <div className=" header-section flex flex-row items-center justify-between items-center h-16">
      <RiBook2Line size="24px" color="#3A3A3A" />

      <div className="controls flex flex-row gap-5">
        {/*
    
    <select className={darkTheme?`whiteText border-none outline-none`:`lightThemeText border-none outline-none`}>
        <option value="San Serif">San Serif</option>
        <option value="Serif">Serif</option>
        <option value="Mono">Mono</option>
      </select>*/}
        <SelectFont
          
        />

        <div
          className="theme-control icons flex flex-row gap-3 items-center "
          onClick={handleTheme}
        >
          {darkTheme ? (
            <BiSolidToggleRight
              className="icons bgPurple "
              size="24px"
              color=" white"
            />
          ) : (
            <BiSolidToggleLeft className="icons" size="24px" color=" #757575" />
          )}
          {darkTheme ? (
            <BiMoon className="purpleText" color="" />
          ) : (
            <BiMoon color="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
