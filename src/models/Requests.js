const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('requests', {
    id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  }, {
    timestamps: true,
});
};