let controller = require('../controllers/attesteds');
let multer  = require('multer');
let upload = multer({dest: 'uploads/'});

module.exports = function(app){
    app.post('/api/attesteds', upload.single('file'), controller.insertAttested);
    app.get('/api/user/:id/attesteds', controller.getAttestedsFromUser);
    app.get('/api/attesteds/:id', controller.getAttested);
}
