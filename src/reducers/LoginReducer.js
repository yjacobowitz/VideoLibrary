function checkLegalUser(username) {
    let users = JSON.parse(localStorage.getItem('users'));
    if(username in users){
        localStorage.setItem('currentUser', username);
        return users[username]
    }
    return null
}

function logoutUser(){
    localStorage.setItem('currentUser', "");
}

function login(state = null, action){
    switch(action.type){
        case 'LOGIN':
            return checkLegalUser(action.username);
        case 'LOGOUT':
            return logoutUser();
        default:
            return state
    }
}

export default login
