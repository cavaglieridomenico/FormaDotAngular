console.log("ciao ragazzi");
//primitive: Number, String, Boolean
//complessi: Array, Objects
//Funzioni o metodi
//dichiaro
var numero; //n minuscola, N maius 
//assegno
numero = 10;
console.log("Il mio numero è : " + numero);
var saluto;
saluto = "Ciao classe Formatemp!";
console.log(saluto);
var interruttore;
interruttore = false;
console.log("Il pc è acceso? " + interruttore);
//dichiaro e assegno su una riga
var giornoSettimana = "Giovedì";
console.log("Il corso è partito : " + giornoSettimana);
console.log(giornoSettimana);
var meseAnno = "Maggio";
console.log(typeof meseAnno);
//Array
var hobbies;
hobbies = ['Musica', 'Programmazione', 'Sport', 'Poesia'];
var elDemo = document.getElementById('demo');
for (var i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
    elDemo.innerHTML += '<li>' + hobbies[i] + '</li>';
}
