<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/adminmanage/adminlist'}">订单列表</el-breadcrumb-item>
    </el-breadcrumb>
      orderlist
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>