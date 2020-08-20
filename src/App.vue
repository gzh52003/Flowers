<template>
  <div id="app">
    <nav>
      <ul>
        <li
          v-bind:key="item.path"
          class=""
          v-for="(item,idx) in menu"
          v-on:click="goto(item.path,idx)"
          :class="{current:currentIndex === idx}"
        >
          <!-- <router-link :to="item.path" active-class="current" exact-active-class="current" event="mouseover">{{item.text}}</router-link> -->
          {{item.text}}
        </li>
      </ul>
    </nav>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="gray"
    >
      <el-menu-item  :index="item.path"  v-bind:key="item.path" v-for="(item) in menu">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
      
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          text: "首页",
          path: "/home"
         
        },
        {
          text: "用户管理",
          path: "/user"
        },
        {
          text: "商品管理",
          path: "/goods"
        },
        {
          text: "订单管理",
          path: "/order"
        }
      ],
      currentIndex: 0,
      isCollapse: true
    }

  },
  methods: {
    goto(path, idx) {
      // 只有注入实例才有这个方法实现路由跳转
      this.$router.push(path);
      this.currentIndex = idx;
    }
  }
};
</script>

<style>
.current {
  color: #58bc58;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  
</style>
