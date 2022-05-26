var Manager = /** @class */ (function () {
    function Manager(nome) {
        this.nome = nome;
    }
    Manager.prototype.calcolaStip = function (moltiplicatore) {
        var stipendio = moltiplicatore * 1000;
        return stipendio;
    };
    return Manager;
}());
var manager1 = new Manager("Mario");
console.log(manager1.calcolaStip(4.6));
var Operaio = /** @class */ (function () {
    function Operaio(nome, moltiplicatore) {
        this.nome = nome;
        this.moltiplicatore = moltiplicatore;
    }
    Operaio.prototype.calcolaStip = function () {
        var stipendio = this.moltiplicatore * 1000;
        return stipendio;
    };
    return Operaio;
}());
var operaio1 = new Operaio("Ciro", 1.5);
console.log(operaio1.calcolaStip());
console.log(operaio1.moltiplicatore);
var Sguattero = /** @class */ (function () {
    function Sguattero(nome, moltiplicatore) {
        this.moltiplicatore = moltiplicatore;
        this.nome = nome;
    }
    Sguattero.prototype.calcolaStipendio = function (moltiplicatore) {
        return moltiplicatore * 1000;
    };
    ;
    return Sguattero;
}());
var sguatt1 = new Sguattero("Nino", 0.8);
sguatt1.calcolaStipendio(sguatt1.moltiplicatore);
