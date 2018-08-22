<template>
  <div class="page-layout">
    <el-breadcrumb separator="/" style="margin: 15px 0;">
      <el-breadcrumb-item v-for="item in bread">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['bread'])
  }
}
</script>
