const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER, // Id dice que siempre lo recibe null en postman
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
         require: true
      },

      username: {
         type: DataTypes.STRING,
         allowNull: false,
         require: true,
         isEmail: true,
         unique: true
      },

      email: {
         type: DataTypes.STRING,
         allowNull: false,
         require: true,
         isEmail: true,
         unique: true
      },

      password: {
         type: DataTypes.STRING,
         allowNull: false, 
         require: true
      }
      
   }, { timestamps: false });
};
