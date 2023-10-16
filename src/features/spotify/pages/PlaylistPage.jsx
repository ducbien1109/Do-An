import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPlaylistById from "../Api/getPlaylistById";
import {
  isActiveAction,
  isLoadingAction,
  isPlayingAction,
  playlistSelectedAction,
  tracksAction,
} from "../../../actions/spotifyAction";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import SongTablePlaylist from "../components/body/SongTablePlaylist";
import InfoSongs from "../components/body/topcontent/InfoSongs";

export default function PlaylistPage() {
  const { playlistSelected, isLoading, isPlaying } = useSelector(
    (state) => state.spotify
  );
  const token = useSelector((state) => state.login.loginDetail?.access_token);
  const { isLogin } = useSelector((state) => state.login);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getPlaylistApi = async () => {
    dispatch(isLoadingAction(true));
    await getPlaylistById(token, params.playlistId).then((res) => {
      if (res) {
        const playlistSelected = {
          id: res.id,
          name: res.name,
          imageUrl: res.images[0].url,
          tracks: res.tracks.items,
          uri: res.uri,
          type: res.type,
        };
        dispatch(playlistSelectedAction(playlistSelected));
        const tracks = playlistSelected?.tracks?.map(({ track }) => track);
        dispatch(tracksAction(tracks));
      }
    });
    dispatch(isLoadingAction(false));
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      getPlaylistApi();
      dispatch(isPlayingAction(false));
      dispatch(isActiveAction(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, isLogin]);

  if (isLoading) return <Loader />;

  return (
    <div className=" overflow-scroll">
      <InfoSongs isPlaying={isPlaying} infoSongs={playlistSelected} />
      <SongTablePlaylist tracks={playlistSelected?.tracks} />
    </div>
  );
}
