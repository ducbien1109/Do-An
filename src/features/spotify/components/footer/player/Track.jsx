import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  isActiveAction,
  isPlayingAction,
  trackIndexAction,
  toggleLikedSongAction,
} from "../../../../../actions/spotifyAction";

const Track = ({ isPlaying, activeSong, isActive }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.spotify.likedSongs);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(likedSongs.some(song => song.songName === activeSong?.name));
  }, [likedSongs, activeSong]);

  const handleLike = () => {
    dispatch(toggleLikedSongAction(activeSong));
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`${
        isActive ? "" : "sm:hidden"
      } ${isPlaying ? "" : "hidden sm:flex"} flex gap-2 items-center justify-start sm:w-[30%] overflow-hidden w-[100%] absolute bottom-full left-0 p-2 bg-black sm:bottom-0`}
    >
      <div
        className={`${
          isPlaying ? "animate-[spin_3s_linear_infinite]" : ""
        } h-14 w-14`}
      >
        <img
          src={
            activeSong?.album?.images[0]?.url ||
            "https://play-lh.googleusercontent.com/chmvIO5IT79WenpTg6sSbX6zKulry4Lm9AKN7Vf1dHCiLQQSGzz1LxiAOpqUEzSbibE"
          }
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-full items-center sm:items-start">
        <div className="flex items-center justify-between w-full">
          <p className="truncate text-white font-bold text-lg mr-2">
            {activeSong?.name}
          </p>
          {isActive && (
            <div onClick={handleLike} className="cursor-pointer">
              {isFavorite ? (
                <AiFillHeart className="text-green-500 text-2xl" />
              ) : (
                <AiOutlineHeart className="text-2xl" />
              )}
            </div>
          )}
        </div>
        <p className="truncate text-gray-300">{activeSong?.artists[0]?.name}</p>
      </div>
    </div>
  );
};

export default Track;
