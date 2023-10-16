import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isActiveAction,
  isLoadingAction,
  isPlayingAction,
  tracksAction,
} from "../../../actions/spotifyAction";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import getArtistTopTrack from "../Api/getArtistTopTrack";
import InfoSongs from "../components/body/topcontent/InfoSongs";
import ArtistTopSongTable from "../components/body/ArtistTopSongTable";

export default function ArtistPage() {
  const { artists, isLoading, isPlaying, tracks } = useSelector(
    (state) => state.spotify
  );
  const token = useSelector((state) => state.login.loginDetail?.access_token);
  const { isLogin } = useSelector((state) => state.login);
  const [currentArtist, setCurrentArtist] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getArtistTopTrackApi = async () => {
    dispatch(isLoadingAction(true));
    await getArtistTopTrack(token, params.artistId).then((res) => {
      if (res) {
        dispatch(tracksAction(res.tracks));
      }
    });
    dispatch(isLoadingAction(false));
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      getArtistTopTrackApi();
      dispatch(isPlayingAction(false));
      dispatch(isActiveAction(false));
      const current = artists.find((artist) => artist.id === params.artistId);
      setCurrentArtist({
        name: current.name,
        type: current.type,
        imageUrl: current.images[0].url,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, isLogin]);

  if (isLoading) return <Loader />;

  return (
    <div className=" overflow-scroll">
      <InfoSongs isPlaying={isPlaying} infoSongs={currentArtist} />
      <ArtistTopSongTable tracks={tracks} />
    </div>
  );
}
