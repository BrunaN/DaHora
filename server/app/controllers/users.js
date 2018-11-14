let User = require('../models/user');
let Graduation = require('../models/graduation');
let Attested = require('../models/attested')

let bcrypt = require('bcrypt');

module.exports.insertUser = function(req, res){
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        graduation: req.body.graduation,
        enrollment: req.body.enrollment,
        password: bcrypt.hashSync(req.body.password, 15),
        hours: req.body.hours
    });

    let promise = User.create(user);
    promise.then(
        function(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                enrollment: user.enrollment,
                graduation: user.graduation,
                hours: user.hours

            });
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getUser = function(req, res){
    let id = req.params.id;

    let promise = User.findById(id).populate('graduation').exec();
    promise.then(
        function(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                enrollment: user.enrollment,
                graduation: user.graduation,
                hours: user.hours
            });
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getUsers = function(req, res){
    let promise = User.find({}, {'password': 0})
    // .populate('graduation')
    .exec();
    promise.then(
        function(users){
            res.status(201).json(users);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.updateUser = function(req, res){
    let id = req.params.id;

    let user = req.body;

    let promise = User.findByIdAndUpdate(id, user);
    promise.then(
        function(user){
            let promise2 = User.findById(user._id);
            promise.then(
                function(new_user){
                    res.status(200).json(new_user);
                }
            ).catch(
                function(error){
                    res.status(404).send("Não existe");
                }
            )
        }
    ).catch(
        function(error){
            res.status(404).send("Não existe");
        }
    )
}
