const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate (models) {
      Brand.hasMany(models.Phone, {
        foreignKey: { name: 'brandId', allowNull: false },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Brand.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
        },
      },
    },
    {
      sequelize,
      modelName: 'Brand',
      underscored: true,
    }
  );
  return Brand;
};
