<template>
  <div id="app">
    <div class="box">
      <div class="box1">
        <el-image :src="src">
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label prop="name">
          <el-input v-model="ruleForm.name" class="user"></el-input>
        </el-form-item>
        <el-form-item label prop="password">
          <el-input v-model="ruleForm.password" type="password" class="pass"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button>zhuc -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",

      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6到 12 个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user = document.querySelector(".user input").value;
          let pass = document.querySelector(".pass input").value;
          let $this = this;
          this.$request
            .post("http://120.24.63.27:2001/api/login", {
              username: user,
              password: this.$md5(pass + "laoxie"),
            })
            .then(function (res) {
              if (res.data.msg === "success") {
                $this.$router.push({ path: "/home" });
              } else {
                document.querySelector(".user input").value = "";
                document.querySelector(".pass input").value = "";
                alert("输入信息错误");
              }
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>



<style>
#app {
  /* background-color: slateblue; */
  background-image: url("/hua.gif");
  background-size: 50% 100%;

  /* background-image: url("/favicon.ico"); */
  /* background-image: "http://qfzs.static.1000phone.net/img/2020-03-15/30954d0460ba1daa6a5166ffd02bd443.jpg"; */
  width: 100vw;
  height: 100vh;
}

.box {  
  width: 400px;
  height: 270px;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.box1 {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: inline-block;
}
.box1 {
  background-color: white;
  position: relative;
  left: 146px;
  top: -46px;
  width: 96px;
  height: 96px;
}
.el-image {
  width: 96px;
  height: 96px;
}
.box1 img {
  width: 88px;
  height: 88px;
  display: inline-block;
  margin: auto;
  position: relative;
  left: 4px;
  top: 4px;
  border-radius: 50%;
}

.el-form .el-form-item__content {
  position: relative;
  font-size: 14px;
  display: block;
  width: 88%;
  margin: 0 auto 10px !important;
}

.btn {
  position: absolute;
  right: 0;
  bottom: -20px;
}
.demo-ruleForm{
  width:100%;
}
.is-required{
  width:100%;
}
.el-form-item{
  width: 100%;
}
</style>