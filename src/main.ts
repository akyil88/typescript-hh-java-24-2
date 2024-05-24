let Alter: number;
Alter = 25;
console.log(Alter);


for (let i = 1; i <= Alter; i++) {
    console.log(i);
}

function checkAge(age: number): void {
    if (age > 18) {
        console.log("Sie sind über 18 Jahre alt.");
    } else {
        console.log("Sie sind unter 18 Jahre alt.");
    }
}

const meinAlter: number = 20;
checkAge(meinAlter); // Ausgabe: "Sie sind über 18 Jahre alt."

const anderesAlter: number = 16;
checkAge(anderesAlter); // Ausgabe: "Sie sind unter 18 Jahre alt."


//let score: number = 0;
//if (score !== 0) {
   // console.log("Score ist verfügbar.");
//}

let score: number = 0;

// Prüfen, ob score als wahrer Wert ausgewertet wird
if (score) {
    console.log("Score wird als wahr gewertet.");
} else {
    console.log("Score wird nicht als wahr gewertet.");
}

let benutzername: string = "";

// Prüfen, ob Benutzername einen Wert hat
if (benutzername) {
    console.log("Benutzername ist verfügbar.");
}


const numbers: number[] = [1,2,3,4,5];
const doubledNumbers = numbers.map(num=>num * 2);
console.log(doubledNumbers);

const words: string[] = ["Florian", "Max", "Daniel","Hans"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);

const numbers2: number[] = [1,2,3,4,5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const numbers3: number[] = [3,7,8,5,11]
const hasNumberGreaterThanten = numbers3.some(num => num > 10);
console.log(hasNumberGreaterThanten);