import axios from 'axios'
export const baseURL = process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/5b0cc4bd6224f3257a8f2422/frontend-api' : 'http://api.guosl.top';

const instance = axios.create({
    baseURL,
    timeout: 2000,
})
instance.interceptors.request.use(
    config => {
        console.log('请求配置',config)
        return config;
    },
    error => {
        console.log('请求错误',error)
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    response => {
        console.log('响应体',response);
        return response;
    },
    error => {
        console.log('响应错误',error);
        return error;
    }
)
export default instance;