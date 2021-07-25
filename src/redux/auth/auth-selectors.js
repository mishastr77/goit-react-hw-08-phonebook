const getIsAuthenticated = (state) => state.auth.isLogin;

const getUseremail = (state) => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUseremail,
};
