let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        graduation:{
            type: mongoose.Schema.ObjectId,
            ref: 'Graduation',
            require: true
        },
        enrollment: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    return mongoose.model('User', schema);
}();