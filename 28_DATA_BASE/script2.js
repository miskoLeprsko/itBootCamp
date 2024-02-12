class User {
    constructor(n, s, a) {
        this.name = n;
        this.surname = s;
        this.age = a;
    }
}

let branko = new User ("Branko", "Milivojevic", 27);
branko.grad = "Paracin";
// branko.potpis = function() {
//     console.log(this.name,this.surname);
// }
// branko.potpis();
User.prototype.bojaKose = "crna";
let ivan = new User("Ivan", "Stanomirovic", 37);
ivan.poreklo = "Leskovac";



db.collection("Users").doc("istanimirovic")
    .set(Object.assign({}, ivan))
    .then(() => {
        console.log("Uspesno dodat user");
    })
    .catch((e) => {
        console.log(`Greska ${e}`);
    })
db.collection("Users").doc("bmilivojevic")
    .set(Object.assign({}, branko))
    .then(() => {
        console.log("Uspesno dodat user");
    })
    .catch((e) => {
        console.log(`Greska ${e}`);
    })

// JS poziva set metodu kojoj se prodledjuje JS OBJEKA
// na osnovu tog objekta se u bazi kreira novi DOKUME

/*
JS OBJEKAT:
1) Moze za poseban objekat da se dodaju polja imetode (kao i za dokumenta u bazi)
2) Moze da se klasi kojoj pripada objekat da se dodaju polja i metode
3) Moze da se nasledjuju klase {User => UserCreditCard}

Primer:
HTML: Formu gde se unose korisnici
Za sve korisnike pamtimo: ime, prezime,godine,pretplata
Ako korisnik odabere karticu kao nacin pretpalte, za te korisnike pamtiti i broj kartice
*/