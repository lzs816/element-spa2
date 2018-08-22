<template>
  <aside class="aside">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <template v-for="(item, index) in routers">
        <el-submenu v-if="item.subRouters" :key="index" :index="item.routerPath">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="subItem in item.subRouters" :index="subItem.routerPath" :key="subItem.routerPath">
            {{ subItem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.routerPath" :key="index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  data: () => ({
    routers: [{
      name: 'Dashboard',
      icon: 'iconfont icon-index-on',
      routerPath: 'index',
    },
    {
      name: '人员管理',
      icon: 'iconfont icon-renyuanguanli',
      routerPath: 'userList',
      active: false,
      subRouters: [{
        name: '用户列表',
        routerPath: 'userList'
      },
      {
        name: '部门列表',
        routerPath: 'deptList'
      },
      {
        name: '角色列表',
        routerPath: 'roleList',
      },
      {
        name: '权限列表',
        routerPath: 'privilegeList'
      },
      {
        name: '权限组列表',
        routerPath: 'privilegeGroupList'
      }]
    }]
  })
}
</script>

<style lang="less">
.aside{
  height: 100%;
  overflow-y: scroll;
  .el-menu{
    height: 100%;
    .iconfont{
      vertical-align: middle;
      margin-right: 8px;
      width: 24px;
      text-align: center;
      font-size: 17px;
    }
  }
}
</style>
