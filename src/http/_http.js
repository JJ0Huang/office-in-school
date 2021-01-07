import axios from 'axios'
import qs from 'qs'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 配置默认请求时间和默认的请求路径
const TimeOut = 10000;
axios.defaults.timeout = TimeOut;
axios.defaults.baseURL = '/server';

var lock = false;

/**
 * 请求拦截
 * 在请求拦截中加上 sign，将 sign 放在 token 中
 */
axios.interceptors.request.use(
  config => {
    // 发送请求前就开始显示‘加载中...’
    elementUI.Loading.service();
    config.headers.accessToken = localStorage.getItem('sign');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    elementUI.Loading.service().close();
    if(lock == false){
      elementUI.Message.success('请求成功...')
      lock = true;
      setTimeout(() => {
        lock = false;
      }, 1000);
    }
    console.log('res.data:', response.data)
    return response;
  },
  error => {
    elementUI.Loading.service().close();
    elementUI.Message.error('请求失败...')
    return Promise.reject(error);
  }
)

export default {
  /**
   * login 首次登录
   * loginBySign 通过 localStorage 里的 sign 进行登录
   */
  async login(user_id, user_password) {
    return axios.post(`/login.php`, qs.stringify({
      user_id,
      user_password
    }))
  },
  async loginBySign(sign) {
    return axios.post(`/loginBySign.php`, qs.stringify({ sign }))
  },
  async newStudent(student) {
    return axios.post(`/newStudent.php`, qs.stringify({ student }))
  },
  async newTeacher(teacher) {
    return axios.post(`/newTeacher.php`, qs.stringify({ teacher }))
  }
}