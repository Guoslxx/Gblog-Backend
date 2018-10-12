const mockLogin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = {
                success:true,
                message:'登录成功',
                role:'admin',
                token:'success login'
            }
            resolve(res);
        }, 500);
    })
}

export function requestLogin(payload) {
    return function (dispatch) {
        return mockLogin()
            .then(res => {
                console.log('登录请求结果:',res);
            })
    }
}