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
                    <el-option label="男" value="man"></el-option>
                    <el-option label="女" value="woman"></el-option>
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
                <el-form-item label="婚姻状态" prop="sex">
                  <el-select v-model="loanApplicationForm.marriage" placeholder="请选择">
                    <el-option label="已婚" value="married"></el-option>
                    <el-option label="未婚" value="unmarried"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="教育程度" prop="education">
                  <el-select v-model="loanApplicationForm.education" placeholder="请选择">
                    <el-option label="高中" value="highschool"></el-option>
                    <el-option label="大学" value="college"></el-option>
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
                    <el-option label="教育" value="education"></el-option>
                    <el-option label="金融" value="finance"></el-option>
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
                <el-form-item label="关系1" prop="contact">
                  <el-input v-model="loanApplicationForm.contact"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="姓名" prop="contact_name">
                  <el-input v-model="loanApplicationForm.contact_name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loanApplication",
  data() {
    return {
      loanApplicationForm: {
        name: "", //姓名
        birthday: "", //出生日期
        sex: "man", //性别
        identity_card: "", //身份证
        marriage: "unmarried", //婚姻状态
        education: "college", //教育程度
        address1: "", //居住地址
        address2: "", //户籍地址
        phone: "", //居住电话
        mobile_phone: "", //手机号
        company: "", //现职公司
        trade: "education", //所属行业

        position: "", //职位
        address3: "", //公司地址
        company_type: "", //公司类型
        company_email: "", //公司邮箱
        company_phone: "", //公司电话

        income: "", //收支情况
        contact: "", //关系1
        contact_name: "", //姓名
        contact_phone: "", //手机
        contact2: "", //关系2
        contact2_name: "", //姓名
        contact2_phone: "", //手机

        contact2_dep: "", //部门
        contact2_pos: "", //职位
        remark: "" //备注
      },
      // 表单校验
      loanApplicationRules: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 30px;
}
</style>