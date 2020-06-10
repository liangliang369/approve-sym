import service from '../../utils/http'
// 登录
export function login(data) {
  return service({
    url:"/api/user/login",
    method:"POST",
    data
  })
}
// 退出
export function logout () {
  return service({
    url:'/api/user/logout',
    method: "POST"
  })
}
  