const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const notice_controller = require('../controllers/notices_controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', notice_controller.test);
router.post('/', notice_controller.crear);

module.exports = router
