import request from '../utils/axios';

export async function getArticleList(payload){
    return request.get(`/aritcle`);
}

export async function getArticleById(payload){
    return request.get(`/aritcle/${payload.id}`)
}

export async function submitArticle(payload){
    return request.post('/article',payload);
}