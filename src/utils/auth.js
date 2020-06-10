const tokenKey = "AdminToken";
//存储token
export function setToken(data) {
  sessionStorage.setItem(tokenKey,data);
}
//获取token
export function getToken() {
  sessionStorage.getItem(tokenKey);
}
//存储token
export function removeToken(data) {
  sessionStorage.removeItem(tokenKey);
}