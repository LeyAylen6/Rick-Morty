const addFavRoute = require('express').Router()
const { postFav } = require('../controllers/postFav.js')

addFavRoute.post('/fav', async (req, res) => {
    try {
        const { character } = req.body
        const { id, name, origin, status, image, species, gender } = character
        const { user } = req.body

        if (!id || !name || !origin.name || !status || !image || !species || !gender || !user.id ) {
            return res.status(401).send("Faltan datos")
        }
        
        const postFavorite = await postFav(id, name, origin.name, status, image, species, gender, user.id)
        
        return res.status(200).json(postFavorite);

    } catch(error) {
        if (error.message === 'Este personaje ya existe en favoritos') {
           return res.status(400).send(error.message)
        }
        return res.status(500).send(error.message)
    }
});

module.exports = {
    addFavRoute
}
