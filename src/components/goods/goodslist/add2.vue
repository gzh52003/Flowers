<template>
  <div>
    <slot name="asd">
      <el-steps :active="1" align-center>
        <el-step title="基本信息" description></el-step>
        <el-step title="商品参数" description></el-step>
        <el-step title="商品内容" description></el-step>
        <el-step title="完成" description></el-step>
      </el-steps>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>