const createHttpError = require('http-errors');
const _ = require('lodash');
const { Brand, Phone } = require('../db/models');

exports.createPhoneForBrand = async (req, res, next) => {
  try {
    const {
      body,
      params: { id: brandId },
    } = req;

    if (body.brandId) {
      return next(
        createHttpError(
          400,
          'brandId should not be included in the request body'
        )
      );
    }

    const foundBrand = await Brand.findByPk(brandId);

    if (!foundBrand) {
      return next(createHttpError(404, 'Brand not found'));
    }

    const createdPhone = await Phone.create({ ...body, brandId });

    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getBrands = async (req, res, next) => {
  try {
    const foundBrands = await Brand.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundBrands });
  } catch (err) {
    next(err);
  }
};

module.exports.getBrandPhones = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundBrand = await Brand.findByPk(id);

    if (!foundBrand) {
      return next(createHttpError(404, 'Brand Not Found'));
    }

    const foundBrandPhones = await foundBrand.getPhones({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Brand,
        attributes: ['name'],
      },
    });

    res.status(200).send({ data: foundBrandPhones });
  } catch (err) {
    next(err);
  }
};
