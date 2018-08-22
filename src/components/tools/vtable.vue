<template>
  <div class="table-container">
    <el-table
      :data="paginationData"
      :border="border"
      :stripe="stripe"
      style="width: 100%"
    >
      <el-table-column
        v-for="(column, index) in columns"
        :prop="column.key"
        :label="column.label"
        :width="column.width"
        :sortable="column.sortable"
        :key="index"
        align="center"
      >
        <template slot-scope="scope">
          <img v-if="column.type === 'image'" :src="scope.row[column.key]" :alt="scope.row[column.key]">
          <div class="action-con" v-else-if="column.type === 'action'">
            <el-button
              v-for="button in column.buttonInfos"
              :key="button.name"
              size="mini"
              :type="button.color"
              @click="handleButtonClick(button.name, scope.row)">{{ button.label }}</el-button>
          </div>
          <span v-else>{{ scope.row[column.key] | filter(column.filter, column.filterProps) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, sizes"
        :page-sizes="[2,10,20,50,100,500,1000]"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ROW_SELECT } from '@/store/tableActions'

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => ([])
    },

    columns: {
      type: Array,
      required: true,
      default: () => ([])
    },

    border: {
      type: Boolean,
      required: false,
      default: false
    },

    stripe: {
      type: Boolean,
      required: false,
      default: true
    },

    defaultPageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },

  data() {
    return {
      currentPage: 1,
      pageSize: this.defaultPageSize,
    }
  },

  computed: {
    paginationData() {
      let tempData = []
      let pageTotal = this.data.length,
        pageFirstCount = this.pageSize * (this.currentPage - 1),
        maxCount = pageTotal - pageFirstCount < this.pageSize ? pageTotal : (pageFirstCount + this.pageSize)

      for (let i = pageFirstCount; i < maxCount; i++) {
        tempData.push(this.data[i])
      }
      return tempData
    },

    total: function() {
      return this.data.length
    }
  },

  methods: {
    ...mapActions([ROW_SELECT]),
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      if (this.backPaging) {
        this.$emit('handleCurrentChange', currentPage)
      }
    },

    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      if (this.backPaging) {
        this.$emit('handleSizeChange', pageSize)
      }
    },

    handleButtonClick(button, row) {
      this.$emit('buttonClick', {
        button: button,
        data: Object.assign({}, row)
      })
    }
  }
}
</script>

<style lang="less">
.table-container{
  .pagination{
    padding: 20px 0 0;
    text-align: right;
  }
}
</style>
