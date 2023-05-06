const axios = require("axios");

const getCharById = async (id) => {
    const { API_KEY, URL_BASE } = process.env;
    
    try {
        // var response = await axios(`${URL_BASE}/${id}?key=${API_KEY}`) // PARA API HENRY
        var response = await axios(`${URL_BASE}/${id}`) // PARA API ORIGINAL
        response = { 
            status: response.status, 
            character : {
                id: response.data.id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                status: response.data.status
            }
        }
        return response 
    
    } catch(error) { 
        return error
    }
}

module.exports = {
    getCharById
}

