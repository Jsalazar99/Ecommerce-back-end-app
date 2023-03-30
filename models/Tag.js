const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

// set up fields and rules for Product model
Tag.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        tag_name: { 
            type: DataTypes.STRING
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Tag'
      }
    );

module.exports = Tag; 


