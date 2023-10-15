import { CiUser } from "react-icons/ci";
import { isLoginAction, loginAction } from "../../../actions/loginAction";
import {
  isActiveAction,
  isPlayingAction,
  tracksAction,
} from "../../../actions/spotifyAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(isLoginAction(false));
    dispatch(loginAction({}));
    dispatch(isActiveAction(false));
    dispatch(isPlayingAction(false));
    dispatch(tracksAction([]));
    navigate("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-black p-2 rounded-xl gap-2 flex items-center"
    >
      <CiUser />
      <p>Logout</p>
    </button>
  );
}
