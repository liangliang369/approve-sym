<!--
 * @功能描述: 
 * @版本: 
 * @作者: zhangls
 * @Date: 2020-06-09 11:42:27
 * @最新修改内容: 
 * @LastEditTime: 2020-06-10 13:32:54
--> 
<template>
  <div class="page layout">
    <el-container style="position:absolute;left:0;top:0;bottom:0;right:0">
      <el-aside width="200px">
        <!-- 左侧菜单 -->
        <Navbar></Navbar>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部 -->
          <div class="header-left">
            <div class="toggle-icon-box">
              <i class="iconfont icon-zhankai"></i>
            </div>
            <div class="breadcrumb-box">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="header-right">
            <el-dropdown @command="handleCommand">
              <el-button type="primary" class="el-dropdown-link">
                退出
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { logout } from "@/api/login/index";
import { removeToken } from '@/utils/auth'
export default {
  name: "Layout",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {
    // 退出功能
    handleCommand(command) {
      if (command == "logout") {
        logout().then(res => {
          if (res.code == 20000) {
            removeToken();
            this.$router.push('/login');
          }else {
            this.$message({
              showClose: true,
              message: "登出失败",
              type: "error"
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  .el-header {
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
  }
  .header-left {
    display: flex;
    align-items: center;
    margin-right: auto;
    .toggle-icon-box {
      margin-right: 20px;
      cursor: pointer;
      i {
        font-size: 25px;
      }
    }
  }
}
</style>