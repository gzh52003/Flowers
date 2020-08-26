<template>
  <div class="hello">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597938044559&di=65ed6b9c84d485d8e6d67198b47e7422&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F15%2F20160715203753_KM25T.thumb.700_0.jpeg);
  
}

.el-carousel__item:nth-child(2n + 1) {
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597938128506&di=8c4bf394fddbed5e95e919ec1fe812f0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D9808971cd900baa1ba794fbf72209524%2F00e93901213fb80e7cd93b273ed12f2eb9389431.jpg) no-repeat;
}
.el-carousel__container {
  height: 380px;
  top: 300px;
}
.el-carousel {
  transform: translateY(30%);
}
</style>
