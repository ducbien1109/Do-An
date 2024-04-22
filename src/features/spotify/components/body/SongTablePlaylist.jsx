import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import SongTableBody from "./bottom/SongTableBody";

export default function SongTablePlaylist({ tracks }) {
  const [favorites, setFavorites] = useState(Array(tracks.length).fill(false));

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <div className="mt-4">
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Date Added</th>
            <th>Duration</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map(({ added_at, track }, index) => (
            <SongTableBody
              key={index}
              index={index}
              imgUrl={track?.album?.images[0]?.url}
              songName={track?.name}
              artistName={track?.artists[0]?.name}
              addedDate={added_at?.split("T")[0]}
              duration={track?.duration_ms}
              isFavorite={favorites[index]}
              toggleFavorite={() => toggleFavorite(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}