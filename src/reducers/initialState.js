const initialState = {
    user: {
        isLoggedInStatus: localStorage.getItem('isLoggedIn'),
        username: localStorage.getItem('username'),
        role: localStorage.getItem('role'),
        id: localStorage.getItem('id'),
        avatar: localStorage.getItem('avatar')
    }
}

export default initialState;