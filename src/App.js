import { FiSearch } from "react-icons/fi";
import "./App.css";
import Navbar from "./component/Navbar";
import ContentHeader from "./component/ContentHeader";
import ContentResult from "./component/ContentResult";
import { useContext, useState } from "react";
import { ThemeContext } from "./component/ContextTheme";

function App() {
  const [word, setWord] = useState("");
  const [searchResult, setSearchResult] = useState("");

const {darkTheme,handleDarkTheme}=useContext(ThemeContext);






  //Handle Onclick Event to searchord
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const data = await response.json();

    setSearchResult(data[0]);
  };

  console.log(searchResult);

  //Function to get audioURl if it exist

  const headerContent = () => {
    const audio = searchResult?.phonetics.find(
      (wordSound) => wordSound.audio != ""
    ).audio;
    return {
      audioUrl: audio,
      word: searchResult?.word,
      phonetic: searchResult?.phonetic,
    };
  };

  return (
    <div className={darkTheme?`lg:w-35 w-full darkTheme   app-wrapper`:`w-full  lightTheme   app-wrapper`}>
      <div className="container mx-auto px-5">
      <Navbar />
      <div className=" searchword flex flex-row items-center">
        <input
          className="w-full border-none outline-none grayBg py-4 rounded-lg px-2"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="-mx-7 " type="submit" onClick={handleSearch}>
          <FiSearch className="icon" size="18px" color=" #A445ED" />
        </button>
      </div>

      {searchResult?.meanings?.length > 0 && (
        <>
          <ContentHeader {...headerContent()} />
          {searchResult.meanings.map((result, index) => {
            return <ContentResult {...result} key={index} />;
          })}
        </>
      )}
      </div>
    </div>
  );
}

export default App;
