import React, {useState} from 'react';
import Select,{Options} from "react-select";


const fontOptions:Options<any>=[

    {value:'sans', label:'Sans Serif'},
    {value:'sans', label:'Sans Serif'},
    {value:'sans', label:'Sans Serif'},
];

const FontSwitcher = () => {

    const [option,setOption]=useState<any>(fontOptions[0])
  return (
    <div>
<Select

defaultValue={option}
onChange={setOption}
options={fontOptions}

    </div>
  )
}

export default FontSwitcher