const deleteFavRoute = require('express').Router()
const { deleteFav } = require('../controllers/deleteFav.js')

deleteFavRoute.delete('/fav/:id', async(req, res) => {
    try {
        const characterId = req.params.id;
        const { userId } = req.body;

        const deleteById = await deleteFav(Number(characterId), userId)
        return res.status(200).json(deleteById)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = {
    deleteFavRoute
}