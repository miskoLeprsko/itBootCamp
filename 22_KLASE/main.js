// moduli exportuju promenjive funkcije klase 
import Auto from "./moduli/auto.js"

let a1 = new Auto("Audi", "Bela", true);  // a1._marka, a1._boja, a1._imaKrov
console.log(a1);
a1.sviraj();

let a2 = new Auto("Peugeot", "Plava", false)  // a1._marka, a1._boja, a1._imaKrov
console.log(a2);
console.log(a2.marka);
console.log(a2.boja);
console.log(a2.imaKrov);
console.log(a2.marka);
a2.sviraj();

a2.marka = "Citroen";
console.log(a2.marka);
a2.imaKrov = "blabla";
console.log(a2.imaKrov);

a1.marka = "";
console.log(a1.marka);
a1.boja = "" ;
console.log(a1.boja);

let a3 = new Auto("","","")
console.log(a3);