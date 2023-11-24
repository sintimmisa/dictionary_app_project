import { useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
const ContentHeader = ({ word, phonetic, audioUrl }) => {
  const ref = useRef();




  const handlePlayAudio=()=>{
ref.current.play();
  }
  return (
    <div className="content-header my-5 flex flex-row justify-between items-center">
      <div className="mt-5">
        <h1 className="word text-4xl font-bold capitalize whiteText">{word}</h1>
        <p className="sound purpleText text-sm ">{phonetic}</p>
      </div>
      <button className="playBtn grayBg rounded-full py-4 px-4 items-center" onClick={handlePlayAudio}>
        <BsPlayFill size="34px" color="#A445ED" />
      </button>

      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
};

export default ContentHeader;
