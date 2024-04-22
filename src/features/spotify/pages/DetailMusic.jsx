import React, { useEffect, useRef, useState } from "react";
import getList from "../Api/list";
import { useParams } from "react-router";
import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/body/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const DetailMusic = () => {
  const audioRef = useRef();
  const [isPlay, setPlay] = useState(false);

  const handlePlayPause = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };
  const { id } = useParams();
  const [callDetails, setCallDetails] = useState({});
  const response = async (id) => {
    const res = await getList.getDetail(id);
    setCallDetails(res.data);
  };
  useEffect(() => {
    if (id) {
      response(id);
    }
  }, [id]);
  return (
    <div>
      <div className=" h-[100vh] flex flex-col text-white bg-black">
        <div className=" flex min-h-[85vh] p-2 gap-2 md:flex-row flex-col">
          <SideBar />
          <div className="flex flex-col bg-[#121212] rounded-lg p-2 md:w-[65vw] lg:w-[75vw] overflow-hidden">
            <NavBar />
            <Outlet />
            <div className="details">
            <div style={{textAlign:"-webkit-center"}}>
            <img src={callDetails.img} width={100} className={isPlay ? "img-detail" : ""}/>
              <h4>{callDetails.name}</h4>
              <p>{callDetails.detail}</p>
            </div>
            <audio controls ref={audioRef} autoPlay={isPlay}>
              {isPlay ? (
                <source src={callDetails.audio} type="audio/mpeg" />
              ) : null}
            </audio>
            <button onClick={handlePlayPause} className="btnPlayMusic">
              {isPlay ? "Pause" : "Play"}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMusic;
