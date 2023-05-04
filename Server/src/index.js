const { server } = require('./app.js')
const { conn } = require('./DB_connection');

const PORT = 3001;

// Sincroniza Sequelize y pasamos listen en un then.
conn.sync({ force: true })
.then(() => {   
    server.listen(PORT, () => {
        console.log('server raisen in port: ' + PORT);
    })
}) 

/*
En etapa de creación y modificación de MOdels (de tablas)
{ force: true } -> RESET ->  DROP (delete) a todas las TABLAS y vuelve a crear según su config

En etapa de Consultas (crear, eliminar, modificar datos)
{ force: false } -> mantiene todo igual  y persistente

{ alter: true } -> UPDATE ->  tabla name edad           actualiza y no perdemos datos
                                              email
*/




