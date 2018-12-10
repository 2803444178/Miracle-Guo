/**
 * Created by LIUXIONGFEI on 2017/5/22.
 */
import { ADMINUSER_USERSADD,ADMINUSER_CHAXUSER } from '../types'
import api from '../../api/index'
const state = {
    usersList:{},//用户列表
    queryUser:{}//查询出来的用户
};
const mutations = {
  getUserList(state,data){
      state.usersList = data;
  },
  [ADMINUSER_CHAXUSER](state,data){
    state.queryUser = data;
    console.log("state.queryUser:",state);
  },
  getcountData(){
    api.locolGetCount().then(function (response) {
      if(response.data.code == '1001') {
        console.log(response.data)
      } else {
        alert('查询失败');
      };
    })
      .catch(function (error) {
        console.log(error)
      })
  }
};

export default {
  state,
  mutations
}

