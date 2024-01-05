const delay = sleep => new Promise(resolve => setTimeout(resolve, sleep));

export async function login(loginId, loginPwd){
    await delay(1000);
    if(loginId === 'admin' && loginPwd === '123456'){
        const user = {
            loginId,
            name: '管理员'
        }
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
    return null;
}

export async function logOut(){
    await delay(1000);
    localStorage.removeItem('user');
}

export async function whoAmI(){
    await delay(1000);
    const user = localStorage.getItem('user');
    if(user){
        return JSON.parse(user);
    }
    return null;
}