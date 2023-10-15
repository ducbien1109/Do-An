import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import spotifyReducer from "./spotifyReducer";

const reducers = combineReducers({
  login: loginReducer,
  spotify: spotifyReducer,
});
export default reducers;
