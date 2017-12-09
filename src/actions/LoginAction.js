export const login = username => {
    return {
        type: 'LOGIN',
        username: username
    }
};