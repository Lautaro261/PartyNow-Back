const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('requests', {
    id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    
  }, {
    timestamps: true,
});
};