let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        user: {
            type: mongoose.Schema.ObjectId,
            ref:'User',
            required: true
        },
        title:{
            type: String,
            required: true
        },
        hours: {
            type: Number,
            required: true
        },
        type:{
            type: Number,
            required: true
        },
        _file:{
            type: String,
            required: true
        }
    });
    return mongoose.model('Attested', schema);
}();