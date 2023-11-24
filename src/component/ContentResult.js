import { useContext } from "react";
import { ThemeContext } from "./ContextTheme";

const ContentResult=({partOfSpeech,definitions })=>{
    const {darkTheme,handleDarkTheme}=useContext(ThemeContext);

    return(
        <div className="results my-5">
            <div className="flex flex-row justify-between items-center">{
                darkTheme? <h2 className="whiteText text-1xl">{partOfSpeech}</h2>:<h2 className>{partOfSpeech}</h2>
            }
{
darkTheme?<hr className="w-full ml-5 darkColor"/>:<hr className="w-full ml-5"/>
}

            </div>
            <h3 className="font-semi-bold">Meanings</h3>
            {
                darkTheme?<ul className="list-disc mx-5 text-sm space-y-2 whiteText">
                {
definitions.map((wordMeaning,index)=>(
    <li  key={index}>
       {wordMeaning.definition} 
    </li>
))
                }
               
            </ul>:<ul className="list-disc mx-5 text-sm space-y-2">
                {
definitions.map((wordMeaning,index)=>(
    <li key={index}>
       {wordMeaning.definition} 
    </li>
))
                }
               
            </ul>


            }
            
        </div>
    )
}

export default ContentResult;