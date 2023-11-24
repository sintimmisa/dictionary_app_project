
import React,{useContext} from "react";
import { ThemeContext } from "./ContextTheme";

const SelectFont = () => {

    const { darkTheme, handleTheme } = useContext(ThemeContext);

    const handleFont=(e)=>{
        console.log(e.target.value);
        document.querySelector('body').style.fontFamily =e.target.value;
    };
  return (
    <div className="font-container">
      <select
        name="select-font"
        id="select-font"
        className={
            darkTheme
              ? `select-font whiteText border-none outline-none`
              : `lightThemeText border-none outline-none`
          }
          onChange={handleFont}
      >

        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
      <div className="select-arrow"></div>
    </div>
  );
};

export default SelectFont;
