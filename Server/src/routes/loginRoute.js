const loginRoute = require('express').Router()
const { login } = require('./../controllers/login.js')   

loginRoute.get('/login', async(req, res) => {
    try {
        const { email, password } = req.query;
        
        if ( !email || !password ) {
            return res.status(400).send("Faltan datos");
        };
        
        const loginUser = await login(email, password)  // devuelve {user: {..}, access:{...}} 

        return res.status(200).json(loginUser);
    
    } catch(error) {
        if (error.message === 'Usuario no encontrado') {
            return res.status(404).send(error.message)
    
        } else if (error.message === 'Contraseña incorrecta') {
            return res.status(403).send(error.message)
        }
        return res.status(500).send(error.message)
    }
})

module.exports = {
    loginRoute
}
