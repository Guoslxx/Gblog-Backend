import axios from 'axios'
export const baseApiPath = process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/5b0cc4bd6224f3257a8f2422/frontend-api' : 'http://api.guosl.top';

const request = options => {
    const defaultOptions = {
        timeout: '2000',
        baseURL: baseApiPath,
    }
    const newOptions = { ...defaultOptions, ...options };
    return axios(newOptions);
}

export default request;