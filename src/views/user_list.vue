<template>
  <div class="page">
    <search-field title="高级搜索">
      asdnaskjdnsa
    </search-field>
    <div class="page-content">
      <div class="button-field">
        <el-button type="primary" size="small">添加用户</el-button>
      </div>
      <v-table
        :data="tableData"
        :columns="columns"
      ></v-table>
    </div>
  </div>
</template>

<script>
import vTable from '@/components/tools/vtable'
import searchField from '@/components/tools/searchField'

export default {
  data: () => ({
    columns: [{
      label: '日期',
      key: 'date',
      filter: 'formatDate',
      filterProps: ['yyyy/MM/dd hh:mm'],
      sortable: true
    }, {
      label: '姓名',
      key: 'name',
    }, {
      label: '地址',
      key: 'address',
    }, {
      label: '操作',
      type: 'action',
      width: '100',
      buttonInfos: [{
        name: 'detail',
        label: '编辑',
        color: 'success'
      }]
    }],

    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: ''
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }),

  components: {
    vTable, searchField
  }
}
</script>
