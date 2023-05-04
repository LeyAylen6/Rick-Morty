const { Favorite } = require('../DB_connection');

const deleteFav = async (id) => {
    
    await Post.destroy({
        where: {
          id: id
        }
    });

    const allFavorites = Favorite.findAll()

    return allFavorites;
};

module.exports = { deleteFav }