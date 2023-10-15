import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const Controls = ({
  isPlaying,
  isActive,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {/* <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={isActive ? () => setRepeat((prev) => !prev) : null}
      className="hidden sm:block cursor-pointer"
    /> */}

    <MdSkipPrevious
      size={30}
      color="#FFF"
      className="cursor-pointer"
      onClick={isActive ? handlePrevSong : null}
    />

    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={isActive ? handlePlayPause : null}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={isActive ? handlePlayPause : null}
        className="cursor-pointer"
      />
    )}

    <MdSkipNext
      size={30}
      color="#FFF"
      className="cursor-pointer"
      onClick={isActive ? handleNextSong : null}
    />

    {/* <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    /> */}
  </div>
);

export default Controls;
