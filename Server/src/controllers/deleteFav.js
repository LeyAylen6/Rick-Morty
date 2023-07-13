const { user_favorite } = require('../DB_connection');

const deleteFav = async (characterId, userId) => {
    
  const userFound = await user_favorite.findOne({
    where: { UserId: userId }
  })

  if (!userFound) throw new Error('El usuario no existe')

  const falvoriteFound = await user_favorite.findOne({
    where: { UserId: userId, FavoriteId: characterId }
  })

  if (!falvoriteFound) throw new Error(`El usuario no tiene favoritos con el id ${characterId}`)

  await user_favorite.destroy({
    where: {
      UserId: userId,
      FavoriteId: characterId
    }
  });

  return characterId;
};

module.exports = { deleteFav }