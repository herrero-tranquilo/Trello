//VUEX STORE GETTERS
export default {
  isAuth(state) {
    return !!state.token;
  }
};
