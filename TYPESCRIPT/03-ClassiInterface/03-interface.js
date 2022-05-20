//L'interfaccia definisce il tipo dell'oggetto, cioè la struttura comune a tutti gli oggetti appartenenti alla classi che implemnetaranno l'interfaccia 
//posso anche istanziare solo un oggetto con queste caratteristiche e questi metodi
// let cittadino: Umano;
// cittadino = {
//     nome: "Pippo",
//     cognome: "Rossi",
//     eta: 40,
//     saluta(){
//         console.log("Ciao, Mondo");
//     }
// }
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    Cittadino.prototype.saluta = function () {
        console.log("Ciao " + this.nome);
    };
    return Cittadino;
}());
var Politico = /** @class */ (function () {
    function Politico(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    Politico.prototype.saluta = function () {
        console.log("Buongiorno, io sono il signor: " + this.cognome + ' ' + this.nome);
    };
    return Politico;
}());
var sindaco = new Cittadino("Paolo", "Rossi", 40);
sindaco.saluta();
var senatore = new Politico("Pierluigi", "Pierantola", 87);
senatore.saluta();
