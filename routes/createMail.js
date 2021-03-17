const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const createMailController = require('../controllers/createMail');

router.post('/', auth, createMailController);

module.exports = router;