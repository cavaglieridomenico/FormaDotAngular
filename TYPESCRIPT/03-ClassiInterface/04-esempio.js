//siamo in un'officina. Abbiamo dei mnotori e delle auto 
//implementa delle proprietà per le interfacce; modello, marca, identificativo motore
//Sviluppa le classi di conseguenza
//Tramite console.log nella classe Officina presenta la nuova auto,
var Bmw = /** @class */ (function () {
    //chiameremo Dependency Injection 
    function Bmw(motore) {
        this.motore = motore;
        this.velocita = 0;
    }
    Bmw.prototype.muovi = function () {
        this.velocita = this.motore.aumentaPotenza();
        return this.velocita;
    };
    return Bmw;
}());
var Motore1200 = /** @class */ (function () {
    function Motore1200() {
    }
    Motore1200.prototype.aumentaPotenza = function () {
        return 10;
    };
    Motore1200.prototype.diminuisciPotenza = function () {
        return -10;
    };
    return Motore1200;
}());
var Motore1500 = /** @class */ (function () {
    function Motore1500() {
    }
    Motore1500.prototype.aumentaPotenza = function () {
        return 30;
    };
    Motore1500.prototype.diminuisciPotenza = function () {
        return -30;
    };
    return Motore1500;
}());
var officina = /** @class */ (function () {
    function officina() {
        this.autos = [];
        this.autos.push(new Bmw(new Motore1200()));
    }
    officina.prototype.testaAuto = function () {
        //voglio testare se le auto si muovono oppure no 
        for (var _i = 0, _a = this.autos; _i < _a.length; _i++) {
            var a = _a[_i];
            console.log(a.muovi());
        }
    };
    return officina;
}());
