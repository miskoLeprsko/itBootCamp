// test primeri

let a = [6, 8, 9, 3, 1];

// ZADATAK 2 =============================================================================

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}

console.log(sumaElem(a));

// ZADATAK 5 ===========================================================================

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max){
            max = el;
        }
    });
    return max;
}

console.log(maxVr(a));

// zadatak 3 4 6
// ZADATAK 3 ========================================================================

let proizvodBr = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    });
    return proizvod;
}

console.log(proizvodBr(a));

// zadatak 4 =================================================================================

let srVr = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    let srednjaVr = suma / niz.length;
    return srednjaVr;
}
console.log(srVr(a));

// zadatak 6=======================================================================

let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min){
            min = el;
        }
    });
    return min;
}

console.log(minVr(a));

// zadatak 7 =======================================================================


let maxIndex = niz => {
    let index = [];
    let highest = Math.max(...a);
    niz.forEach(function(el , i) {
        if (el == highest) {
            index.push(i);       
        }
    });
    return index;
}

console.log(maxIndex(a));

let maxIndex1 = niz => {
    let maxVr = niz[0];
    let maxInd = 0;
    niz.forEach((el , i) => {
        if(el > maxVr) {
            maxVr = el;
            maxInd = i;
        }
    });
    return maxInd;
}

console.log(maxIndex1(a));

// zadatak 7.1 vratiti sve indexe pojavljivanja max vrednosti

let sviIndexiMaxVr = niz => {
    let maxVr = niz[0];
    let sviIndexi = [];
    niz.forEach((el , i) => {
        if (el >= maxVr) {
            maxVr = el;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}

// zadatak  8===============================================================================

let minIndex = niz => {
    let index = [];
    let lowest = Math.min(...a);
    niz.forEach(function(el , i) {
        if (el == lowest) {
            index.push(i);       
        }
    });
    return index;
}

console.log(minIndex(a));

// zadatak 9==============================================================================

let veciOdSr = niz => {
    suma = 0;
    
}

let b = [9, 5, 6, 9, 8, 9, 9]; //

console.log(maxIndex1(b));
console.log(sviIndexiMaxVr(b));

// 19 ispisati duzinu svakog elementa u nizu stringova =======================================

let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

let imena = ["stefan","Vladislav","nikola","Milan","Nevena","maja"];
duzinaSvihStringova(imena);

// 20 Odrediti element u nizu stringova sa najvecom duzinom ====================================================

let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if ( el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}

console.log(stringMaxDuzina(imena));

// zadatak 24 ================================================================================
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        // c.push(a[i], b[i]);
        c.push(el, b[i]);
    })
    return c;
}
let n1 = [1,2,3,4];
let n2 = [5,6,7,8];

console.log(zad24(n1, n2));

// zadatak 25 ==============================================================================

let zad25for = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}


console.log(zad25for(n1, n2));

let zad25ForEach = (a,b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(el * b[i]);
    });
    return c;
}

console.log(zad25ForEach(n1, n2));

// zadatak 26 ================================================================================



// a = [a[0], a[1]....a[2n-1]]// niz a ima 2n elemenata
// n = 3 => a ima 6 elemenata a[0], a[1],a[2], a[3],a[4], a[5],
//Treba formirati niz b = b[0], b[1], b[2]
// b[i]= (a[i] + a[2n - 1 - i]) / 2
// b[0] = (a[0] + a[5]) /2
// b[1] = (a[1] + a[4]) /2
// b[2] = (a[2] + a[3]) /2

let zad26For = a => {
    let k = a.length
    let n = k/2;
    let b = [];
    for(let i =  0 ; i < n; i ++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2
    }
    return b;
}

console.log(zad26For(n1));
console.log(zad26For(n2));

let n3 = [5,8,0,1,4,2,4,3];
console.log(zad26For(n3));

let zad26ForEach = a => {
    let b = [];
    let k = a.length;
    let n = k / 2;
    a.forEach((el, i) => {
        if ( i < n ) {
            b[i] = (a[i] + a[2 * n - 1 - i])/2;
        }
    });
    return b;
}

console.log(zad26ForEach(n3));