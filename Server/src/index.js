const { server } = require('./app.js')

const PORT = 3001;

server.listen(PORT, () => {
    console.log('server raisen in port: ' + PORT);
})

