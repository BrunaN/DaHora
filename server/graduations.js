//Para executar basta fazer mongo < graduations.js ou no Linux: ./mongo < graduations.js

use daHora;
db.graduations.drop();

db.graduations.insert({
    id: "1",
    name: "Ciência da Computação",
    hours: 192
});

db.graduations.insert({
    id: "2",
    name: "Design Digital",
    hours: 192
});

db.graduations.insert({
    id: "3",
    name: "Engenharia de Computação",
    hours: 192
});

db.graduations.insert({
    id: "4",
    name: "Engenharia de Software",
    hours: 288
});

db.graduations.insert({
    id: "5",
    name: "Redes de Computadores",
    hours: 192
});

db.graduations.insert({
    id: "6",
    name: "Sistemas de Informação",
    hours: 288
});