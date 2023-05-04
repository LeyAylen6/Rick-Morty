const getCharByIdRoute = require('express').Router()
const { getCharById } = require('./../controllers/getCharById.js')

getCharByIdRoute.get('/character/:id', async (req, res) => {
    const { id } = req.params
    response = await getCharById(id)

    if(response.status == 200) {
        return res.status(200).json(response.character)

    } else if (response.status == 404) {
        return res.status(404).send('You must provide an id')
    }
    return res.status(500).send(response.message)
    }
);

module.exports = {
    getCharByIdRoute
}