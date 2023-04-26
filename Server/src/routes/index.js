const { getCharById } = require('./../controllers/getCharById.js')
const { postFav, deleteFav } = require('./../controllers/handleFavorites.js')
const { login } = require('./../controllers/login.js')
const routes = require('express').Router()

// rutas -> req y res
//controladores -> logica.

routes.get('/login', (req, res) => {
    const userData = req.query

    if (login(userData)) {
        res.status(200)
        res.send({access: true})
    } else {
        res.status(400)
        res.send({access: false})
    }
});

routes.get('/character/:id', async (req, res) => {
    const { id } = req.params
    response = await getCharById(id)

    if(response.status == 200) {
        res.status(200)
        res.send(response.character)

    } else if (response.status == 404) {
        res.status(404)
        res.send('You must provide an id')

    } else {
        res.status(500)
        res.send(response.message)
    }
});

routes.post('/fav', (req, res) => {
    const character = req.body

    res.send(postFav(character))
});

routes.delete('/fav/:id', (req, res) => {
    const { id } = req.params
    res.send(deleteFav(id))
});

module.exports = {
    routes
}