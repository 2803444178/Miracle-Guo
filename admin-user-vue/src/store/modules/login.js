import { USER_SIGNIN,USER_SIGNOUT,USER_REG } from '../types'

const state = {
  sessionId:null,
  user:null
};

const mutations = {
  [USER_SIGNIN](state, data) {
    sessionStorage .setItem("sessionId",data.sessionId);
    state.user = data.user
  },
  [USER_SIGNOUT](state) {
    localStorage.removeItem('user');
    state.user = null;
  },
  [USER_REG](state, user) {
    localStorage.setItem('user',JSON.stringify(user));
    state.user = user
  }
}

export default {
  state,
  mutations
}
