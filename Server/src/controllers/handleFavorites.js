let myFavorites = [];

const postFav = (character) => {

    if (character) { 
        myFavorites.push(character);
    }

    return myFavorites;
};

const deleteFav = (id) => {
    if (id) {
        myFavorites = myFavorites.filter((character) => character.id != id)
    }
    
    return myFavorites;
};

module.exports = {
    postFav,
    deleteFav
};