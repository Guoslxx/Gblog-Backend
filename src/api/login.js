export function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = {
                code:200,
                success:true,
                message:'登录成功'
            }
            resolve(res);
        }, 500);
    })
}