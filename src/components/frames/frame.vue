<template>
  <el-container>
    <el-header>
      <head-bar v-on:sidebar="handleSidebar"></head-bar>
    </el-header>
    <el-container>
      <el-aside width="280px">
        <side-bar :is-collapse="isCollapse"></side-bar>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headBar from './headbar'
import sideBar from './sidebar'
export default {
  data: () => ({
    isCollapse: false
  }),

  methods: {
    handleSidebar(isCollapse) {
      this.isCollapse = isCollapse
    }
  },

  components: {
    headBar, sideBar
  }
}
</script>

<style>
</style>
