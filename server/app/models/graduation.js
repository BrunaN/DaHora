let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        hours: {
            type: Number,
            required: true
        }
    });
    return mongoose.model('Graduation', schema);
}();