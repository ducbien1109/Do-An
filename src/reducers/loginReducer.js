const initState = { loginDetail: {}, isLogin: false };
export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOGIN_DETAIL":
      return { ...state, loginDetail: action.payload };

    case "SET_IS_LOGIN":
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
}
