let controller = require('../controllers/users');
let auth = require('../controllers/auth');

module.exports = function(app){
    app.post('/api/user/login', auth.login);
    app.post('/api/users', controller.insertUser);
    app.use('/api/users', auth.checkToken);
    app.get('/api/users', controller.getUsers);
    app.get('/api/users/:id', controller.getUser);
}