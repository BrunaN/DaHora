let controller = require('../controllers/graduations');

module.exports = function(app){
    app.get('/api/graduations', controller.getGraduations)
    app.get('/api/graduations/:id', controller.getGraduation)
}