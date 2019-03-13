import axios from 'axios'
import { Modal, message } from 'antd'
import config from './config'

const http = axios.create({
    baseURL: config.baseURL,
    timeout: 6000,
})
http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
http.interceptors.response.use(
    response => {
        const { data } = response;
        if(data.success){
            return data.data || true;
        }else{
            message.error(`接口请求失败${data.message}`)
        }
    },
    error => {
        if (process.env.NODE_ENV === 'development') {
            Modal.error({
                title: `请求错误`,
                content: `${error}`,
                okText: '好的'
            });
        }
        return error;
    }
)
export default http;