//Para executar basta fazer mongo < estacoes.js ou no Linux: ./mongo < estacoes.js

use daHora;
//db.graduations.drop();

db.graduations.insert({
    name: "Ciência da Computação",
    hours: 192
});

db.graduations.insert({
    name: "Design Digital",
    hours: 192
});

db.graduations.insert({
    name: "Engenharia de Computação",
    hours: 192
});

db.graduations.insert({
    name: "Engenharia de Software",
    hours: 288
});

db.graduations.insert({
    name: "Redes de Computadores",
    hours: 192
});

db.graduations.insert({
    name: "Sistemas de Informação",
    hours: 288
});