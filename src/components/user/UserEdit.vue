<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/user/userlist'}">成员列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/user/useradd'}">编辑成员</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位" prop="role">
        <el-select v-model="ruleForm.role">
          <el-option label="管理" value="admin"></el-option>
          <el-option label="经理" value="manager"></el-option>
          <el-option label="主管" value="executive_director"></el-option>
          <el-option label="总经理" value="general_manager"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userid: "",
      ruleForm: {
        username: "",
        password: "",
        gender: "male",
        role: "admin",
        phone:"",
        email:""
      },
      rules: {
        password: [
          {
            min: 6,
            max: 12,
            message: "密码长度必须在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid) => {
        if (valid) {
            const {userid,ruleForm} = this
          const {data} = await this.$request.put("/updata/"+userid,{
              ...ruleForm
          });
          if(data.msg === "success"){
              this.$message({
                type: "success",
                message: "修改成功",
            });
            this.$router.replace('/user/userlist');
          }
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    
  },
  async created() {
    const { id } = this.$route.params;
    // console.log(this.$route.params);
    this.userid = id;
    const {data} = await this.$request.get("/adminList",{
      params:{
        size:1000,
        total:true
      }
    });
    const result = data.data.result.filter(item=>item._id === id)
    // console.log(result,);
    Object.assign(this.ruleForm,result[0])

  },
};
</script>