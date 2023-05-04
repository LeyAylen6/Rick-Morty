const { User } = require('../DB_connection');

const postUser = async (username, email, password) => {
        
    const [user, created] = await User.findOrCreate({
        where: { email: email },
        defaults: {
            username: username,
            email: email,
            password: password
        }
    })

    if (!created) {
        throw new Error('El email ya existe')
    } 
    return { user: user, signUp: true};
};

module.exports = { postUser }