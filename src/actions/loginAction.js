export function loginAction(data) {
  return {
    type: "SET_LOGIN_DETAIL",
    payload: data,
  };
}
export function isLoginAction(isLogin) {
  return {
    type: "SET_IS_LOGIN",
    payload: isLogin,
  };
}
