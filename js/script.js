// CREO UN OGGETTO STUDENTE E POI LO STAMPO A SCHERMO
var studente = {
  nome: 'Pdor',
  cognome: 'FigliodiKmer',
  eta: 85
};

var lista = $('#lista');

for(var key in studente){
  lista.append("<li>" + key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() + ":" + " " + studente[key] + "</li>");
}
