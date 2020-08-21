<template>
  <div class="publicbox">
    <div id="main" :style="{width: '70vw', height: '66vh'}" class="publicbox"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "近几月卖花数量",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["不变的承诺", "忘情巴黎", "初心不负", "恋恋情深", "一往情深"],
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2020-2",
              "2020-3",
              "2020-4",
              "2020-5",
              "2020-6",
              "2020-7",
              "2020-8",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "/万",
          },
        ],
        series: [
          {
            name: "不变的承诺",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [2.4, 2.8, 3.3, 3.6, 2.8, 3.6, 6.6],
          },
          {
            name: "忘情巴黎",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [4.4, 3.1, 3.5, 6.3, 5.6, 6.3, 7],
          },
          {
            name: "初心不负",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [3.1, 4.5, 4.2, 4.8, 5.4, 5.6, 7],
          },
          {
            name: "恋恋情深",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [8.4, 6.3, 7.2, 6.6, 6.9, 6.2, 7.8],
          },
          {
            name: "一往情深",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            areaStyle: {},
            data: [8.2, 9.3, 9.1, 10.5, 10.2, 10, 12.5],
          },
        ],
      });
    },
  },
};
</script>

<style>
.publicbox {
  background: #fff;
  padding-top: 20px;
  padding-left: 20px;
}
</style>