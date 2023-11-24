import React, { useState,useContext,createContext } from 'react';


export const ThemeContext =createContext();

const ContextTheme = ({children}) => {


    const [darkTheme,setDarkTheme]=useState("");


    const handleTheme=()=>{

        setDarkTheme((prev)=>!prev);
    }
  return (
    <ThemeContext.Provider value={{darkTheme,handleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ContextTheme;