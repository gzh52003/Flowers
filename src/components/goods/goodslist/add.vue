<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goods/goodslist'}">商品列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/add'}">添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addgood-box" style="height:100%">
      <div slot="asd"></div>

      <el-row class="tac">
        <el-col :span="5">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo add_from"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/add/add1">
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="/add/add2" class="add">
              <span slot="title">商品参数</span>
            </el-menu-item>
            <el-menu-item index="/add/add3" class="nei">
              <span slot="title">商品内容</span>
            </el-menu-item>
            <el-menu-item index="/add/add4" class="fin">
              <span slot="title">完成</span>
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="15">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      methods: {
        tianjia: function () {
          console.log("a");
          this.$router.push({ path: "/add/add2" });
        },

        // handleSelect(key, keyPath) {
        //   alert("asd");
        //   console.log(key, keyPath);
        // },

        handleSelect() {
          alert("asd");
        },

        handleOpen() {},
        handleClose() {},
      },
    };
  },
};
</script>


<style >
.addgood-box {
  margin-top: 20px;
  background: #fff;
  padding: 16px;
  width: 76vw;
  height: 64vh;
}
.addgood-box .add_from {
  border: none;
}
</style>