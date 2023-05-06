const { getCharById } = require('./controllers/getCharById.js')
require("dotenv").config()
const express = require('express')
const { addFavRoute } = require('./routes/addFavRoute.js');
const { deleteFavRoute } = require('./routes/deleteFavRoute.js');
const { getCharByIdRoute } = require('./routes/getCharacterRoute.js');
const { loginRoute } = require('./routes/loginRoute.js');
const { signUpRoute } = require('./routes/signUpRoute.js');

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"'
    )
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json())

server.use('/rickandmorty', addFavRoute);
server.use('/rickandmorty', deleteFavRoute);
server.use('/rickandmorty', getCharByIdRoute);
server.use('/rickandmorty', signUpRoute);
server.use('/rickandmorty', loginRoute);

module.exports = {server}

