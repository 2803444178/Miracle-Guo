/**
 * Created by LIUXIONGFEI on 2017/6/1.
 */
import { ADMINROLE_ROLELIST } from '../types'
import api from '../../api/index'
const state = {
  roleList:{},//用户列表
  queryUser:{}//查询出来的用户
};
const mutations = {
[ADMINROLE_ROLELIST](state,data){
    state.roleList = data;
    console.log(state.roleList);
  },

};

export default {
  state,
  mutations
}

