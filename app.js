// Chiedere numero di chilometri 
let kmNumber = prompt("inserisci il numero di kilometri del tuo viaggio");
console.log(kmNumber);

if (isNaN(kmNumber)) { // controllo se distanza è scritta in numeri 
    alert("per favore inserisci una distanza valida (scritta in numeri)");
    kmNumber = prompt("inserisci il numero di kilometri del tuo viaggio (scritto in numeri!)");
}
console.log(kmNumber);

// chiedere età (bonus:chiedere data di nascita)
let userAge = parseInt(prompt("inserisci la tua età"));
console.log(userAge);

if (isNaN(userAge)) {                      // controllo se età è scritta in numero
    alert("per favore inserisci un età valida (scritta in numeri)");
    userAge = parseInt(prompt("inserisci la tua età (in numeri!)"));
} else if (userAge < 0 || userAge > 115) { // controllo se età è valida
    alert("per favore inserisci un età valida! (o non sei nato o sei l'uomo più vecchio al mondo)");
    userAge = parseInt(prompt("inserisci la tua età (in numeri!)"));
}
console.log(userAge);

// prezzo del biglietto: km * 0.21€ 
let ticketPrice = kmNumber * 0.21;
console.log(ticketPrice);


if (userAge < 18) {        // sconto possibile: 20% per età < 18 anni
    ticketPrice = ticketPrice * 0.8;
} else if (userAge > 64) { // sconto possibile: 40% per età > 64 anni 
    ticketPrice = ticketPrice * 0.6;
}
console.log(ticketPrice);

// arrotondare il prezzo finale
let finalTicketPrice = Math.round(ticketPrice * 100) / 100
console.log(finalTicketPrice);


// printare prezzo finale
document.getElementById("ticket_price").innerHTML += finalTicketPrice + "€";