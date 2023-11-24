import React,{createContainer, useState} from 'react';


export const FontContext = createContext();


const ContextFont=({children})=>{
 

  const [font, setFont]=useState('serif');
  
  return (
    <div>
      Font
    </div>
  )
}


export default ContextFont;