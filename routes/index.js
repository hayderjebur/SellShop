const express = require('express');
const router = express.Router();
const {
  postRegister,
  postLogin,
  getLogout,
  getHomePage,
  getRegister,
  getLogin,
  getProfile,
  updateProfile,
  getForgetPassword,
  putForgetPassword,
  getResetPassword,
  putResetPassword,
} = require('../controllers');
const { asyncErrorHandler } = require('../middleware');

/* GET home page. */
router.get('/', getHomePage);

/* GET /register */
router.get('/register', getRegister);

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login */
router.get('/login', getLogin);

/* POST /login */
router.post('/login', postLogin);

// Logout
router.get('/logout', getLogout);

/* GET /profile */
router.get('/profile', getProfile);

/* PUT /profile/:user_id */
router.put('/profile/:user_id', updateProfile);

/* GET /forgot */
router.get('/forgot', getForgetPassword);

/* PUT /forgot */
router.put('/forgot', putForgetPassword);

/* GET /reset */
router.get('/reset/:token', getResetPassword);

/* PUT /reset */
router.put('/reset/:token', putResetPassword);

module.exports = router;
