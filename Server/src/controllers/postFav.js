const { Favorite } = require('./../DB_connection');
const { User } = require('./../DB_connection');
const { user_favorite } = require('./../DB_connection');
const { Sequelize } = require('sequelize');

const postFav = async (id, name, origin, status, image, species, gender, userId) => {

    //Deberia recibir el id de el usuario
    const favorite = {
        id: id,
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender
    }

    // ! WHERE: 
    // Si encuentra esto devuelve en favorite este obj y created en falso porque ya existe
    // ! DEFAULT: 
    // Si no lo encuentra guarda lo que yo le pase en el default.
    
    const userFound = await User.findOne({
        where: { id: userId }
    })

    if (!userFound) throw new Error('El usuario no existe')

    await Favorite.findOrCreate({ // Solo lo usamos para guardar en la base si no está
        where: favorite,  // Mira si existe el personaje en la DB, si existe lo devuelve sino crea lo que esta en default.
        default: favorite
    })

    const [characterInFavorites, createdFavorite] = await user_favorite.findOrCreate({
        where: { UserId: userId, FavoriteId: id }
    })

    if (!createdFavorite) throw new Error('Este personaje ya existe en favoritos')
    
    // let allFavorites = await user_favorite.findAll({
    //     where: { UserId: userId },
    //     include: [
    //         { model: Favorite, where: { id: Sequelize.col('user_favorite.FavoriteId')} }
    //       ],
    // })

    let allFavorites = await User.findOne({
        where: { id: userId},
        include: Favorite
    })

    return allFavorites.Favorites;
};

module.exports = { postFav }