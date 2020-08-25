<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/user/userlist'}">成员列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/user/useradd'}">添加成员</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      :rules="rules"
      label-width="100px"
      class="demo-dynamic"
      
    >
      <el-form-item label="姓名" prop="username" >
        <el-input v-model="dynamicValidateForm.username"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio v-model="dynamicValidateForm.gender" label="男">男</el-radio>
        <el-radio v-model="dynamicValidateForm.gender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="tel" v-model="dynamicValidateForm.phone"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="role">
        <el-select v-model="dynamicValidateForm.role">
          <el-option label="管理" value="admin"></el-option>
          <el-option label="经理" value="manager"></el-option>
          <el-option label="主管" value="executive_director"></el-option>
          <el-option label="总经理" value="general_manager"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item labev-model="dynamicValidateForm.role" label="密码" prop="pass">
        <el-input type="password" v-model="dynamicValidateForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="dynamicValidateForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }else if(value.length < 2 || value.length > 10){
        return callback(new Error("姓名为2至5个字符"))
      }else{
        callback()
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error("手机号码有误"));
      }else{
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 12){
          callback(new Error('密码长度为6至12位'));
        }else{
          if (this.dynamicValidateForm.checkPass !== '') {
            this.$refs.dynamicValidateForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.dynamicValidateForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      dynamicValidateForm: {
        username: "",
        gender: "male",
        email: "",
        role: "admin",
        phone: "",
        pass:"",
        checkPass:""

      },
      rules: {
        username: [{ required: true,validator: validateName, trigger: "blur" }],
        phone: [{ required: true,validator: checkPhone, trigger: "blur" }],
        pass: [{ min: 6,max: 12,required: true,validator: validatePass, trigger: 'blur' }],
        checkPass: [{ min: 6,max: 12,required: true,validator: validatePass2, trigger: 'blur' }],
        radio: [{ required: true, trigger: 'blur' }],
      }
    };
  },
  methods: {
    async submitForm() {
      this.$refs["dynamicValidateForm"].validate(async (valid) => {
        if (valid) {
            const {dynamicValidateForm} = this
            console.log(this.dynamicValidateForm);
          const {data} = await this.$request.post("/reg",{
              ...dynamicValidateForm
          });
          if(data.msg === "success"){
              this.$message({
                type: "success",
                message: "添加成功",
            });
            this.$router()
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-form-item {
  margin-bottom: 16px;
  width: 700px;
}
.el-form .el-form-item__content {
  width: 70%;
}
.el-form {
  width: 600px;
}
.el-form .el-form-item__content {
  width: 70% !important;
}
</style>