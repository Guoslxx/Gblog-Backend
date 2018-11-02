import request from '../utils/axios';

export async function getAritcleList(payload){
    return request({
        url:'/aritcle',
        method:'GET',
    })
}

export async function getAritcleById(payload){
    return request({
        url:`/aritcle?id=${payload.id}`,
        method:'GET',
    })
}