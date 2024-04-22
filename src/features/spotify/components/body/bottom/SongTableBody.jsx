import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  isActiveAction,
  isPlayingAction,
  trackIndexAction,
  toggleLikedSongAction,
} from "../../../../../actions/spotifyAction";

const SongTableBody = ({
  index,
  imgUrl,
  songName,
  artistName,
  addedDate,
  duration,
}) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.spotify.likedSongs);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(likedSongs.some(song => song.songName === songName));
  }, [likedSongs, songName]);

  const convertDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const handlePlay = () => {
    dispatch(trackIndexAction(index));
    dispatch(isPlayingAction(true));
    dispatch(isActiveAction(true));
  };

  const toggleFavorite = () => {
    const song = { songName, artistName, imgUrl, addedDate, duration };
    dispatch(toggleLikedSongAction({ song }));
    setIsFavorite(!isFavorite);
  };

  return (
    <tr
      className="text-center hover:bg-slate-800 cursor-default"
      key={index}
      onClick={handlePlay}
    >
      <td>{index + 1}</td>
      <td className="text-left flex gap-3 items-center">
        <img src={imgUrl} alt="cover" className="w-[50px]" />
        {songName}
      </td>
      <td>{artistName}</td>
      {addedDate && <td>{addedDate}</td>}
      <td>{convertDuration(duration)}</td>
      <td>
        <button onClick={(e) => {e.stopPropagation(); toggleFavorite();}} className="focus:outline-none">
          {isFavorite ? (
            <AiFillHeart className="text-green-500 text-xl" />
          ) : (
            <AiOutlineHeart className="text-xl" />
          )}
        </button>
      </td>
    </tr>
  );
};

export default SongTableBody;