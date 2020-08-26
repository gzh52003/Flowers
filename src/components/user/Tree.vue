<template>
  <el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>
</template>

<script>
export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '总经理',
          children: [{
            id: 5,
            label: '聘用',
          },{
            id: 6,
            label: '免职',
          },{
            id: 7,
            label: '调动',
          },{
            id: 8,
            label: '出差',
          },{
            id: 9,
            label: '调薪',
          },{
            id: 10,
            label: '升职',
          },{
            id: 11,
            label: '制定奖惩制度',
          }]
        }, {
          id: 2,
          label: '经理',
          children: [{
            id: 12,
            label: '调动'
          }, {
            id: 13,
            label: '出差'
          },{
            id: 14,
            label: '免职',
          },{
            id: 15,
            label: '制定奖惩制度',
          }]
        }, {
          id: 3,
          label: '主管',
          children: [{
            id: 16,
            label: '调动',
          },{
            id: 17,
            label: '出差',
          },{
            id: 18,
            label: '免职',
          },{
            id: 19,
            label: '制定奖惩制度',
          }]
        },{
          id: 4,
          label: '管理',
          children: [{
            id: 20,
            label: '调动'
          }, {
            id: 21,
            label: '出差'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

<style>

</style>