let bcrypt = require('bcrypt');
let jwt = require('jasonwebtoken');

let User = require('../models/user');

module.exports.login = function(req, res){
    let promise = User.findOne({'email' : req.body.email});

    promise.then(
        function(user){
            if(bcrypt.compareSync(req.body.senha, user.senha)){
                let token = jwt.sign({id: user._id}, 'daHora');
                res.status(200).json({
                    id: user._id,
                    token: token,
                    message: "Usuário Logado"
                });
            }else{
                res.status(404).send("Login Inválido")
            }
        }
    ).catch(
        function(error){
            res.status(401).send("Inválido");
        }
    );
};

