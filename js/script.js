// CREO UN OGGETTO STUDENTE E POI LO STAMPO A SCHERMO
var studente = {
  nome: 'Pdor',
  cognome: 'FigliodiKmer',
  eta: 85
};

var lista = $('#lista');

for(var key in studente){
  lista.append("<li>" + key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() + ": " + studente[key] + "</li>");
}


// CREO UN ARRAY DI OGGETTI DI STUDENTI E POI LI STAMPO A VIDEO
var studenti = [
  {
    nome: 'Aldo',
    cognome: 'Baglio',
    eta: 45
  },
  {
    nome: 'Giovanni',
    cognome: 'Storti',
    eta: 56
  },
  {
    nome: 'Giacomo',
    cognome: 'Poretti',
    eta: 64
  }
];

var listaStudenti = $('#listaStudenti');

for(var i = 0; i < studenti.length; i++){
  for(var key in studenti[i]){
    listaStudenti.append("<li>" + key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() + ": " + studenti[i][key] + "</li>");
  }
}
