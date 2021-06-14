/*Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*farò una funzione che mi genera numeri causali, creo quindi un while che mi li pusha dentro un array,
controllando che non siano uguali. 
richiamerò questo array con l'allert facendo vedere questi numeri */

document.addEventListener('DOMContentLoaded', function() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var computerNums = [];

    while (computerNums.length < 5) {
        var randomNum = getRandomNumber(1, 100);
        if (!computerNums.includes(randomNum)) {
            computerNums.push(randomNum);
        }
    }

    console.log(computerNums);

    alert("Attenzione! Memorizza questi numeri: " + computerNums);

});