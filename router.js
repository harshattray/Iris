const auth = require('./auth');

module.exports = function (app){
  app.post('/signup', auth.signup);
}
