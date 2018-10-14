let controller = require('../controllers/users');
let auth = require('../controllers/auth');

module.exports = function(app){
    app.post('/api/users/login', auth.login);
    app.post('/api/user', controller.insertUser);
    app.use('/api/users', auth.checkToken);
    app.get('/api/user/:id', controller.getUser);
}