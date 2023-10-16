import { useEffect, useState } from "react";
import search from "../Api/search";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  isActiveAction,
  isPlayingAction,
  isShowSearch,
  trackIndexAction,
  tracksAction,
} from "../../../actions/spotifyAction";
import Section from "../components/body/bottom/Section";

export default function SearchPage() {
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);
  const token = useSelector((state) => state.login.loginDetail?.access_token);
  const { isLogin } = useSelector((state) => state.login);

  const { tracks } = useSelector((state) => state.spotify);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      search(token, params.searchQuery).then(
        ({ playlists, artists, tracks }) => {
          setArtists(artists?.items);
          setPlaylists(playlists?.items);
          dispatch(tracksAction(tracks?.items));
          dispatch(trackIndexAction(0));
        }
      );
      dispatch(isPlayingAction(false));
      dispatch(isActiveAction(false));
    }
  }, [token, params, dispatch, isLogin]);
  const handlePlay = (index) => {
    dispatch(trackIndexAction(index));
    dispatch(isPlayingAction(true));
    dispatch(isActiveAction(true));
  };

  return (
    <div className=" overflow-scroll">
      <div className="flex gap-6 items-start h-[40vh] ">
        <div className="w-[40%] ">
          <p className="font-bold sm:text-4xl px-4 mb-2 text-2xl">Top Result</p>
          <div
            onClick={() => {
              navigate(`/artist/${artists[0]?.id}`);
              dispatch(isShowSearch(false));
            }}
            className=" bg-slate-900 p-4 rounded-[15px] hover:bg-slate-700 cursor-pointer"
          >
            <img
              className="w-[100px] rounded-full"
              src={artists[0]?.images[0]?.url}
              alt="cover"
            />
            <p className="font-bold text-xl">{artists[0]?.name}</p>
            <p>{artists[0]?.type}</p>
          </div>
        </div>
        <div>
          <p className="font-bold sm:text-4xl mb-2 text-2xl">Songs</p>
          <ul className="overflow-scroll h-[30vh]">
            {tracks?.map(({ album, name }, index) => (
              <li
                key={index}
                className="flex p-1 items-center gap-4  hover:bg-slate-800 cursor-default"
                onClick={() => handlePlay(index)}
              >
                <img
                  src={album?.images[0]?.url}
                  alt="cover"
                  className="w-[50px]"
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Section
          listCard={playlists}
          title={"Playlists"}
          toPage={"/playlist"}
        />
      </div>
      <div>
        <Section listCard={artists} title={"Artists"} toPage={"/artist"} />
      </div>
    </div>
  );
}
