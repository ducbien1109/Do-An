import { useDispatch, useSelector } from "react-redux";
import Controls from "./player/Controls";
import Seekbar from "./player/Seekbar";
import Track from "./player/Track";
import { useEffect, useState } from "react";
import Player from "./player/Player";
import VolumeBar from "./player/VolumeBar";
import { isPlayingAction, trackIndexAction } from "../../../../actions/spotifyAction";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Footer() {
  const { tracks, trackIndex, isPlaying, isActive } = useSelector(
    (state) => state.spotify
  );
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPlaying) {
      if (!tracks[trackIndex]?.preview_url) {
        setTimeout(() => {
          handleNextSong();
        }, 1000);
      }
    }
  }, [trackIndex, tracks, isPlaying]);

  const handlePlayPause = () => {
    dispatch(isPlayingAction(!isPlaying));
  };

  const handleNextSong = () => {
    const nextTrackIndex = (trackIndex + 1) % tracks.length;
    dispatch(trackIndexAction(nextTrackIndex));
    dispatch(isPlayingAction(true));
  };

  const handlePrevSong = () => {
    const prevTrackIndex = trackIndex === 0 ? tracks.length - 1 : trackIndex - 1;
    dispatch(trackIndexAction(prevTrackIndex));
    dispatch(isPlayingAction(true));
  };

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative p-2 flex items-center justify-between flex-wrap min-h-max">
      <Track
        isPlaying={isPlaying}
        activeSong={tracks[trackIndex]}
        liked={liked}
        handleLike={handleLike}
        isActive={isActive}
        
      />
      <div className="flex-1 flex flex-col items-center justify-center" id="test">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={tracks[trackIndex]}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
}
