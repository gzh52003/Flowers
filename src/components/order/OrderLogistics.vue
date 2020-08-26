<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.time"
      >{{activity.context}}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import Bus from "../../utils/Bus";
export default {
  data() {
    return {
      activities: [],
    };
  },
  methods: {},
  created() {
    Bus.$on("render", (orderList) => {
      // this.render(orderList)
      this.activities = orderList;
    });
  },
};
</script>
<style>
.el-message-box__wrapper .el-message-box {
  width: 50%;
}
.el-message-box__wrapper {
  overflow-x: hidden;
}
</style>