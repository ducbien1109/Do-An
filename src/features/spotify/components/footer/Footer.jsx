import { useDispatch, useSelector } from "react-redux";
import Controls from "./player/Controls";
import Seekbar from "./player/Seekbar";
import Track from "./player/Track";
import { useEffect, useState } from "react";
import Player from "./player/Player";
import VolumeBar from "./player/VolumeBar";
import {
  isPlayingAction,
  trackIndexAction,
} from "../../../../actions/spotifyAction";

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
    if (isPlaying) {
      dispatch(isPlayingAction(false));
    } else {
      dispatch(isPlayingAction(true));
    }
  };

  const handleNextSong = () => {
    if (trackIndex === tracks.length - 1) {
      dispatch(trackIndexAction(0));
    } else {
      dispatch(trackIndexAction(trackIndex + 1));
    }
    dispatch(isPlayingAction(true));
  };

  const handlePrevSong = () => {
    if (trackIndex === 0) {
      dispatch(trackIndexAction(tracks.length - 1));
    } else {
      dispatch(trackIndexAction(trackIndex - 1));
    }
    dispatch(isPlayingAction(true));
  };

  return (
    <div className=" relative p-2 flex items-center justify-between flex-wrap min-h-max">
      <Track
        isPlaying={isPlaying}
        activeSong={tracks[trackIndex]}
        isActive={isActive}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
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
