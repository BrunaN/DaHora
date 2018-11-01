let Graduation = require('../models/graduation');

module.exports.getGraduation = function(req, res){
    let id = req.params.id;
    let criterio = {'id': id};
    let promise = Graduation.findOne(criterio);
    promise.then(
        function(graduation){
            res.status(201).json(graduation);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getGraduations = function(req, res){
    let promise = Graduation.find();
    promise.then(
        function(graduation){
            res.status(201).json(graduation);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}