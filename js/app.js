const listMail = [
    'gianluca@hotmail.com',
    'tottierpupone@hotmail.it',
    'capitanFuturo@asroma.com',
    'vincenzoDaMalesia@gmail.com',
    'ultrasFedayn@gmail.com'
]
// imposto una flag settata a false in modo 
// tale che se la mail viene trovata si imposta a true
let mailFound = false;

// prompt per l'inserimento dei dati da parte del checker
let check = prompt('inserisci qui la tua mail');

// ciclo for per scorrere gli elementi della lista dove inserisco la condizione
// che se nel checker viene inserita una mail identica a quella presente nella lista
// la imposto la boolflag a true 
for(let i = 0; i< listMail.length; i++){
    if(check === listMail[i]){
        mailFound = true;
        break;
    }

}

// una volta confermata la mail metto una condizione dove se la mail è stata trovata
// esce un msg positivo altrimenti uno negativo
if(mailFound){
    console.log('Mail validata con successo');
}else{
    console.log('Mail negata non puo procedere alla festa');
}