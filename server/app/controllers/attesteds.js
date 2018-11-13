let Attested = require('../models/attested')

module.exports.insertAttested = function(req, res){
    let attested = req.body;

    if (req.file) {
        attested.file = req.file.filename;
    }

    let promise = Attested.create(attested);
    promise.then(
        function(attested){
            res.status(201).json(attested);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getAttested = function(req, res){
    let id = req.params.id;

    let promise = Attested.findById(id)
    .populate('user', '-password').exec();
    promise.then(
        function(attested){
            res.status(201).json(attested);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.getAttestedsFromUser = function(req, res){
    let id = req.params.id;
    let criterio = { 'user': id };

    let promise = Attested.find(criterio)
    .populate('graduation').exec();

    promise.then(
        function (attested) {
            res.json(attested);
        }
    ).catch(
        function (error) {
            res.status(500).send("Não contém atividades complementares");
        }
    );
}
