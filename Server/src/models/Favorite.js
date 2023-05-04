const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
         require: true
      },

      name: {
         type: DataTypes.STRING,
         allowNull: false,
         require: true
      }, 

      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false,
         require: true
      }, 

      species: {
         type: DataTypes.STRING,
         allowNull: false,
         require: true
      }, 

      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
         require: true
      }, 

      origin: {
         type: DataTypes.STRING,
         allowNull: false, 
         require: true
      }, 

      image: {
         type: DataTypes.STRING,
         allowNull: false, 
         require: true
      }, 

   }, { timestamps: false });
};
