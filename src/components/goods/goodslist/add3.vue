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

    <el-button type="primary" round style="margin-top:50px" @click="fasong()">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
  methods: {
    fasong() {
      let a = this.$store.state.msg.split(",");
      let b = {};
      a.forEach((item) => {
        item = item.split(":");
        if (item[1] == "") {
          this.$router.push({ path: "/add/add1" });
          this.$message.error("请输入必要的信息");
          return;
        } else {
          b[item[0]] = item[1];
        }
      });
      let $this = this;
      this.$request
        .post("http://120.24.63.27:2001/api/goods", {
          Cpmc: b.name,
          Price: b.price,
          Instro: b.mes,
          Sales: b.num,
        })
        .then(function (res) {
          if (res.data.msg == "success") {
            $this.$message({
              message: "添加成功",
              type: "success",
            });
            $this.$router.push({ path: "/goods/goodslist" });
          }
        });
    },
  },
};
</script>