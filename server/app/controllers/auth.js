let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let User = require('../models/user');

module.exports.login = function(req, res){
    let promise = User.findOne({'email' : req.body.email});
    console.log(req.body);
    promise.then(
        function(user){
            console.log(user);
            if(bcrypt.compareSync(req.body.password, user.password)){
                console.log("entrou aqui")
                let token = jwt.sign({id: user._id}, 'daHora');
                console.log(token);
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

module.exports.checkToken = function(req, res, next){
    jwt.verify(req.query.token, 'daHora',
        function(err, decoded){
            if(err){
                res.status(401).json({message: "Não autorizado"})
            }else{
                next()
            }
        }
    )
};

