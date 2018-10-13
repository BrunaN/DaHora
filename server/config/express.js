let express = require('express');

module.exports = function(){
    let app = express();

    app.set("port", 3000);
    return app;
};