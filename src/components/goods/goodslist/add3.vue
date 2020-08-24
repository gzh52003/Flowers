<template>
  <div>
    <slot name="asd">
      <el-steps :active="2" align-center>
        <el-step title="基本信息" description></el-step>
        <el-step title="商品参数" description></el-step>
        <el-step title="商品内容" description></el-step>
        <el-step title="完成" description></el-step>
      </el-steps>
    </slot>

    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      show-word-limit
      resize="none"
      autosize
    ></el-input>

    <el-button type="primary" round style="margin-top:50px" @click="fasong">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
  methods: {},
};
</script>