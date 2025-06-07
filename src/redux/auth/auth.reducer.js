export default {
  logout: state => {
    state.user = null;
    state.isLoggedIn = false;
    localStorage.removeItem('authToken');
  },
};
