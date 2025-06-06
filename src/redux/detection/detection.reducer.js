export default {
  setUserImage: (state, action) => {
    state.userImgSrc = action.payload;
  },
  resetUserImage: state => {
    state.userImgSrc = null;
  },
  resetResult: state => {
    state.result = null;
  },
};
