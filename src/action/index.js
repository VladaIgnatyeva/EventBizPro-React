export const loggedIn = (data) => {
    return{
        type: "LOGGED_IN",
        payload: data
    }
}

export const loggedOut = (data) => {
    return{
        type: "LOGGED_OUT",
        payload: data
    }
}
 