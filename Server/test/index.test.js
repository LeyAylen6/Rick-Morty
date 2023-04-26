
const { server } = require('../src/app');
const session = require('supertest');
const request = session(server);
// const users = require('./src/utils/users.js')

const character = {
    id: 546,
    name: 'Leila',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: 'unknown',
    image: 'image.jpg',
}

describe('Test de RUTAS', () => { 
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200' , async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/2')

            for (const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }
        });

        it('Si hay un error responde con status: 500', async() => { // EL ID NO EXISTE
                const response = await request.get('/rickandmorty/character/51655d')
                expect(response.statusCode).toBe(500)
        });

        // it('Si el id no existe responde con status: 404', () => {
        //     expect( async() => {
        //         const response = await request.get('/rickandmorty/character/1515615151515161')
        //         expect(response.statusCode).toEqual(404)
        //     })
        // });
    });

    describe('GET /rickandmorty/login', () => {
        const access = { access: true };
        
        it('Si email y password son correctos se debe responder con objeto con la propiedad access en TRUE', async() => {
                const response = await request.get('/rickandmorty/login?email?email@gmail.com&password=123asd')
                expect(response.body).toEqual(access);
        })

        it('Si email y password NO son correctos se debe responder con objeto con la propiedad access en FALSE', async() => {
            const response = await request.get('/rickandmorty/login?email?email@gmail.com&password=123asd')
            access.access = false;
            expect(response.body).toEqual(access);
        })
    });

    describe('POST /rickandmorty/fav', () => {
        it('Debe guardar el personaje en favoritos', async() => {
                const response = await request.post('/rickandmorty/fav')
                send(character);
                expect(response.body).toContainEqual(character);

                // To be, numeros y strings
                // To Equal , arrays y obj
                // toContainEqual, sirve para buscar que contenga en un obj o arr.
        })

        it('Debe agregar personajes a favoritos sin eliminar los existentes', async() => {
            character.id = 1648;
            character.name = 'FT 37a'
            const response = await request.post('/rickandmorty/fav/6')
            send(character);
            expect(response.body.length).toBe(2);
        })
    });

    describe('POST /rickandmorty/fav', () => {
        it('Debe guardar el personaje en favoritos', async() => {
                const response = await request.post('/rickandmorty/fav')
                send(character);
                expect(response.body).toContainEqual(character);

                // To be, numeros y strings
                // To Equal , arrays y obj
                // toContainEqual, sirve para buscar que contenga en un obj o arr.
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos', async() => {
                const response = await request.delete('/rickandmorty/fav/hbcj5552')
                expect(response.body.length).toBe(2);
        });

        it('Si el ID solicitado existe, debería eliminarlo de favoritos', async() => {
            const response = await request.delete('/rickandmorty/fav/5')
            expect(response.body.length).toBe(1);
    });
    });
});

