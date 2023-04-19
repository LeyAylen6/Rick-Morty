const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        response.data
        // res.end(response.data)

        let myResponse = {
            id: id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            status: response.data.status,
        }
        res.writeHead(200, {'Content-Type': 'aplication/json'})
        res.end(JSON.stringify(myResponse))

    }).catch((error) => {
        res.writeHead(500, {'Content-Type':'text/plain'})
        res.end(error.message)
    })
}

module.exports = {
    getCharById
}

