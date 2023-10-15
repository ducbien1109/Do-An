import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import {
  isActiveAction,
  isPlayingAction,
} from "../../../../../actions/spotifyAction";
import { useDispatch } from "react-redux";

export default function InfoSongs({ isPlaying, infoSongs }) {
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    dispatch(isActiveAction(true));
    if (isPlaying) {
      dispatch(isPlayingAction(false));
    } else {
      dispatch(isPlayingAction(true));
    }
  };
  return (
    <div className="flex gap-2 mt-4">
      <div>
        <img
          className="w-[200px] rounded-2xl"
          src={infoSongs?.imageUrl}
          alt="cover"
        />
      </div>
      <div className=" justify-end flex flex-col">
        <p className="text-[20px]">{infoSongs?.type}</p>
        <h2 className="font-bold text-[40px]">{infoSongs?.name}</h2>
        {isPlaying ? (
          <FaPauseCircle
            size={35}
            className="text-[#1ed760] scale-125 hover:scale-150 hover:shadow-slate-700 hover:shadow-sm rounded-[50%] ml-3"
            onClick={handlePlayPause}
          />
        ) : (
          <FaPlayCircle
            size={35}
            className="text-[#1ed760] scale-125 hover:scale-150 hover:shadow-slate-700 hover:shadow-sm rounded-[50%] ml-3"
            onClick={handlePlayPause}
          />
        )}
      </div>
    </div>
  );
}
