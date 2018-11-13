let controller = require('../controllers/attested');

module.exports = function(app){
    app.post('/api/attesteds', controller.insertAttested);
    app.get('/api/user/:id/attesteds', controller.getAttestedsFromUser);
    app.get('/api/attesteds/:id', controller.getAttested);
}
