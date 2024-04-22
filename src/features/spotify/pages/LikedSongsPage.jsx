import React from "react";
import { useSelector } from "react-redux";
import Section from "../components/body/bottom/Section";
import SongTableBody from "../components/body/bottom/SongTableBody";

const LikedSongsPage = () => {
  const { likedSongs } = useSelector((state) => state.spotify);

  return (
    <div className="overflow-scroll">
      <h1>BÀI HÁT YÊU THÍCH</h1>
      
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Duration</th>
              <th>Favourite</th>
            </tr>
          </thead>
          <tbody>
            {likedSongs.map((song, index) => (
              <SongTableBody
                key={index}
                index={index}
                imgUrl={song.imgUrl}
                songName={song.songName}
                artistName={song.artistName}
                duration={song.duration}
                isFavorite={true} // Đánh dấu là bài hát đã được yêu thích
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikedSongsPage;