const LOGIN = 'Admin';
const PASSWORD = '12345';

const auth = (login, password) => {
    if(login === LOGIN && password === PASSWORD) 
        return true;
    else 
        return false;
}

export default auth;