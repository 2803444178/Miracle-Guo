import api from '../api/index'
import {router} from '../main'
import { USER_SIGNIN,USER_SIGNOUT,USER_REG,ADMINUSER_CHAXUSER,ADMINROLE_ROLELIST,ADMINAUTH_AUTHLIST } from './types'

export const UserLogin = ({ commit }, user) => {
  api.localLogin(user).then(function (data) {
    console.log(data)
    var da2 = {};
    da2.sessionId = data.data.data.sessionId;
    da2.user = user;
    if( data.data.code == "1001") {
      alert(data.data.msg)
     router.push({ path: '/adminUser' })
      commit(USER_SIGNIN,da2);

    }else{
      alert("登录失败！")
      router.push({ path: '/login' })
    }
  })
    .catch(function (error) {
      console.log(error);
    });
};
/*
export const UserLogout = ({ commit }, data) => {
  api.localLogout(data).then(function (response) {
    commit(USER_SIGNOUT);
    window.location = '/login'
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const UserReg = ({ commit }, data) => {
  api.localReg(data).then(function (response) {
    if( response.data.type == true) {
      commit(USER_REG, response.data.token);
      window.location = '/person'
    }
  })
    .catch(function (error) {
      console.log(error);
    });
};*/

export const GetUserList = ({ commit },data) => {
  api.localGetUserList(data).then(function (response) {
    if( response.data.code == "1001") {
      commit('getUserList',response.data.data);
    }else{
      router.push({ path: '/login' })
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const setAddUser = ({commit},data)=>{
 api.localAddUser(data).then(function (response) {
   console.log(response);
   if (response.data.code){
        alert(response.data.msg)
        router.push({
            path:'/adminUser/users'
         })
   }
 })
   .catch(function (error) {
     console.log(error)
   })
}
export const userDelete =({commit},id )=>{
  api.localUserDelete(id).then(function (response) {
    if(response.data.code == '1001') {
        alert(response.data.msg)
    } else {
      alert('删除失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
export const getUser =({commit},id )=>{
  api.localGetUser(id).then(function (response) {
    console.log(response);
    if(response.data.code == '1001') {
      commit(ADMINUSER_CHAXUSER,response.data.data);
    } else {
      alert('查询失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
export const updateUser =({commit},data )=>{
  api.locolUpdateUser(data).then(function (response) {
    if(response.data.code == '1001') {
      alert(response.data.msg)
    } else {
      alert('更新失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
export const setAddUserRole = ({ commit},data)=>{
  api.locolAddUserRole(data).then(function (response) {
    if( response.data.code == "1001") {
      alert('分配成功！');
    }else{
      router.push({ path: '/login' })
    }
  }).catch(function (error) {
    console.log(error)
  })
}

export const userRoledeleteById = ({commit},data)=>{
  api.locolUserRoleDeleteById(data).then(function (response) {
    if( response.data.code == "1001") {
      alert('取消分配成功！');
    }else{
      router.push({ path: '/login' })
    }
  }).catch(function (error) {
    console.log(error)
  })
}





/*  获取角色信息接口 */


/* 调用获取角色列表信息接口 */
export const getRoleList = ({ commit },data) => {
  api.localGetRoleList(data).then(function (response) {
    if( response.data.code == "1001") {
      commit(ADMINROLE_ROLELIST,response.data.data);
    }else{
      router.push({ path: '/login' })
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}


/* 调用添加角色接口  */
export const setAddRole = ({ commit },data) => {
  api.locolAddRole(data).then(function (response) {
    if( response.data.code == "1001") {
      alert("添加成功")
      router.push({
        path:'/adminUser/roles'
      })
    }else{
      alert("添加失败，正在跳转到角色列表页面！")
      router.push({ path: '/roles' })
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}
/*  调用编辑角色 */
export const updateRole =({commit},data )=>{
  api.locolUpdateRole(data).then(function (response) {
    if(response.data.code == '1001') {
      alert("更新成功!正在跳转到角色页面~")
      router.push({
        path:'/adminUser/roles'
      })
    } else {
      alert('更新失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
/*  调用删除角色接口 */
export const roleDelete =({commit},id )=>{
  api.localRoleDelete(id).then(function (response) {
    if(response.data.code == '1001') {
      alert(response.data.msg)
    } else {
      alert('删除失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const setAllotAuth = ({ commit},data)=>{
  api.locolAddRoleAuth(data).then(function (response) {
    if( response.data.code == "1001") {
      alert('分配成功！');
    }else{
      router.push({ path: '/adminUser/roleAssignAuth' })
    }
  }).catch(function (error) {
    console.log(error)
  })
}

export const roleAuthdeleteById = ({ commit},data)=>{
  api.locolRoleAuthDeleteById(data).then(function (response) {
    if( response.data.code == "1001") {
      alert('取消分配成功');
    }else{
      router.push({ path: '/adminUser/roleAssignAuth' })
    }
  }).catch(function (error) {
    console.log(error)
  })
}


/*  获取权限信息接口 */



/* 调用获取权限列表信息接口 */
export const getAuthList = ({ commit },data) => {
  api.localGetAuthList(data).then(function (response) {
    if( response.data.code == "1001") {
      commit(ADMINAUTH_AUTHLIST,response.data.data);
    }else{
      router.push({ path: '/login' })
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const updateAuth =({commit},data )=>{
  console.log(data);
  api.locolUpdateAuth(data).then(function (response) {
    if(response.data.code == '1001') {
      alert("更新成功!正在跳转到角色页面~")
      router.push({
        path:'/adminUser/auths'
      })
    } else {
      alert('更新失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
/* 调用添加权限接口  */
export const setAddAuth = ({ commit },data) => {
  api.locolAddAuth(data).then(function (response) {
    if( response.data.code == "1001") {
      alert("添加成功")
      router.push({
        path:'/adminUser/auths'
      })
    }else{
      alert("添加失败，正在跳转到角色列表页面！")
      router.push({ path: '/roles' })
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}
export const authDelete =({commit},id )=>{
  api.localAuthDelete(id).then(function (response) {
    if(response.data.code == '1001') {
      alert(response.data.msg)
    } else {
      alert('删除失败');
    };
  })
    .catch(function (error) {
      console.log(error)
    })
}
