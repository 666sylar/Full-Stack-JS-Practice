const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      Phone.belongsTo(models.Brand, {
        foreignKey: { name: 'brandId', allowNull: false },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 2000,
          max: new Date().getFullYear(),
        },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[4, 6, 8, 12, 16]],
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      screenSize: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 4.0,
          max: 10.0,
        },
      },
      hasNFC: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'has_nfc',
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
