<template>
  <el-card class="search-card" :body-style="{ padding: 0 }">
    <div slot="header" class="clearfix search-header">
      <span>{{ title }}</span>
      <i class="icon el-icon-plus" @click="handleClick"></i>
    </div>
    <el-collapse-transition>
      <div v-show="showField">
        <div class="body"> <!-- To fix element collapse transition bug. -->
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    showField: false
  }),

  props: {
    title: {
      type: String,
      required: false,
      default: '条件检索'
    }
  },

  methods: {
    handleClick() {
      this.showField = !this.showField
    }
  }
}
</script>
