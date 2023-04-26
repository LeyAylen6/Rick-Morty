const users = require('./../utils/users.js')

const login = ({ email, password }) => {
    
    if (users) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].email === email && users[i].password === password) {
                return true;
            }
        }
        
        return false;
    }
}


module.exports = {
    login
}