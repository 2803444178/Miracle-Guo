import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


var baseUrl = 'http://120.76.42.203:8080/serverapi/';
var userUrl = baseUrl + "infoUser/";
var roleUrl = baseUrl + "infoRole/";
var authUrl = baseUrl + "infoAuth/";


var userRoleUrl = baseUrl + "infoUserRole/";
var roleAuthUrl = baseUrl + "infoRoleAuth/";
export default {
  name: 'api',
  data(){
    return {}
  },

  localLogin: function (data) {
    return Vue.axios({
      url: userUrl + 'login',
      method: 'post',
      data: {
        userId: data.userId,
        password: data.password
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.length - 1);
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  /*  localLogout: function (data) {
   return instance.post('/api/logout',data)
   },
   localReg: function (data) {
   return Vue.axios.post('/api/reg',data)
   }*/
  localGetUserList: function () {  //get方法的参数直接通过url传递
    //var sessionId = sessionStorage.getItem('sessionId');
    //return Vue.axios.get(userUrl+'getList?sessionId='+sessionId);
    return Vue.axios({
      url: userUrl + 'getList',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        pageNo: sessionStorage.getItem('page.pageNo'),
        pageSize: sessionStorage.getItem('page.pageSize'),
      }
    })
  },

  localAddUser: function (data) {
    return Vue.axios({
      url: userUrl + 'add',
      method: 'post',
      params: {
        userId: data.userId,
        userName: data.userName,
        sex: data.sex,
        phoneNum: data.phoneNum,
        email: data.email,
        address: data.address,
        sessionId: sessionStorage.getItem('sessionId')
      },

    })
  },
  localUserDelete: function (id) {
    return Vue.axios({
      url: userUrl + 'delete/' + id,
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },
  localGetUser: function (id) {
    return Vue.axios({
      url: userUrl + 'get/' + id,
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      },
    })
  },

  /*用户更新api*/
  locolUpdateUser: function (data) {
    return Vue.axios({
      url: userUrl + 'update',
      method: 'post',
      params: {
        id: data.id,
        userId: data.userId,
        phoneNum: data.phoneNum,
        sex: data.sex,
        phoneNum: data.phoneNum,
        email: data.email,
        address: data.address,
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },

  locolGetUserCount: function () {
    return Vue.axios({
      url: userUrl + 'count',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },

  locolInfoUserRole: function (userId) {
    alert(userId);
    return Vue.axios({
      url: userRoleUrl + 'getList',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        userId: userId,
      }
    });
  },

  locolAddUserRole: function (userRole) {
    return Vue.axios({
      url: userRoleUrl + 'add',
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        userId: userRole.userId,
        roleId: userRole.roleId,
      }
    })
  },
  locolUserRoleDeleteById: function (userRoleId) {
    return Vue.axios({
      url: userRoleUrl + 'delete/' + userRoleId,
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
      }
    })
  },


  /*  以下是角色页面的api接口 */


  /*获取角色列表信息接口*/
  localGetRoleList: function () {  //get方法的参数直接通过url传递
    return Vue.axios({
      url: roleUrl + 'getList',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        pageNo: sessionStorage.getItem('page.pageNo'),
        pageSize: sessionStorage.getItem('page.pageSize'),
      }
    })
  },
  /*角色根据条件统计数接口*/
  locolGetRoleCount: function () {
    return Vue.axios({
      url: roleUrl + 'count',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },

  /* 添加角色接口 */
  locolAddRole: function (data) {
    return Vue.axios({
      url: roleUrl + 'add',
      method: 'post',
      params: {
        name: data.name,
        code: data.code,
        desc: data.desc,
        sessionId: sessionStorage.getItem('sessionId')
      },
    })
  },
  /* 编辑角色接口 */
  locolUpdateRole: function (data) {
    return Vue.axios({
      url: roleUrl + 'update',
      method: 'post',
      params: {
        id: data.id,
        name: data.name,
        code: data.code,
        desc: data.desc,
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },
  /* 角色查询指定id角色 */
  localGetRole: function (id) {
    return Vue.axios({
      url: roleUrl + 'get/' + id,
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      },
    })
  },
  /*  角色指定id删除角色 */
  localRoleDelete: function (id) {
    return Vue.axios({
      url: roleUrl + 'delete/' + id,
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },
  /*  查询角色的权限列表接口 */
  locolInfoRoleAuth: function (roleId) {
    alert(roleId);
    return Vue.axios({
      url: roleAuthUrl + 'getList',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        roleId: roleId,
      }
    });
  },

  /* 添加角色权限接口 */
  locolAddRoleAuth: function (data) {
    return Vue.axios({
      url: roleAuthUrl + 'add',
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        authId: data.authId,
        roleId: data.roleId,
      }
    })
  },
  /* 删除角色权限接口 */
  locolRoleAuthDeleteById: function (roleAuthId) {
    return Vue.axios({
      url: roleAuthUrl + 'delete/' + roleAuthId,
      method: 'post',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
      }
    })
  },



  /*  以下是权限页面的api接口 */

  /*权限根据条件统计数接口*/
  locolGetAuthCount: function () {
    return Vue.axios({
      url: authUrl + 'count',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      }
    })
  },

  /*获取权限列表信息接口*/
  localGetAuthList: function () {  //get方法的参数直接通过url传递
    return Vue.axios({
      url: authUrl + 'getList',
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId'),
        pageNo: sessionStorage.getItem('page.pageNo'),
        pageSize: sessionStorage.getItem('page.pageSize'),
      }
    })
  },
  /* 指定id查询权限接口 */
  localGetAuth: function (id) {
    return Vue.axios({
      url: authUrl + 'get/' + id,
      method: 'get',
      params: {
        sessionId: sessionStorage.getItem('sessionId')
      },
    })
  },

  /* 编辑权限接口 */
  locolUpdateAuth: function (data) {
  return Vue.axios({
    url: authUrl + 'update',
    method: 'post',
    params: {
      id: data.id,
      name: data.name,
      code: data.code,
      desc: data.desc,
      sessionId: sessionStorage.getItem('sessionId')
    }
  })
},

  /* 添加权限接口 */
  locolAddAuth: function (data) {
  return Vue.axios({
    url: authUrl + 'add',
    method: 'post',
    params: {
      name: data.name,
      code: data.code,
      desc: data.desc,
      sessionId: sessionStorage.getItem('sessionId')
    },
  })
},

  /*  指定id删除权限 */
  localAuthDelete: function (id) {
  return Vue.axios({
    url: authUrl + 'delete/' + id,
    method: 'post',
    params: {
      sessionId: sessionStorage.getItem('sessionId')
    }
  })
},
}










