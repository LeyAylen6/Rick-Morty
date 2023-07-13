const signUpRoute = require('express').Router()
const { postUser } = require('../controllers/postUser.js')

signUpRoute.post('/signUp', async(req, res) => { //Dice que sea /login??
    try {
        const { username, email, password } = req.body;

        if ( !username || !email || !password ) {
            return res.status(400).send("Faltan datos");
        };
        
        const newUser = await postUser(username, email, password)   

        return res.status(201).json(newUser);

    } catch(error) {
        if (error.message === 'El email ya existe') {
            return res.status(400).send(error.message)
        } 
        return res.status(500).send(error.message)
        
    }
});

module.exports = {
    signUpRoute
}