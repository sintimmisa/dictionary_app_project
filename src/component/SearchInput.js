import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";

import { ThemeContext } from "./ContextTheme";

const SearchInput = ({ searchItem, setDictResponse }) => {
  const { darkTheme, handleTheme } = useContext(ThemeContext);
  return (
    <form className="flex flex-row items-center" onSubmit={(e) => {}}>
      {darkTheme ? (
        <input
          className="w-full border-none outline-none bgSearch py-4 rounded-lg px-2"
          type="text"
          placeholder={setDictResponse.word}
        />
      ) : (
        <input
          className="w-full border-none outline-none grayBg py-4 rounded-lg px-2"
          type="text"
          placeholder={setDictResponse.word}
        />
      )}

      <button className="-mx-7 " type="submit">
        <FiSearch className="icon" size="18px" color=" " />
      </button>
    </form>
  );
};

export default SearchInput;
