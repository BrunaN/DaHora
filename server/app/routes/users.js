let controller = require('../controllers/users');

module.exports = function(app){
    app.get('/api/user/:id', controller.getUser)
    app.post('/api/user', controller.insertUser)
}