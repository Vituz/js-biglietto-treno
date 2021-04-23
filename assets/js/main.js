// Richieta chilometri da percorrere
var percorso = parseFloat(prompt("Ciao, quanti Km vuoi percorrere?"));

var euroKm = 0.21;

var sconto;

var messageSconto = document.getElementById("sconto");

if (isNaN(percorso)) {
    alert("Devi inserire un valore numerico! Utilizza il punto per i decimali");
}

console.log(percorso);

document.getElementById("km_da_percorrere").innerHTML = percorso + "Km";

// Richiesta età utente
var etaUtente = parseInt(prompt("Quanti anni hai?"));

if (isNaN(etaUtente) || etaUtente < 1 || etaUtente > 100) {
    alert("Inserisci un valore numerico intero")
}

console.log(etaUtente);

document.getElementById("eta_utente").innerHTML = etaUtente;

// Sconto del 20% per i minorenni, Sconto del 40% per gli over 65

if (etaUtente <= 17) {
    sconto = 0.20;
    console.log(sconto);
    messageSconto.innerHTML = "Sconto del 20% per i minorenni.";

} else if (etaUtente >= 65) {
    sconto = 0.40;
    console.log(sconto);
    messageSconto.innerHTML = "Sconto del 40% per gli over 65.";
    
} else {
    sconto = 1;
    console.log(sconto);
    messageSconto.innerHTML = "Nessuno sconto applicabile.";
}

// Calcolo del prezzo totale del biglietto (0.21€/km)

var prezzoTotale = percorso * euroKm;

console.log(prezzoTotale);

document.getElementById("prezzo_totale").innerHTML = prezzoTotale.toFixed(2) + " €";

//Prezzo finale del biglietto

var prezzoScontato = prezzoTotale - (prezzoTotale * sconto);

document.getElementById("prezzo_finale").innerHTML = prezzoScontato.toFixed(2) + " €";