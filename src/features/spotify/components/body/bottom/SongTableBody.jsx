import { useDispatch } from "react-redux";
import {
  isActiveAction,
  isPlayingAction,
  trackIndexAction,
} from "../../../../../actions/spotifyAction";

export default function SongTableBody({
  index,
  imgUrl,
  songName,
  artistName,
  addedDate,
  duration,
}) {
  const dispatch = useDispatch();
  const convertDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  const handlePlay = (index) => {
    dispatch(trackIndexAction(index));
    dispatch(isPlayingAction(true));
    dispatch(isActiveAction(true));
  };
  return (
    <tr
      className="text-center hover:bg-slate-800 cursor-default"
      key={index}
      onClick={() => handlePlay(index)}
    >
      <td>{index + 1}</td>
      <td className="text-left flex gap-3 items-center">
        <img src={imgUrl} alt="cover" className="w-[50px]" />
        {songName}
      </td>
      <td>{artistName}</td>
      {addedDate && <td>{addedDate}</td>}

      <td>{convertDuration(duration)}</td>
    </tr>
  );
}
