<template>
  <div class="page layout">
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单 -->
        <Navbar></Navbar>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部 -->
        </el-header>
        <el-main> 
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
export default {
  name: "Layout",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.layout {
}
</style>