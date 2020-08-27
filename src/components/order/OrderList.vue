<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/order/orderlist'}">订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="order-main">
      <el-row>
        <el-col :span="6">
          <el-input
            placeholder="请输入内容"
            v-model="input5"
            class="input-with-select order-search"
            @change="search"
          >
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <template>
        <el-table style="width: 100%" :data="tableData5">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="收货人姓名">
                  <span>{{props.row.personalPhone }}</span>
                </el-form-item>
                <el-form-item label="收货人电话">
                  <span>{{props.row.personalName }}</span>
                </el-form-item>
                <el-form-item label="收货地址">
                  <span>{{props.row.personalDizhi }}</span>
                </el-form-item>
                <el-form-item label="发票公司">
                  <span>{{ props.row.order_fapiao_company }}</span>
                </el-form-item>
                <el-form-item label="发票内容">
                  <span>{{ props.row.order_fapiao_content }}</span>
                </el-form-item>
                <el-form-item label="发票抬头">
                  <span>{{ props.row.order_fapiao_title }}</span>
                </el-form-item>
                <!-- <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                </el-form-item>-->
                <el-form-item label="更新时间">
                  <span>{{ props.row.updata_time }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="#" type="index" :index="indexMethod"></el-table-column>
          <el-table-column label="订单号" prop="order_number"></el-table-column>
          <el-table-column label="订单价格" prop="order_price"></el-table-column>
          <el-table-column label="支付状态" prop>
            <el-tag type="success">已支付</el-tag>
          </el-table-column>
          <el-table-column label="是否发货" prop="is_send"></el-table-column>
          <el-table-column label="下单时间" prop="create_time"></el-table-column>
          <el-table-column label="操作" prop="caozuo">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
              <el-button
                type="success"
                icon="el-icon-location"
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="block">
        <!-- <span class="demonstration">完整功能</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="orderTotal"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../../utils/Bus.js";
import OrderLogistics from "./OrderLogistics";
import OrderModify from "./OrderModify";
export default {
  data() {
    return {
      input5: "",
      tableData5: [],
      orderTotal: "",
      dialogTableVisible: false,
      currentPage4: "1",
      yema: 1,
      num: 5,
    };
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row);
      const h = this.$createElement;
      this.$msgbox({
        title: "修改信息",
        message: h(OrderModify),
        showConfirmButton: false,
      });
      this.$store.state.orderId = row._id;
      Bus.$emit("orderId", row._id);
      // console.log(this.$store.state.orderId, "存储");
    },
    async handleDelete(index, row) {
      const h = this.$createElement;
      this.$msgbox({
        title: "物流信息",
        message: h(OrderLogistics),
      });
      let res = await this.$request.get("/logistics/" + row.order_id);
      this.$store.state.orderList = res.data.data;
      Bus.$emit("render", res.data.data);
    },

    async handleSizeChange(val) {
      this.num = val;
      this.render();
    },
    async handleCurrentChange(val) {
      this.yema = val;
      this.render();
    },
    indexMethod(index) {
      return index + 1;
    },
    async render() {
      let res = await this.$request.get(
        `/order?page=${this.yema}&size=${this.num}&total=true`
      );
      this.orderTotal = res.data.total;
      res = res.data.data.result.map((item) => {
        item.create_time = new Date(item.create_time - 0).toLocaleString();
        item.updata_time = new Date(item.updata_time).toLocaleString();
        return item;
      });
      this.tableData5 = res;
    },
    search() {
      if (!this.input5) {
        this.render();
        return;
      }
      let t = null;
      if (t) return;
      t = setTimeout(() => {
        t = null;
        this.tableData5 = this.tableData5.filter(
          (item) => item.order_number === this.input5
        );
      }, 500);
    },
  },

  async created() {
    this.render();
  },
};
</script>

<style>
.order-main {
  padding: 20px;
  background: #fff;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
.el-form {
  width: 100%;
}
</style>