<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/adminmanage/adminlist'}">权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="adminContent">
      <el-table :data="tableData" :stripe="true" border style="width: 100%;padding:30px">
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <template :slot-scope="scope">
          <el-table-column prop="role"  label="职位" width="180"></el-table-column>
        </template>
          <el-table-column prop="isuse" label="使用后台" width="120">
            <template>
            <i class="el-icon-success"></i>
            </template>
          </el-table-column>
          <el-table-column prop label="指定奖惩制度" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role=== 'manager'||scope.row.role=== 'general_manager'||scope.row.role=== 'executive_director'" ></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
          <el-table-column prop label="调动人员" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role==='general_manager'||scope.row.role=== 'manager'||scope.row.role=== 'executive_director'"></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
          <el-table-column prop="isuse" label="出差" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role==='general_manager'||scope.row.role=== 'manager'||scope.row.role=== 'executive_director'||scope.row.role=== 'admin'"></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
          <el-table-column prop="isuse" label="聘用" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role==='general_manager'||scope.row.role=== 'manager'"></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
          <el-table-column prop="isuse" label="调薪" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role==='general_manager'"></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
          <el-table-column prop="isuse" label="升职" width="120">
             <template scope="scope">
            <i class="el-icon-success" v-if="scope.row.role==='general_manager'"></i>
            <i class="el-icon-error" v-else></i>
            <!-- <i :class="scope.row.icon"></i> -->
            </template>
          </el-table-column>
        
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      yema: 1,
      shuliang: 1000,
      tableData: []
    };
    
  },
  methods: {},  
  async created() {
    await this.$request
      .get("/adminList", {
        params: {
          page: this.yema,
          size: this.shuliang
        }
      })
      .then(data => {
        let dataArr = data.data.data.result;
        dataArr.forEach(item=>{
          if(item.role === "general_manager"||item.role === "manager"){
            item.icon = "el-icon-success"
          }else{
            item.icon = "el-icon-error"
          }
        })
        this.tableData = dataArr;
        
      });
    document.querySelector(".el-table__body-wrapper");
  }
};
</script>

<style>
.el-icon-success {
  color: #58bc58;
}
.el-icon-error {
  color: #ccc;
}
</style>