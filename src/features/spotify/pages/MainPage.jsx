import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import NavBar from "../components/body/NavBar";
import SideBar from "../components/sidebar/SideBar";
import { useEffect } from "react";
import { artistsAction, playlistsAction } from "../../../actions/spotifyAction";
import getPlaylists from "../Api/getPlaylists";
import getArtists from "../Api/getArtists";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainPage() {
  const token = useSelector((state) => state.login.loginDetail?.access_token);
  const { isLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      getPlaylists(token).then(({ playlists }) => {
        const listPlaylist = playlists?.items?.map(
          ({ name, id, images, type, uri }) => {
            return { name, id, images, type, uri };
          }
        );
        dispatch(playlistsAction(listPlaylist));
      });
      getArtists(token).then(({ artists }) => {
        const listArtist = artists?.map(({ href, id, images, name, type }) => {
          return { href, id, images, name, type };
        });
        dispatch(artistsAction(listArtist));
      });
    } else {
      navigate("/login");
    }
  }, [token, dispatch, isLogin]);
  return (
    <div className=" h-[100vh] flex flex-col text-white bg-black">
      <div className=" flex min-h-[85vh] p-2 gap-2 md:flex-row flex-col">
        <SideBar />
        <div className="flex flex-col bg-[#121212] rounded-lg p-2 md:w-[65vw] lg:w-[75vw] overflow-hidden">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
