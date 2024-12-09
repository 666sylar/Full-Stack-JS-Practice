const phoneController = require('./controllers/phoneController');

(async function () {
  try {
    const phoneData = {
      model: 'BlackBerry Torch 9800',
      brand: 'BlackBerry',
      year: 2010,
      ram: 1,
      processor: '624 MHz',
      screenSize: 4,
      hasNFC: false,
    };

    // додавання нового телефону
    const newPhone = await phoneController.addPhone(phoneData);
    console.log('Phone added:', newPhone);

    // отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва)
    const phonesPage3 = await phoneController.getPhones(3, 4);
    console.log('Phones on page 3:', phonesPage3);

    // *отримання списку телефонів певного року видання
    const phones2020 = await phoneController.getPhonesByYear(2020);
    console.log('Phones from 2020:', phones2020);

    // *отримання списку телефонів старше 2020 року випуску
    const oldPhones = await phoneController.getPhonesOlderThan(2020);
    console.log('Phones older than 2020:', oldPhones);

    // оновлення: змінити розмір оперативної пам'яті телефону з id: 1
    const updatedRam = await phoneController.updatePhoneRam(1, 10);
    console.log('Updated phone RAM (id 1):', updatedRam[1][0]);

    // *оновлення: додати нфс всім телефонам 2021 року випуску
    const nfcUpdate = await phoneController.addNfcTo2021Phones();
    console.log('Added NFC to phones from 2021:', nfcUpdate[1]);

    // видалення телефону з id: 2
    const deletedPhone = await phoneController.deletePhoneById(2);
    console.log('Deleted phone with id 2:', deletedPhone);

    // *видалення телефонів 2010 року випуску
    const deleted2010Phones = await phoneController.deletePhonesByYear(2010);
    console.log('Deleted phones from 2010:', deleted2010Phones);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
