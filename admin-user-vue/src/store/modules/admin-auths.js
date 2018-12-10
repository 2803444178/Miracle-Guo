/**
 * Created by LIUXIONGFEI on 2017/6/3.
 */
import { ADMINAUTH_AUTHLIST } from '../types'
const state = {
  authList:{},//权限列表
};
const mutations = {
  [ADMINAUTH_AUTHLIST](state,data){
    state.authList = data;
    console.log(state.authList);
  },

};

export default {
  state,
  mutations
}
