const tokenKey = "AdminToken";
//存储token
export function setToken(data) {
  sessionStorage.setItem(tokenKey,data);
}
//获取token
export function getToken() {
  return sessionStorage.getItem(tokenKey)
}
//存储token
export function removeToken() {
  sessionStorage.removeItem(tokenKey);
}