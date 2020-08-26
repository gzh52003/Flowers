<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/adminmanage/adminlist'}">分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="goodmsg">
      <span class="demonstration">选择商品分类：</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        style="margin-bottom:20px;"
      ></el-cascader>
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="动态参数" name="first">
            <el-button
              type="primary"
              style="display:block;margin-bottom:20px"
              size="small"
              @click="open"
              :disabled="disabledState"
            >添加参数</el-button>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="expand">
                <template>
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-tag>标签一</el-tag>
                    <el-tag type="success">标签二</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="#" type="index"></el-table-column>
              <el-table-column label="属性名称" prop="name"></el-table-column>
              <el-table-column label="操作" prop="desc">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit1(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete1(scope.$index, scope.row)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="静态属性" name="second">
            <el-button
              type="primary"
              style="display:block;margin-bottom:20px"
              size="small"
              @click="open1"
              :disabled="disabledState"
            >添加属性</el-button>
            <el-table :data="tableData1" style="width: 100%">
              <el-table-column type="expand">
                <el-form label-position="left" inline class="demo-table-expand">
                    <router-view/>
                </el-form>
              </el-table-column>
              <el-table-column label="#" type="index"></el-table-column>
              <el-table-column label="属性名称" prop="name"></el-table-column>
              <el-table-column label="操作" prop="desc">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit2(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete2(scope.$index, scope.row)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table> 
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      value: [],
      tableData: [],
      tableData1: [],
      disabledState: true,
      options: [
        {
          value: "生日",
          label: "生日",
          children: [
            {
              value: "年轻朋友",
              label: "年轻朋友",
              children: [
                {
                  value: "月季",
                  label: "月季"
                },
                {
                  value: "木本象牙红",
                  label: "木本象牙红"
                },
                {
                  value: "石榴花",
                  label: "石榴花"
                }
              ]
            },
            {
              value: "长辈",
              label: "长辈",
              children: [
                {
                  value: "万年青",
                  label: "万年青"
                },
                {
                  value: "龟背竹",
                  label: "龟背竹"
                },
                {
                  value: "鹤望兰",
                  label: "鹤望兰"
                },
                {
                  value: "寿星桔",
                  label: "寿星桔"
                },
                {
                  value: "寿星桃",
                  label: "寿星桃"
                }
              ]
            }
          ]
        },
        {
          value: "情侣",
          label: "情侣",
          children: [
            {
              value: "玫瑰",
              label: "玫瑰",
              children: [
                {
                  value: "冷美人紫玫瑰",
                  label: "冷美人紫玫瑰"
                },
                {
                  value: " 艾莎玫瑰",
                  label: " 艾莎玫瑰"
                },
                {
                  value: " 雪山白玫瑰",
                  label: " 雪山白玫瑰"
                },
                {
                  value: "卡罗拉玫瑰",
                  label: "卡罗拉玫瑰"
                },
                {
                  value: "香槟玫瑰",
                  label: "香槟玫瑰"
                },
                {
                  value: "蓝色妖姬",
                  label: "蓝色妖姬"
                },
                {
                  value: "戴安娜粉玫瑰",
                  label: "戴安娜粉玫瑰"
                }
              ]
            },
            {
              value: "百合",
              label: "百合",
              children: [
                {
                  value: "白色香水百合",
                  label: "白色香水百合"
                },
                {
                  value: " 多头百合",
                  label: " 多头百合"
                },
                {
                  value: "多头粉百合",
                  label: "多头粉百合"
                }
              ]
            },
            {
              value: "马蒂莲",
              label: "马蒂莲",
              children: [
                {
                  value: "Flora Love",
                  label: "Flora Love"
                },
                {
                  value: "爱的陪伴",
                  label: "爱的陪伴"
                },
                {
                  value: "From The Heart",
                  label: "From The Heart"
                },
                {
                  value: "枫丹白露",
                  label: "枫丹白露"
                },
                {
                  value: "清风徐来",
                  label: "清风徐来"
                }
              ]
            },
            {
              value: "扶郎",
              label: "扶郎",
              children: [
                {
                  value: "盛放的热情",
                  label: "盛放的热情"
                },
                {
                  value: "法式浪漫",
                  label: "法式浪漫"
                },
                {
                  value: "嫣然",
                  label: "嫣然"
                }
              ]
            },
            {
              value: "向日葵",
              label: "向日葵",
              children: [
                {
                  value: "一路向阳",
                  label: "一路向阳"
                },
                {
                  value: "星河璀璨",
                  label: "星河璀璨"
                },
                {
                  value: "生如夏花",
                  label: "生如夏花"
                },
                {
                  value: "风一样的女子",
                  label: "风一样的女子"
                }
              ]
            }
          ]
        },
        {
          value: "问候长辈",
          label: "问候长辈",
          children: [
            {
              value: "健康长久",
              label: "健康长久"
            },
            {
              value: "母爱",
              label: "母爱"
            },
            {
              value: "聆听你",
              label: "聆听你"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      if (value) {
        this.disabledState = false;
      } else {
        this.disabledState = true;
      }
    },
    handleEdit1(index, row) {
      this.$prompt("动态参数", "添加动态参数", {
        inputValue: row.name,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          row.name = value;
          this.$message({
            type: "success",
            message: "修改成功 "
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    handleDelete1(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit2(index, row) {
      this.$prompt("静态属性", "添加静态属性", {
        inputValue: row.name,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          row.name = value;
          this.$message({
            type: "success",
            message: "修改成功 "
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    handleDelete2(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData1.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    open() {
      this.$prompt("动态参数", "添加动态参数", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.tableData.push({ name: value });
          this.$message({
            type: "success",
            message: "添加成功 "
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "添加取消"
          });
        });
    },
    open1() {
      this.$prompt("动态参数", "添加动态参数", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.tableData1.push({ name: value });
          this.$message({
            type: "success",
            message: "添加成功 "
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "添加取消"
          });
        });
    },
  }
};
</script>

<style>
.goodmsg {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 40px;
  box-sizing: border-box;
}
.goodsadd {
  display: block;
}
</style>