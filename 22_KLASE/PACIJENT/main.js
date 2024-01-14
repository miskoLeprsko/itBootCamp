import Pacijent from "./pacijent.js"

let pacijent1 = new Pacijent ("Borko", 195, 95);
let pacijent2 = new Pacijent  ("Milos", 185, 90);
let pacijent3 = new Pacijent  ("Jovan", 190, 85);

let pacijenti = [pacijent1,pacijent2,pacijent3]

pacijenti.forEach(pacijent => {
    pacijent.stampaj();
})
pacijenti.forEach(pacijent => {
    pacijent.bmi();
})
pacijenti.forEach(pacijent => {
    console.log(pacijent.kritican());
})

// ispisati podatke o pacijentu sa najmanjom tezinom

let pacijentSaNamjmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0];
    let minTezina = minTezinaPacijent.tezina;
    niz.forEach(pacijent => {
        if(minTezina > pacijent.tezina) {
            minTezina = pacijent.tezina;
            minTezinaPacijent = pacijent;
        }
    });
    return minTezinaPacijent;
}

console.log(pacijentSaNamjmanjomTezinom(pacijenti));

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let pacijentSaNajvecomBmiVrednoscu = niz => {
    let maxBmiPacijent = niz[0];
    let maxBmi = maxBmiPacijent.bmi();
    niz.forEach(pacijent => {
        if(maxBmi < pacijent.bmi()) {
            maxBmi = pacijent.bmi();
            maxBmiPacijent = pacijent;
        }
    })
    return maxBmiPacijent;
}
pacijentSaNajvecomBmiVrednoscu(pacijenti).stampaj();

// Ispisati sve pacijente čije ime sadrži slovo A.

let sadrziSlovoA = niz => {
    niz.forEach(pacijent => {
        if(pacijent.ime.includes("a") || pacijent.ime.includes("A")){
            console.log(pacijent.ime);
        }
    })
}

sadrziSlovoA(pacijenti);

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata

let srednjaVisina = niz => {
    let ukupnaVisina = 0;
    niz.forEach(pacijent => {
        ukupnaVisina += pacijent.visina
    })
    let avg = ukupnaVisina / niz.length
    return avg;
}
console.log(srednjaVisina(pacijenti));



