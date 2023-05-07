const { user_favorite } = require('../DB_connection');

const deleteFav = async (id, userId) => {
    
  const userFound = await user_favorite.findOne({
    where: { UserId: userId }
  })

  if (!userFound) throw new Error('El usuario no existe')

  const falvoriteFound = await user_favorite.findOne({
    where: { UserId: userId, FavoriteId: id }
  })

  if (!falvoriteFound) throw new Error(`El usuario no tiene favoritos con el id ${id}`)

  await user_favorite.destroy({
    where: {
      UserId: id,
      FavoriteId: userId
    }
  });
  return id;
};

module.exports = { deleteFav }