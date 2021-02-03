const dotenv = require('dotenv');
dotenv.config();
const createError = require('http-errors');
const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const passport = require('passport');
const User = require('./models/user');
const session = require('express-session');

const connectDB = require('./config/db');

//Require Routes
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');

//Connect DB
connectDB();

const app = express();

app.engine('ejs', engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//set public assets directory
app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(
  session({
    secret: 'hello world',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Set Local Variables middleware
app.use(function (req, res, next) {
  //Set default title
  res.locals.title = 'Surf Shop';
  //Set success flash message
  res.locals.success = req.session.success || '';
  delete req.session.success;
  //Set error flash message
  res.locals.error = req.session.error || '';
  delete req.session.error;
  next();
});

//Mount Routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  console.log(err);
  req.session.error = err.message;
  res.redirect('back');
});

module.exports = app;
