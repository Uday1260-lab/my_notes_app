const express = require('express')
const router = express.Router();
const {isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController')


router.get('/dashboard', dashboardController.dashboard);



module.exports = router;