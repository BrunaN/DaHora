let User = require('../models/user');
let Attested = require('../models/attested')

let bcrypt = require('bcrypt');

module.exports.insertUser = function(req, res){
    let user = new user({
        name: req.body.name,
        email: req.body.email,
        graduation: req.body.graduation,
        enrollment: req.body.enrollment,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    let promise = User.create(req.body);
    promise.then(
        function(user){
            res.status(201).json();
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getUser = function(req, res){
    let id = req.params.id;

    let promise = User.findById(id)
                        .populate('graduation');
    promise.then(
        function(user){
            res.status(201).json({
                id = user._id,
                name: user.name,
                email: user.email,
                enrollment: user.enrollment,
                graduation: user.graduation
            });
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

