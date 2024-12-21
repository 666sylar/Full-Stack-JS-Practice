const path = require('path');
const multer = require('multer');
const { STATIC_PATH } = require('./../constants');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(STATIC_PATH, 'images'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

function fileFilter (req, file, cb) {
  const MIMETYPE_REG_EXP = /^image\/(png|jpeg)$/;

  cb(null, MIMETYPE_REG_EXP.test(file.mimetype));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadPhoneImage = upload.single('phoneImage');
