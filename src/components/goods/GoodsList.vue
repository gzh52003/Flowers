<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goods/goodslist'}">商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="goodlist-box" style="background:#fff ;width:74vw ;padding:10px;margin-top:16px">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple" style="display:inline-block;margin-right:20px">
            <el-input
              placeholder="请输入内容(名称)"
              v-model="search"
              class="input-with-select goodlist-search"
              clearable:true
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
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
        style="width: 100% ; margin-top:20px;text-align:center"
        class="goodstable"
      >
        <el-table-column type="index" :index="indexMethod" label=" " width="80"></el-table-column>
        <el-table-column prop="Cpmc" label="商品名称" width="280"></el-table-column>
        <el-table-column prop="Price" label="商品价格(元)" width="100"></el-table-column>
        <el-table-column prop="LinePrice" label="商品原价(元)" width="100"></el-table-column>
        <el-table-column prop="Sales" label="销售数量" width="80"></el-table-column>
        <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="dothis" label="操作">
          <el-button-group class="goodlist-addgrop" width="150">
            <el-button type="primary" icon="el-icon-edit" size="mini" style="margin-right:6px"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          </el-button-group>
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
          :total="400"
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          number: 1,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      shuliang: 5,
      yema: 1,
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
        })
        .then(function (res) {
          console.log(res.data.data.result);
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
      this.handleCurrentChange();
    },
  },

  created() {
    let $this = this;
    this.$request
      .post("http://120.24.63.27:2001/api/goods/list", {
        page: this.yema,
        size: this.shuliang,
        // page: 1,
        // size: 5,
      })
      .then(function (res) {
        // console.log(res.data.data.result);
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
</style>