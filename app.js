var express     = require('express')
  , http        = require('http')
  , bodyParser  = require('body-parser')
  , db          = require('./models')
  , users       = require('./routes/users');

var app = express();

// Envorinment conf
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); // for parsing application/json

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err[0];
  } else {
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port' + app.get('port'));
    });
  }
});

module.exports = app;
