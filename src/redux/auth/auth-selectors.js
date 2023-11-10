const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getFetchingCurrentUser,
};

export default authSelectors;