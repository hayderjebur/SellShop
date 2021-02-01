const passport = require('passport');
const User = require('../models/user');

module.exports = {
  //Get Home Page
  getHomePage(req, res, next) {
    res.render('index', { title: 'Surf Shop - Home' });
  },

  //Get Register
  getRegister(req, res, next) {
    res.send('GET /register');
  },
  //Post Register
  async postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    });

    await User.register(newUser, req.body.password);
    res.redirect('/');
  },

  //Get Login
  getLogin(req, res, next) {
    res.send('GET /login');
  },

  //Post Login
  postLogin(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failurRedirect: '/login',
    })(req, res, next);
  },

  //Get Logout
  getLogout(req, res, next) {
    req.logout();
    res.redirect('/');
  },

  //Get Profile
  getProfile(req, res, next) {
    res.send('GET /profile');
  },

  //Update Profile
  updateProfile(req, res, next) {
    res.send('PUT /profile/:user_id');
  },

  //Get Forget Password
  getForgetPassword(req, res, next) {
    res.send('GET /forgot');
  },

  //Put Forget Password
  putForgetPassword(req, res, next) {
    res.send('PUT /forgot');
  },

  //Get Reset Password
  getResetPassword(req, res, next) {
    res.send('GET /reset/:token');
  },

  //Put Reset Password
  putResetPassword(req, res, next) {
    res.send('PUT /reset/:token');
  },
};
