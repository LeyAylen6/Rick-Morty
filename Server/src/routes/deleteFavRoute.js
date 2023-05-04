const deleteFavRoute = require('express').Router()
const { deleteFav } = require('../controllers/deleteFav.js')

deleteFavRoute.delete('/fav/:id', (req, res) => {
    try {
        const { id } = req.params

        return res.status(200).json(deleteFav(id))
        
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = {
    deleteFavRoute
}