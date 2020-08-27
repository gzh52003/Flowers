<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goods/goodslist'}">商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="goodlist-box" style="background:#fff  ;padding:10px;margin-top:16px">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple" style="display:inline-block;margin-right:20px">
            <el-input
              placeholder="请输入内容(名称)"
              v-model="search"
              class="input-with-select goodlist-search"
              clearable:true
            >
              <el-button slot="append" icon="el-icon-search" type="primary" round></el-button>
            </el-input>
          </div>
          <el-button type="primary" @click="tianjiagoods">添加商品</el-button>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

      <!-- <template> -->
      <el-table
        :data="tableData.filter(data => !search || data.Cpmc.toLowerCase().includes(search.toLowerCase()))"
        border
        style=" margin-top:20px;text-align:center"
        class="goodstable"
      >
        <el-table-column type="index" :index="indexMethod" label=" " width="80"></el-table-column>
        <el-table-column prop="Cpmc" label="商品名称" width="280"></el-table-column>
        <el-table-column prop="Price" label="商品价格(元)" width="100"></el-table-column>
        <el-table-column prop="LinePrice" label="商品原价(元)" width="100"></el-table-column>
        <el-table-column prop="Sales" label="销售数量" width="80"></el-table-column>
        <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="dothis" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              style="margin-right:6px"
              @click="handleEdit( scope.row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete( scope.row)"
            ></el-button>
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
          :page-sizes="[5,10,15,20]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      search: "",
      tableData: [],
      shuliang: 5,
      yema: 1,
      total: 400,
    };
  },
  methods: {
    tianjiagoods() {
      this.$router.push({ path: "/add/add1" });
    },
    indexMethod(index) {
      return index + 1;
    },

    handleCurrentChange: function (size) {
      this.yema = size;
      let $this = this;
      this.$request
        .post("http://120.24.63.27:2001/api/goods/list", {
          page: this.yema,
          size: this.shuliang,
          total: this.yema,
        })
        .then(function (res) {
          $this.total = res.data.total;
          res.data.data.result.forEach((item) => {
            // console.log(item);
            item.date = new Date().toLocaleString(item.date);
            if (!item.LinePrice) {
              item.LinePrice = item.Price;
            }
          });
          $this.tableData = res.data.data.result;
          // console.log($this.tableData);
        });
    },

    // 上一页
    prevClick() {
      if (this.yema > 1) {
        this.yema--;
      }
    },

    nextClick() {
      this.yema = this.yema + 1;
      console.log(this.yema);
    },

    handleSizeChange(size) {
      this.shuliang = size;
      this.handleCurrentChange(size);
    },

    // 删除
    handleDelete(row) {
      // console.log(row._id);
      let $this = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$request
            .delete("http://120.24.63.27:2001/api/goods/" + row._id)
            .then(function (res) {
              // console.log(res.data);
              if (res.data.msg == "success") {
                $this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                $this.handleCurrentChange();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 修改
    handleEdit(row) {
      this.$alert(
        `<form class="dis_form">
        <div>
        <label>商品名称</label>
    <input type="text" value="${row.Cpmc}"  class="shopname">
  </div>
 <div>
        <label>商品价格</label>
    <input type="text" value="${row.Price}" class="shopprice">
  </div>
  <div>
        <label>商品原价</label>
    <input type="text" value="${row.LinePrice}" class="shopline">
  </div>
<div>
        <label>销售数量</label>
    <input type="text" value="${row.Sales}" class="shopnum">
  </div>
  </form>`,
        "编辑",
        {
          dangerouslyUseHTMLString: true,
        }
      ).then(async () => {
        console.log(row);
        let shopname = document.querySelector(".shopname").value;
        let shopprice = document.querySelector(".shopprice").value;
        let shopline = document.querySelector(".shopline").value;
        let shopnum = document.querySelector(".shopnum").value;
        this.$request
          .put("http://120.24.63.27:2001/api/goods/" + row._id, {
            nCpmcame: shopname,
            Price: shopprice,
            LinePrice: shopline,
            Sales: shopnum,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.msg == "success") {
              this.$message({
                message: "修改成功",
                type: "success",
              });
              this.handleCurrentChange(this.yema);
            }
          });
      });
      console.log(row);
    },
  },

  created() {
    let $this = this;
    this.$request
      .post("http://120.24.63.27:2001/api/goods/list", {
        page: this.yema,
        size: this.shuliang,
        total: this.yema,
        // page: 1,
        // size: 5,
      })
      .then(function (res) {
        // console.log(res.data.data.result);
        $this.total = res.data.total;
        res.data.data.result.forEach((item) => {
          // console.log(item);
          item.date = new Date(item.date).toLocaleString();
          if (!item.LinePrice) {
            item.LinePrice = item.Price;
          }
        });
        $this.tableData = res.data.data.result;
        // console.log($this.tableData);
      });
  },
};
</script>

<style>
.goodlist-addgrop button {
  width: 50px;
  height: 30px;
}
.goodlist-addgrop i {
  text-align: center;
}
.goodstable tr {
  height: 100px;
  overflow: hidden;
}

.dis_form input {
  width: 700px;
}
div .el-message-box {
  width: 800px;
}
</style>