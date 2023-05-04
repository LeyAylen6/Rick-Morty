const { Favorite } = require('./../DB_connection');

const postFav = async (name, origin, status, image, species, gender) => {
        
    const favorite = {
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
    
    const [newFavorite, created] = await Favorite.findOrCreate({
        where: favorite,
        default: favorite
    })

    if(!created) throw new Error('Este personaje ya existe en favoritos')
    
    const allFavorites = Favorite.findAll()

    return allFavorites;
};

module.exports = { postFav }