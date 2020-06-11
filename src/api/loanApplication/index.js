import service from '../../utils/http'
// 贷款申请
export function createLoan(data) {
  return service({
    url:"/api/loan/create",
    method:"POST",
    data
  })
}