<template>
  <div class="navbar-container">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/loanApplication">
        <i class="el-icon-document"></i>
        <span slot="title">贷款申请</span>
      </el-menu-item>
      <el-menu-item index="/applicationManagement">
        <i class="el-icon-setting"></i>
        <span slot="title">申请管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>贷款审批</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">初审</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="4-2">终审</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">标的管理</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">创建管理员</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="6-2">列表展示</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:"Navbar"
  }
</script>

<style lang="scss" scoped>
.navbar-container {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>