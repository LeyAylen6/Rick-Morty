const { User, Favorite } = require('./../DB_connection');

const login = async(email, password) => {
    
    const user = await User.findOne({ 
        where: { email: email },
        include: Favorite
    });

    if(!user) {
        throw new Error('Usuario no encontrado');

    } else if (user.password != password) {
        throw new Error('Contraseña incorrecta')
    }

    return { user: user, access: true }
}

module.exports = {
    login
}