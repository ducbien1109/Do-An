import { useNavigate } from "react-router-dom";
import { isShowSearch } from "../../../../../actions/spotifyAction";
import { useDispatch } from "react-redux";

export default function SideBarLink({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <li
      className=" cursor-pointer target:bg-slate-300 rounded-lg hover:bg-slate-900 p-1 flex gap-2 min-w-max"
      onClick={() => {
        dispatch(isShowSearch(false));
        navigate(`/playlist/${item.id}`);
      }}
    >
      <div className="w-[50px] h-[50px]">
        <img
          className="  rounded-[50%]"
          src={`${item.images[0].url}`}
          alt="avatar"
        />
      </div>
      <div className="h-[50px] min-w-max">
        <p>{item.name}</p>
        <p className="text-[12px]">{item.type}</p>
      </div>
    </li>
  );
}
