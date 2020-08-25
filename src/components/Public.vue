<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="12" style="vertical-al">
          <div class="logo">
            <img
              src="http://qfzs.static.1000phone.net/img/2020-03-15/30954d0460ba1daa6a5166ffd02bd443.jpg"
              alt
            />
          </div>Flowers后台管理系统
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple" style="text-align:right">
            <el-button type="success" size="small" round @click="tuichu">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :style="'width:' +button_w + 'px'">
        <!-- <el-radio-group v-model="isCollapse">
          <el-radio-button :label="true">收起</el-radio-button>
          <el-radio-button :label="false">展开</el-radio-button>
        </el-radio-group>-->
        <el-button
          type="success"
          plain
          icon="el-icon-more"
          @click="change()"
          :style="'width:' +button_w + 'px'"
        ></el-button>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="changemenu"
          :collapse="isCollapse"
          background-color="gray"
          text-color="#fff"
          active-text-color="#58bc58"
          router
        >
          <template v-for="(item) in menu">
            <el-menu-item :index="item.path" v-bind:key="item.path" v-if="!item.submenu">
              <i :class="item.icon" style="color:#fff"></i>
              <span slot="title">{{item.text}}</span>
            </el-menu-item>
            <el-submenu :index="item.path" v-else :key="item.path">
              <template v-slot:title>
                <i :class="item.icon" style="color:#fff"></i>
                <span slot="title">{{item.text}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index="item.path+sub.path"
                  :key="sub.path"
                  v-for="sub in item.submenu"
                  style="min-width: 198px;"
                >{{sub.text}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>-->
        <div style="padding:15px 0">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/home",
      menu: [
        {
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home",
        },
        {
          text: "成员管理",
          path: "/user",
          icon: "el-icon-s-custom",
          submenu: [
            {
              text: "成员列表",
              path: "/userlist",
            },
          ],
        },
        {
          text: "权限管理",
          path: "/adminmanage",
          icon: "el-icon-s-check",
          submenu: [
            {
              text: "权限列表",
              path: "/adminlist",
            },
          ],
        },
        {
          text: "商品管理",
          path: "/goods",
          icon: "el-icon-s-goods",
          submenu: [
            {
              text: "商品列表",
              path: "/goodslist",
            },
            {
              text: "分类参数",
              path: "/goodsmsg",
            },
            {
              text: "商品分类",
              path: "/goodssort",
            },
          ],
        },
        {
          text: "订单管理",
          path: "/order",
          icon: "el-icon-s-order",
          submenu: [
            {
              text: "订单列表",
              path: "/orderlist",
            },
          ],
        },
        {
          text: "数据统计",
          path: "/data",
          icon: "el-icon-s-data",
        },
      ],
      currentIndex: 0,
      isCollapse: true,
      button_w: 66,
    };
  },
  methods: {
    changemenu(path) {
      this.activeIndex = path;
    },

    // 改变开关
    change() {
      // alert(this.kaiguan);
      this.isCollapse = !this.isCollapse;
      if (this.button_w === 66) {
        this.button_w = 200;
      } else if (this.button_w === 200) {
        this.button_w = 66;
      }
    },

    // 退出
    tuichu() {
      // console.log("a");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgb(236, 235, 235);
  padding: 0;
}
.el-menu--collapse {
  height: calc(100% - 40px);
}
.el-menu-vertical-demo .el-icon-s-order {
  color: #58bc58;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: calc(100% - 40px);
}
.header {
  background-color: rgba(128, 128, 128, 0.904);
  color: #fff;
  font-size: 24px;
  line-height: 60px;
}
.el-container,
.el-aside {
  height: 100%;
}
.is-active i {
  color: inherit !important;
}
.is-active span {
  font-weight: bolder;
}
.logo {
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: middle;
  padding-left: 44px;
  margin-right: 10px;
}
.logo img {
  width: 100%;
  height: 100%;
  transform: translateY(-6px) scale(1.2);
  border-radius: 50%;
}
</style>
