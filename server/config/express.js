let express = require('express');
let userRoutes = require('../app/routes/users');
let bodyParser = require('body-parser');

module.exports = function(){
    let app = express();

    app.set("port", 3000);
    app.use(bodyParser.jason());
    app.use(bodyParser.urlencoded({ extended: false}));

    userRoutes(app);

    return app;
};