let express = require('express');

let userRoutes = require('../app/routes/users');
let graduationsRoutes = require('../app/routes/graduations');

let bodyParser = require('body-parser');

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

let initial = function(req, res, next){
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
}

module.exports = function(){
    let app = express();

    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));

    app.use(allowCrossDomain);
    app.use(initial);

    userRoutes(app);
    graduationsRoutes(app);
    return app;
};