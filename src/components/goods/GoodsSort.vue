<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goods/goodssort'}">商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="height:100%;background:#fff;padding:10px;margin-top:20px">
      <el-button type="primary" @click="sortadd">添加分类</el-button>
      <el-table
        :data="tableData1"
        style="width: 100%;padding:10px;margin-top:20px"
        row-key="id"
        border
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="id" label="#" width="180"></el-table-column>
        <el-table-column prop="date" label="分类名称" width="180"></el-table-column>

        <el-table-column prop="name" label="是否有货" width="180">
          <template scope="scope">
            <i class="el-icon-success true" v-if="scope.row.name=='1'"></i>
            <i class="el-icon-error false" v-else></i>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="排序">
          <template scope="scope">
            <i class="seon" v-if="scope.row.address=='2'">二级</i>
            <i class="thir" v-else>三级</i>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit( scope.row)" type="primary">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete( scope.row)">售罄</el-button>
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
      tableData1: [
        {
          id: 1,
          date: "年轻朋友",
          name: 1,
          address: "2",
          children: [
            {
              id: "",
              date: "月季",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "木本象牙红",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "石榴花",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 2,
          date: "长辈",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "万年青",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "龟背竹",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "鹤望兰",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "寿星桔",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "寿星桃",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 3,
          date: "玫瑰",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "冷美人紫玫瑰",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "艾莎玫瑰",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "雪山白玫瑰",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "香槟玫瑰",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "蓝色妖姬",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "戴安娜粉玫瑰",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 4,
          date: "百合",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "白色香水百合",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "多头百合",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "多头粉百合",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 5,
          date: "马蒂莲",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "Flora Love",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "爱的陪伴",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "From The Heart",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "枫丹白露",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "清风徐来",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 6,
          date: "扶郎",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "盛放的热情",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "法式浪漫",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "嫣然",
              name: "1",
              address: "3",
            },
          ],
        },

        {
          id: 7,
          date: "向日葵",
          name: "1",
          address: "2",
          children: [
            {
              id: "",
              date: "一路向阳",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "星河璀璨",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "生如夏花",
              name: "1",
              address: "3",
            },
            {
              id: "",
              date: "风一样的女子",
              name: "1",
              address: "3",
            },
          ],
        },
        {
          id: 8,
          date: "健康长久",
          name: "1",
          address: "2",
        },
        {
          id: 9,
          date: "母爱",
          name: "1",
          address: "2",
        },
        {
          id: 10,
          date: "聆听你",
          name: "1",
          address: "2",
        },
      ],
      num: 10,
      shuliang: 3,
      yema: 1,
    };
  },
  methods: {
    handleEdit(row) {
      this.$prompt("编辑分类", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: row.date,
      })
        .then(({ value }) => {
          row.date = value;
          this.$message({
            type: "success",
            message: "分类名称: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    handleDelete(row) {
      this.row = {};
      this.$confirm(" 是否售罄?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          row.name = 2;
          // console.log(row);
          if (row.children) {
            row.children.forEach((item) => {
              item.name = 2;
            });
          }

          this.$message({
            type: "success",
            message: "修改成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },

    sortadd() {
      this.$alert(
        `<div>
          <label>分类名称</label>
          <input type="text" value="" class="sortadd">

          <div>
                  <label>父级分类</label>
          <select class="sortaddfu">
            <option value ="年轻朋友">年轻朋友</option>
            <option value ="长辈">长辈</option>
            <option value="	玫瑰">玫瑰</option>
           <option value="百合">百合</option>
           <option value ="马蒂莲">马蒂莲</option>
            <option value ="扶郎">扶郎</option>
            <option value="	向日葵">向日葵</option>
           <option value="健康长久">健康长久</option>
           <option value ="母爱">母爱</option>
            <option value ="聆听你">聆听你</option>
          </select>
          </div>
        </div>`,
        "添加分类",
        {
          dangerouslyUseHTMLString: true,
        }
      ).then(() => {
        let add = document.querySelector(".sortadd").value;
        let addd = document.querySelector(".sortaddfu");
        let add1 = addd.selectedIndex;
        let abc = addd.options[add1].text;
        console.log(this.tableData1);
        this.tableData1.forEach((item) => {
          if (item.date == abc) {
            // item.date = add;
            item.children.push({
              id: "",
              date: add,
              name: "1",
              address: "3",
            });
          }
        });
      });
    },
  },
  created() {},
};
</script>

<style>
.true {
  color: palegreen;
}
.false {
  color: red;
}
.seon {
  background: rgba(0, 200, 0, 0.2);
}
.thir {
  background: rgba(200, 0, 0, 0.2);
}
</style>

