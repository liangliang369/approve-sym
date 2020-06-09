<template>
  <div class="page login">
    <div class="form-container">
      <div class="login-head"></div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.account">
            <i slot="prefix" class="iconfont icon-yonghuming"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password">
            <i slot="prefix" class="iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" :loading="loginLoading" @click="handelLogin('loginForm')">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      loginLoading: false,
      loginForm: {
        account: "",
        password: ""
      },
      loginRules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handelLogin(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          let params = {
            account: this.loginForm.account,
            password: this.loginForm.password
          };
          login(params).then(res => {
            console.log("res", res);
            if (res.data.status == "200") {
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success"
              });
              this.$router.push('/')
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  min-height: 300px;
  padding: 20px;
  box-shadow: border-box;
  border: 1px solid #999;
  border-radius: 15px;
  .el-form {
    margin-top: 60px;
  }
  .el-button {
    width: 100%;
    margin-top: 40px;
  }
}
</style>