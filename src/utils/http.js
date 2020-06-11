import axios from 'axios'
import { Message } from 'element-ui';
import { getToken } from '../utils/auth'
const service = axios.create({
  timeout:50000,
  baseURL: 'http://139.196.42.209:5004'
});
console.log('getToken',getToken())
service.interceptors.request.use(config=> {
  if(sessionStorage.AdminToken) {
    config.headers['token'] = getToken();
  }
  return config;
},error=> {
  return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response=> {
  return response
},error=> {
  Message.error(error.response.data.data.message)
  return Promise.reject(error);
})

export default service;