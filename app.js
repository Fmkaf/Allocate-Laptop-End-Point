var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var logger = require('morgan');
var mongoose=require('mongoose')

var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employeeRoutes');
var laptopRouter=require('./routes/laptopRoutes')

var app = express();

// Connecting to database
const url = "mongodb+srv://admin:admin@cluster0.kmfvb7y.mongodb.net/Testdata?retryWrites=true&w=majority"
mongoose.connect(url).then(() => {
	console.log("Data Base ConnectedSuccessful")
}).catch((err) => {
	console.log("Error in the Data Base Connection")
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());  //for parsing json request body
// app.use(express.urlencoded({ extended: false })); for parsing x-www-form-urlencoded request body
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/laptop',laptopRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
