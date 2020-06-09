import service from '../../utils/http'

export function login(data) {
  return service({
    url:"/api/user/login",
    method:"POST",
    data
  })
}
  