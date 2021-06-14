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
    var computerNums = [];
    var arrayUser = [];
    var rightNumbers = [];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    while (computerNums.length < 5) {
        var randomNum = getRandomNumber(1, 100);
        if (!computerNums.includes(randomNum)) {
            computerNums.push(randomNum);
        }
    }
    alert("Attenzione! Memorizza questi numeri: " + computerNums);
    console.log(computerNums);
    /* creo una funzione con un timer di 30000 secondi al suo interno metterò un ciclo che chiederà 5 volte un numero all'utente, 
    mettendo SE il numero detto è corretto allora scrivi numero corretto se non è presente nell'arrey scrivi non corretto. */
    var result = document.querySelector(".result");
    setTimeout(function() {
        console.log('SetTimeout inizio esecuzione');
        while (arrayUser.length < 5) {
            var userNum = parseInt(prompt("Prova la tua memoria: inserisci un numero da 1 a 100!"));
            while (isNaN(userNum) || userNum < 1 || userNum > 100) {
                alert("Attenzione solo un numero da 1 a 100")
                var userNum = parseInt(prompt("Prova la tua memoria: inserisci un numero da 1 a 44100!"));
            }
            arrayUser.push(userNum);
            if (computerNums.includes(userNum)) {
                rightNumbers.push(userNum);
            }
        }
        if (rightNumbers.length > 0) {
            result.innerHTML = "Hai indovintato " + rightNumbers.length + " numeri, eccoli quali " + rightNumbers;
            if (rightNumbers.length === 5) {
                result.innerHTML = "Hai indovintato tutti i numeri " + rightNumbers;
            }
        } else {
            result.innerHTML += "Mi dispiace! Non ne hai indovinato nemmeno uno!"
        }
        console.log("hai indovintato " + rightNumbers.length + " numeri, eccoli quali " + rightNumbers);
    }, 30000);



});