import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/login'
import adminUsers from  './modules/admin-users'
import adminRoles from './modules/admin-roles'
import adminAuths from './modules/admin-auths'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login,
    adminUsers,
    adminRoles,
    adminAuths
  },
  strict: debug
})
