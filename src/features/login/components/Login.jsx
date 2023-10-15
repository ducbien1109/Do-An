import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction, isLoginAction } from "../../../actions/loginAction";
import { useNavigate } from "react-router-dom";

const USER_AUTH = {
  grant_type: "client_credentials",
  client_id: "29a1abb754aa4772be52b69cbcc75805",
  client_secret: "35e48d9aeba3406fab7494c9f7ac1fa9",
};
const LOGIN_API = "https://accounts.spotify.com/api/token";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    const response = await axios.post(LOGIN_API, USER_AUTH, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    dispatch(loginAction(response.data));
    dispatch(isLoginAction(true));
    navigate("/home");
  };
  // const handleClick = () => {
  //   const clientID = "29a1abb754aa4772be52b69cbcc75805";
  //   const redirectUrl = "http://localhost:3000/";
  //   const apiUrl = "https://accounts.spotify.com/authorize";
  //   const scope = [
  //     "user-read-email",
  //     "user-read-private",
  //     "user-read-playback-state",
  //     "user-modify-playback-state",
  //     "user-read-currently-playing",
  //     "user-read-playback-position",
  //     "user-top-read",
  //     "user-read-recently-played",
  //   ];
  //   window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
  //     " "
  //   )}&response_type=token&show_dialog=true`;
  // };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#1ed760] flex-col flex items-center justify-center gap-20">
      <img
        className="w-[40vw]"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <button
        className=" py-2 px-20 rounded-[5rem] bg-black text-lg text-[#49f585]"
        onClick={handleClick}
      >
        Connect to Spotify
      </button>
    </div>
  );
}
