import React from "react";

const Track = ({ isPlaying, activeSong, isActive }) => (
  <div
    className={`${isActive ? "" : "sm:hidden"}
    ${isPlaying ? "" : "hidden sm:flex"}
    flex gap-2 items-center justify-start sm:w-[30%] overflow-hidden w-[100%] absolute bottom-full left-0 p-2 bg-black sm:bottom-0`}
  >
    <div
      className={`${
        isPlaying ? "animate-[spin_3s_linear_infinite]" : ""
      } h-14 w-14`}
    >
      <img
        src={
          activeSong?.album?.images[0]?.url
            ? activeSong?.album?.images[0]?.url
            : "https://play-lh.googleusercontent.com/chmvIO5IT79WenpTg6sSbX6zKulry4Lm9AKN7Vf1dHCiLQQSGzz1LxiAOpqUEzSbibE"
        }
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div>
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.name}
      </p>
      <p className="truncate text-gray-300">{activeSong?.artists[0]?.name}</p>
    </div>
  </div>
);

export default Track;
