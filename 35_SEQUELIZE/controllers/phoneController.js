const { Phone } = require('../models');
const { Op } = require('sequelize');

async function addPhone (phoneData) {
  const createdPhone = await Phone.create(phoneData);
  return createdPhone.get();
}

async function getPhones (page = 3, limit = 4) {
  return await Phone.findAll({
    offset: (page - 1) * limit,
    limit,
    order: [['year', 'ASC']],
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
}

async function getPhonesByYear (year) {
  return await Phone.findAll({
    where: { year },
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
}

async function getPhonesOlderThan (year = 2020) {
  return await Phone.findAll({
    where: {
      year: {
        [Op.lt]: year,
      },
    },
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
}

async function updatePhoneRam (id, newRam) {
  return Phone.update(
    { ram: newRam },
    {
      where: { id },
      returning: true,
      raw: true,
    }
  );
}

async function addNfcTo2021Phones () {
  return Phone.update(
    { hasNFC: true },
    {
      where: { year: 2021 },
      returning: true,
      raw: true,
    }
  );
}

async function deletePhoneById (id) {
  return await Phone.destroy({ where: { id } });
}

async function deletePhonesByYear (year) {
  return await Phone.destroy({ where: { year } });
}

module.exports = {
  addPhone,
  getPhones,
  getPhonesByYear,
  getPhonesOlderThan,
  updatePhoneRam,
  addNfcTo2021Phones,
  deletePhoneById,
  deletePhonesByYear,
};
