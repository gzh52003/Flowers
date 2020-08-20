<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/adminmanage/rolelist'}">角色列表</el-breadcrumb-item>
        </el-breadcrumb>
      roleList
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>