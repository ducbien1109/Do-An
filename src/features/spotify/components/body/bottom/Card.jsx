import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isShowSearch } from "../../../../../actions/spotifyAction";

export default function Card({ card, toPage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        navigate(`${toPage}/${card.id}`);
        dispatch(isShowSearch(false));
      }}
      className="flex flex-col gap-2 justify-center sm:w-[190px] sm:h-[230px] p-3 bg-slate-900 rounded-lg hover:bg-slate-700 cursor-pointer w-[170px] h-[200px]"
    >
      <div className=" overflow-hidden h-[200px]">
        <img
          src={
            card?.images[0]?.url
              ? card?.images[0]?.url
              : "https://play-lh.googleusercontent.com/chmvIO5IT79WenpTg6sSbX6zKulry4Lm9AKN7Vf1dHCiLQQSGzz1LxiAOpqUEzSbibE"
          }
          alt="card"
        />
      </div>
      <h5 className="font-bold overflow-hidden">{card.name}</h5>
    </div>
  );
}
