<template>
  <div class="page applicationManagement">
    <div class="applicationManagement-container">
      <div class="search-container">
        <input type="text" v-model="listQuery.name" placeholder="请输入姓名" clearable>
        <el-button type="primary" :loading="searchLoading">查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applicationManagement",
  data() {
    return {
      searchLoading:false,
      listQuery: {
        page: 1,
        pageSize: 10,
        name: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.applicationManagement-container {
  width: 100%;
  height: 100%;
  .search-container {
    display: flex;
    align-items: center;
  }
}
</style>