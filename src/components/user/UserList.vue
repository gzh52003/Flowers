<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/user/userlist'}">成员列表</el-breadcrumb-item>
    </el-breadcrumb>

    <template>
      <div class="main">
        <div style="margin-top: 15px;">
          <el-input
            placeholder="请输入内容"
            v-model="search"
            @change="handleSelect"
            class="input-with-select"
            style="width:350px"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%" class="biaoge">
          <el-table-column label="#" type="index" width="80px"></el-table-column>
          <el-table-column label="Name" prop="username"></el-table-column>
          <el-table-column label="Gender" prop="gender"></el-table-column>
          <el-table-column label="Phone" prop="phone"></el-table-column>
          <el-table-column label="Email" prop="email"></el-table-column>
          <el-table-column label="Status" prop="role"></el-table-column>
          <el-table-column align="right">
            <template slot="header" :slot-scope="scope">
              <el-button type="primary" @click="addUser">添加成员</el-button>
            </template>
            <template v-slot:default="scope">
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit"
                circle
                @click="userEdit(scope.row)"
              ></el-button>
              <el-button
                size="mini"
                type="danger"
                @click="userDelete(scope.row)"
                icon="el-icon-delete"
                circle
                slot="reference"
              ></el-button>
              <el-button type="warning" icon="el-icon-s-tools" size="mini" circle @click="open"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="yema"
            @prev-click="prevClick"
            @next-click="nextClick"
            :page-sizes="[5,10,15]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </template>

  </div>
</template>


<script>
import Tree from "./Tree"
export default {
  data() {
    return {
      shuliang: 5,
      yema: 1,
      tableData: [],
      search: "",
      total:"",
      
    };
  },
  methods: {
    userEdit(row) {
      this.$router.push("/user/useredit/" + row._id);
    },
    async userDelete(row) {
      this.$confirm('是否确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async ()=>{
          await this.$request.delete("/remove/" + row._id);
          this.tableData = this.tableData.filter(item=>item._id!==row._id);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
    },
    addUser() {
      this.$router.push("/user/useradd");
    },
    async handleSelect() {
      const data = await this.$request.get("/adminList", {
        params: {
          size: 1000
        }
      });
      console.log(data);
      if (this.search === "") {
        this.tableData = data.data.data.result;
      } else {
        this.tableData = data.data.data.result.filter(
          item => item.username === this.search
        );
      }
    },
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h(Tree),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    handleSizeChange(val) {
      this.shuliang = val;
      this.handleCurrentChange();
    },
    prevClick() {
      this.yema--;
      this.handleCurrentChange();
    },
    nextClick() {
      this.yema++;
      this.handleCurrentChange();
    },
    handleCurrentChange: function(size) {
      this.yema = size;
      let $this = this;
      this.$request
        .get("/adminList", {
          params: {
            page: this.yema,
            size: this.shuliang
          }
        })
        .then(function(res) {
          res.data.data.result.forEach(item => {
            item.date = new Date().toLocaleString(item.date);
            if (!item.LinePrice) {
              item.LinePrice = item.Price;
            }
          });
          $this.tableData = res.data.data.result;
        });
    }
  },
  async created() {
    await this.$request
      .get("/adminList", {
        params: {
          page: this.yema,
          size: this.shuliang,
          total:true
        }
      })
      .then(data => {
        this.tableData = data.data.data.result;
        this.total = data.data.total
      });
  }
};
</script>

<style>
.main {
  background: #ccc;
}
.el-pagination {
  text-align: center;
}
.main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 20px 30px;
}
.block {
  margin-top: 20px;
}
</style>