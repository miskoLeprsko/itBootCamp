document.getElementById("d1").innerHTML = "Ja se zovem Milos Stanojevic";

console.log("pera"); 
console.log("mika");
console.log("It's alright");

//LITERALI


console.log(5);
console.log(-5.189);
console.log(3 + 4);
console.log("3" + "4");
console.log("3 + 4 =", 3 + 4);
console.log("3 + 4 = " + (3 + 4));
console.log(true);
console.log(false);

//PROMENJIVE


let x; // 1) DEKLARACIJA PROMENJIVE (UVODJENJE PROMENJIVE U PROGRAM

x = 5; // 2
console.log(x);

x = "Laza";
console.log(x);

let y = true; //2) DEFINICIJA PROMENJIVE (DEKLARACIJA + DODELA VREDNOSTI)

console.log(y);

const z = -7.6;

let age;

console.log(age, age + 3); //undefined, Nan

age = null;

console.log(age, age + 3); //null, 3

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3 + 4 ) * 2;
console.log(broj);

// broj += 6; // 20
// console.log(broj);

broj = broj + 6; //14 + 6 = 20
console.log(broj);

x = 6;
x++;
console.log(x);

++x;
console.log(x)

x = 6 ;
console.log(x++);
console.log(x);
console.log(++x);