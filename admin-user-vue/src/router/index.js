import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import adminUser from '../pages/adminUser.vue'
import Login from '../pages/login.vue'
import userIndex from '../components/adminUaerPages/userIdex.vue'
import  users from  '../components/adminUaerPages/users.vue'
import  roles from  '../components/adminUaerPages/roles.vue'
import auths from '../components/adminUaerPages/auths.vue'

import  usersAddInput from  '../components/adminUaerPages/components/usersAddInput.vue'
import  editUser from  '../components/adminUaerPages/components/editUser.vue'
import  userAssignRoles from  '../components/adminUaerPages/components/userAssignRoles.vue'

import roleAdd from  '../components/adminUaerPages/components/roleAdd.vue'
import editRole from  '../components/adminUaerPages/components/editRole.vue'
import roleAssignAuth from  '../components/adminUaerPages/components/roleAssignAuth.vue'



import authAddInput from  '../components/adminUaerPages/components/authAddInput.vue'
import edlitAuth from  '../components/adminUaerPages/components/edlitAuth.vue'

Vue.use(Router)

export default new Router({
  mode:'history',//去掉地址栏的 # 标识
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/adminUser',
      component: adminUser,
      children:[
        {
          path:'/',
          component:userIndex,
        },
        {
          path:'users',
          component:users

        },
        {
          path:'tableUserAddInput',
          component:usersAddInput
        },
        {
          path:'editUser',
          component:editUser
        },
        {
          path:'userAssignRoles',
          component:userAssignRoles
        },
        {
          path:'roles',
          component:roles
        },
        {
          path:'roleAdd',
          component:roleAdd
        },
        {
          path:'editRole',
          component:editRole
        },
        {
          path:'roleAssignAuth',
          component:roleAssignAuth
        },
        {
          path:'auths',
          component:auths
        },
        {
          path:'authAddInput',
          component:authAddInput
        },
        {
          path:'edlitAuth',
          component:edlitAuth
        }

      ]
    }
  ]
})
