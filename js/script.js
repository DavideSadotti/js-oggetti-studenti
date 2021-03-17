// CREO UN OGGETTO STUDENTE E POI LO STAMPO A SCHERMO
var studente = {
  nome: 'Pdor',
  cognome: 'FigliodiKmer',
  eta: 85
};

var listaStudente = $('#listaStudente');

for(var key in studente){
  listaStudente.append("<li>" + key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() + ": " + studente[key] + "</li>");
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


// DOPPIO CICLO PER STAMPARE TUTTO L'OGGETTO
// for(var i = 0; i < studenti.length; i++){
//   for(var key in studenti[i]){
//     listaStudenti.append("<li>" + key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() + ": " + studenti[i][key] + "</li>");
//   }
// }

// CICLO SINGOLO PER STAMPARE SOLO NOME E COGNOME
for(var i = 0; i < studenti.length; i++){
  listaStudenti.append("<li>Nome: " + studenti[i].nome + "</li><li>Cognome: " + studenti[i].cognome + "</li>");
}



// CREO UNA FUNZIONE PER FAR INSERIRE ALL'UTENTE UN NUOVO STUDENTE ALL'ARRAY DI STUDENTI
var aggiungiStudente = $('#aggiungiStudente');

aggiungiStudente.click(
  function(){
    studenti.push(
      {
        nome: prompt("Inserisci il nome dello studente"),
        cognome: prompt("Inserisci il cognome dello studente"),
        eta: parseInt(prompt("Inserisi l'età dello studente"))
      }
    );
    console.log(studenti);
  }
);
