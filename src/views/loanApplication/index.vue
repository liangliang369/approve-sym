<template>
  <div class="page loan-application-wrap">
    <div class="loan-application-container">
      <el-form
        :model="loanApplicationForm"
        :rules="loanApplicationRules"
        ref="loanApplicationForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 个人基本信息 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人基本信息</span>
          </div>
          <div class="card-body">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="loanApplicationForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生日期" prop="birthday">
                  <el-date-picker
                    v-model="loanApplicationForm.birthday"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="性别" prop="sex">
                  <el-select v-model="loanApplicationForm.sex" placeholder="请选择">
                    <el-option
                      v-for="(item,index) in sexData"
                      :key="index"
                      :label="item.propName"
                      :value="item.propCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="身份证" prop="identity_card">
                  <el-input v-model="loanApplicationForm.identity_card"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="婚姻状态" prop="marriage">
                  <el-select v-model="loanApplicationForm.marriage" placeholder="请选择">
                    <el-option
                      v-for="(item,index) in marriageData"
                      :key="index"
                      :label="item.propName"
                      :value="item.propCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="教育程度" prop="education">
                  <el-select v-model="loanApplicationForm.education" placeholder="请选择">
                    <el-option
                      v-for="(item,index) in educationData"
                      :key="index"
                      :label="item.propName"
                      :value="item.propCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="居住地址" prop="address1">
                  <el-input v-model="loanApplicationForm.address1"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="户籍地址" prop="address2">
                  <el-input v-model="loanApplicationForm.address2"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="居住电话" prop="phone">
                  <el-input v-model="loanApplicationForm.phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机号" prop="mobile_phone">
                  <el-input v-model="loanApplicationForm.mobile_phone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!-- 职业信息 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>职业信息</span>
          </div>
          <div class="card-body">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="现职公司" prop="company">
                  <el-input v-model="loanApplicationForm.company"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所属行业" prop="trade">
                  <el-select v-model="loanApplicationForm.trade" placeholder="请选择">
                    <el-option
                      v-for="(item,index) in tradeData"
                      :key="index"
                      :label="item.propName"
                      :value="item.propCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职位" prop="position">
                  <el-input v-model="loanApplicationForm.position"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="公司地址" prop="address3">
                  <el-input v-model="loanApplicationForm.address3"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="公司类型" prop="company_type">
                  <el-input v-model="loanApplicationForm.company_type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="公司邮箱" prop="company_email">
                  <el-input v-model="loanApplicationForm.company_email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="公司电话" prop="company_phone">
                  <el-input v-model="loanApplicationForm.company_phone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="收支情况" prop="income">
                  <el-input v-model="loanApplicationForm.income"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="部门" prop="contact2_dep">
                  <el-input v-model="loanApplicationForm.contact2_dep"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职位" prop="contact2_pos">
                  <el-input v-model="loanApplicationForm.contact2_pos"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!-- 联系人 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>联系人</span>
          </div>
          <div class="card-body">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="关系1" prop="contact">
                  <el-input v-model="loanApplicationForm.contact"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="姓名" prop="contact_name">
                  <el-input v-model="loanApplicationForm.contact_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机" prop="contact_phone">
                  <el-input v-model="loanApplicationForm.contact_phone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="关系2" prop="contact2">
                  <el-input v-model="loanApplicationForm.contact2"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="姓名" prop="contact2_name">
                  <el-input v-model="loanApplicationForm.contact2_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机" prop="contact2_phone">
                  <el-input v-model="loanApplicationForm.contact2_phone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="备注" prop="remark">
                  <el-input v-model="loanApplicationForm.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-form-item>
          <el-button
            type="primary"
            :loading="createLoadig"
            @click="submitLoan('loanApplicationForm')"
          >提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  sexData,
  marriageData,
  educationData,
  tradeData
} from "@/utils/setOptions.js";
import { createLoan } from "@/api/loanApplication/index";
export default {
  name: "loanApplication",
  data() {
    // 校验身份证号
    var checkIdentityCard = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("身份证号不能为空"));
      }
      setTimeout(() => {
        const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
        if (!reg.test(value)) {
          callback(new Error("请输入有效的身份证号"));
        } else {
          callback();
        }
      }, 1000);
    };
    // 校验手机号
    var checkMobilePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入有效的手机号"));
        } else {
          callback();
        }
      }, 1000);
    };
    // 校验邮箱
    var checkCompanyEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("公司邮箱不能为空"));
      }
      setTimeout(() => {
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!reg.test(value)) {
          callback(new Error("请输入有效的公司邮箱"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      createLoadig: false,
      sexData: [],
      marriageData: [],
      educationData: [],
      tradeData: [],
      loanApplicationForm: {
        name: "张亮麻辣烫", //姓名
        birthday: "", //出生日期
        sex: "man", //性别
        identity_card: "622323202002045514", //身份证
        marriage: "unmarried", //婚姻状态
        education: "college", //教育程度
        address1: "北京市昌平区", //居住地址
        address2: "甘肃武威", //户籍地址
        phone: "555013", //居住电话
        mobile_phone: "15010679573", //手机号
        company: "紫光数智", //现职公司
        trade: "education", //所属行业

        position: "web前端开发工程师", //职位
        address3: "北京市昌平区", //公司地址
        company_type: "电力", //公司类型
        company_email: "754343014@qq.com", //公司邮箱
        company_phone: "010-555103", //公司电话
        contact2_dep: "智慧部", //部门
        contact2_pos: "web前端", //职位

        income: "150000", //收支情况
        contact: "朋友", //关系1
        contact_name: "张亮麻辣拌", //姓名
        contact_phone: "13838389438", //手机
        contact2: "狐朋狗友", //关系2
        contact2_name: "山珍野味", //姓名
        contact2_phone: "18766569652", //手机
        remark: "测试申请" //备注
      },
      // 表单校验
      loanApplicationRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }], //姓名
        birthday: [
          { required: true, message: "请填写出生日期", trigger: "blur" }
        ], //出生日期
        sex: [{ required: true, message: "请填写性别", trigger: "blur" }], //性别
        identity_card: [
          { required: true, validator: checkIdentityCard, trigger: "blur" }
        ], //身份证
        marriage: [
          { required: true, message: "请填写婚姻状态", trigger: "blur" }
        ], //婚姻状态
        education: [
          { required: true, message: "请填写教育程度", trigger: "blur" }
        ], //教育程度
        address1: [
          { required: true, message: "请填写居住地址", trigger: "blur" }
        ], //居住地址
        address2: [
          { required: true, message: "请填写户籍地址", trigger: "blur" }
        ], //户籍地址
        phone: [{ required: true, message: "请填写居住电话", trigger: "blur" }], //居住电话
        mobile_phone: [
          { required: true, validator: checkMobilePhone, trigger: "blur" }
        ], //手机号
        company: [
          { required: true, message: "请填写现职公司", trigger: "blur" }
        ], //现职公司
        trade: [{ required: true, message: "请选择所属行业", trigger: "blur" }], //所属行业

        position: [{ required: true, message: "请填写职位", trigger: "blur" }], //职位
        address3: [
          { required: true, message: "请填写公司地址", trigger: "blur" }
        ], //公司地址
        company_type: [
          { required: true, message: "请填写公司类型", trigger: "blur" }
        ], //公司类型
        company_email: [
          { required: true, validator: checkCompanyEmail, trigger: "blur" }
        ], //公司邮箱
        company_phone: [
          { required: true, message: "请填写公司电话", trigger: "blur" }
        ], //公司电话
        contact2_dep: [
          { required: true, message: "请填写部门", trigger: "blur" }
        ], //部门
        contact2_pos: [
          { required: true, message: "请填写职位", trigger: "blur" }
        ], //职位
        income: [
          { required: true, message: "请填写收支情况", trigger: "blur" }
        ], //收支情况
        contact: [{ required: true, message: "请填写关系1", trigger: "blur" }], //关系1
        contact_name: [
          { required: true, message: "请填写姓名", trigger: "blur" }
        ], //姓名
        contact_phone: [
          { required: true, validator: checkMobilePhone, trigger: "blur" }
        ], //手机
        contact2: [{ required: true, message: "请填写关系2", trigger: "blur" }], //关系2
        contact2_name: [
          { required: true, message: "请填写姓名", trigger: "blur" }
        ], //姓名
        contact2_phone: [
          { required: true, validator: checkMobilePhone, trigger: "blur" }
        ] //手机
      }
    };
  },
  created() {
    this.initSelectData();
  },
  methods: {
    // 初始化下拉数据
    initSelectData() {
      this.sexData = sexData;
      this.marriageData = marriageData;
      this.educationData = educationData;
      this.tradeData = tradeData;
    },
    // 提交贷款申请
    submitLoan(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          createLoan(this.loanApplicationForm).then(res => {
            console.log("res", res);
            if (res.data.data.status) {
              this.$notify({
                title: "成功",
                message: "提交成功",
                type: "success"
              });
              this.resetForm();
            }else {
              this.$notify({
                title: "失败",
                message: "提交失败",
                type: "warning"
              });
            }
          });
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs.loanApplicationForm.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 30px;
}
</style>