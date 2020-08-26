<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="收货人姓名" prop="username">
      <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input type="phone" v-model="ruleForm.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="省市区/县" prop="省市区">
      <div class="block">
        <el-cascader
          v-model="jilian"
          :options="options"
          :props="{ expandTrigger: 'click' }"
          @change="handleChange"
        ></el-cascader>
        <!-- <el-cascader
            ref="cascaderAddr"
            :options="options"
            change-on-select
            v-model="form.areaCode"
            @blur="handleAddressFun"
        ></el-cascader> -->
      </div>
    </el-form-item>
    <el-form-item label="详细地址" prop="detailed_address">
      <el-input type="text" v-model="ruleForm.detailed_address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import citys from "../../utils/citys.json";
import Bus from "../../utils/Bus";
export default {
  data() {
    var validatePass1 = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (value.length < 2 || value.length >= 10) {
        return callback(new Error("姓名不得少于两个字符或大于10个"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (value.length !== 11) {
        callback(new Error("请输入正确手机号"));
      } else if (value.length === 7) {
        callback(new Error("座机请加区号"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (value.length < 5) {
        return callback(new Error("不得少于五个字"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        phone: "",
        detailed_address: "",
      },
      rules: {
        username: [{ validator: validatePass1, trigger: "blur" }],
        phone: [{ validator: validatePass2, trigger: "blur" }],
        detailed_address: [{ validator: validatePass3, trigger: "blur" }],
      },
      jilian: [],
      options: citys,
      orderId: "",
    };
  },
  methods: {
    submitForm(formName) {
  
      this.$refs[formName].validate(async (valid) => {
     if(this.ruleForm.username !== '' || this.ruleForm.phone!== '' || this.jilian !== ''){
         return false
     }
      switch(true){
        case !this.ruleForm.username:
          case !this.ruleForm.phone:
            case !this.ruleForm.jilian:

      }

        if(valid) {
          console.log(this.ruleForm.username)
           await this.$request.put("/order/" + this.orderId, {
            personalName:this.ruleForm.username,
            personalPhone:this.ruleForm.phone,
            personalDizhi:this.jilian+this.ruleForm.detailed_address,
          });
          this.render()
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

        handleChange(data){

            let newdata = this.options
         
           this.jilian = data.map(function (value,) {
                for (var itm of newdata) {
                    console.log(itm.value)
                    if (itm.value == value) { newdata = itm.children; return itm.label; }
                }

                return null;
            }).join();
   
        }
  },
  mounted() {
    Bus.$on("orderId", (id) => {
      this.orderId = id;
      console.log(this.orderId, "更新");
    });
  
  },
 

};
</script>
<style>
/* .el-message-box__wrapper .el-message-box {
  width: 50%;
} */
</style>