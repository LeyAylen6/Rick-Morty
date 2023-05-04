const addFavRoute = require('express').Router()
const { postFav } = require('../controllers/postFav.js')

addFavRoute.post('/fav', (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send("Faltan datos")
        }
        
        const postFavorite = postFav(name, origin, status, image, species, gender)
        
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
