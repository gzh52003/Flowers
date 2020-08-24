<template>
  <div>
    <slot name="asd">
      <el-steps :active="0" align-center>
        <el-step title="基本信息" description></el-step>
        <el-step title="商品参数" description></el-step>
        <el-step title="商品内容" description></el-step>
        <el-step title="完成" description></el-step>
      </el-steps>
    </slot>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" class="nnname"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="祝福花语" prop="mes">
        <el-input v-model="ruleForm.mes"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="num">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="region">
        <div class="block">
          <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }"></el-cascader>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        price: "",
        mes: "",
        num: "",
      },
      value: [],
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
                  label: "月季",
                },
                {
                  value: "木本象牙红",
                  label: "木本象牙红",
                },
                {
                  value: "石榴花",
                  label: "石榴花",
                },
              ],
            },
            {
              value: "长辈",
              label: "长辈",
              children: [
                {
                  value: "万年青",
                  label: "万年青",
                },
                {
                  value: "龟背竹",
                  label: "龟背竹",
                },
                {
                  value: "鹤望兰",
                  label: "鹤望兰",
                },
                {
                  value: "寿星桔",
                  label: "寿星桔",
                },
                {
                  value: "寿星桃",
                  label: "寿星桃",
                },
              ],
            },
          ],
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
                  label: "冷美人紫玫瑰",
                },
                {
                  value: " 艾莎玫瑰",
                  label: " 艾莎玫瑰",
                },
                {
                  value: " 雪山白玫瑰",
                  label: " 雪山白玫瑰",
                },
                {
                  value: "卡罗拉玫瑰",
                  label: "卡罗拉玫瑰",
                },
                {
                  value: "香槟玫瑰",
                  label: "香槟玫瑰",
                },
                {
                  value: "蓝色妖姬",
                  label: "蓝色妖姬",
                },
                {
                  value: "戴安娜粉玫瑰",
                  label: "戴安娜粉玫瑰",
                },
              ],
            },
            {
              value: "百合",
              label: "百合",
              children: [
                {
                  value: "白色香水百合",
                  label: "白色香水百合",
                },
                {
                  value: " 多头百合",
                  label: " 多头百合",
                },
                {
                  value: "多头粉百合",
                  label: "多头粉百合",
                },
              ],
            },
            {
              value: "马蒂莲",
              label: "马蒂莲",
              children: [
                {
                  value: "Flora Love",
                  label: "Flora Love",
                },
                {
                  value: "爱的陪伴",
                  label: "爱的陪伴",
                },
                {
                  value: "From The Heart",
                  label: "From The Heart",
                },
                {
                  value: "枫丹白露",
                  label: "枫丹白露",
                },
                {
                  value: "清风徐来",
                  label: "清风徐来",
                },
              ],
            },
            {
              value: "扶郎",
              label: "扶郎",
              children: [
                {
                  value: "盛放的热情",
                  label: "盛放的热情",
                },
                {
                  value: "法式浪漫",
                  label: "法式浪漫",
                },
                {
                  value: "嫣然",
                  label: "嫣然",
                },
              ],
            },
            {
              value: "向日葵",
              label: "向日葵",
              children: [
                {
                  value: "一路向阳",
                  label: "一路向阳",
                },
                {
                  value: "星河璀璨",
                  label: "星河璀璨",
                },
                {
                  value: "生如夏花",
                  label: "生如夏花",
                },
                {
                  value: "风一样的女子",
                  label: "风一样的女子",
                },
              ],
            },
          ],
        },
        {
          value: "问候长辈",
          label: "问候长辈",
          children: [
            {
              value: "健康长久",
              label: "健康长久",
            },
            {
              value: "母爱",
              label: "母爱",
            },
            {
              value: "聆听你",
              label: "聆听你",
            },
          ],
        },
      ],

      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3 到 30 个字符",
            trigger: "blur",
          },
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到10  个字符",
            trigger: "blur",
          },
        ],
        mes: [
          { required: true, message: "请输入祝福花语", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "长度在 2 到 50 个字符",
            trigger: "blur",
          },
        ],
        num: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    handleSelect() {
      alert("asd");
    },
  },
  beforeDestroy() {},
};
</script>