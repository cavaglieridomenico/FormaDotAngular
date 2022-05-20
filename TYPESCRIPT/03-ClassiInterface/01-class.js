var Persona = /** @class */ (function () {
    //avremo un costruttore il quale viene lanciato nel momento esatto in cui istanzioamo un nuovoi oggetto di tipo Persona
    function Persona(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    Persona.prototype.iscriviti = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    Persona.prototype.getCorsi = function () {
        return this.corsi;
    };
    return Persona;
}());
//creo un'istanza della classe PErsona
var personaStud = new Persona("Pippo", "Rossi", 35, ['Angular', 'SpringBoot']);
personaStud.iscriviti('Php');
// console.log(personaStud.corsi);
console.log(personaStud.getCorsi());
