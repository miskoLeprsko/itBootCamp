
let blog1 = {
    title: "IF naredba grananja",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
};
let arrBlogs = [blog1, blog2, blog3];

//  zadatak 1 : Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova

let sumLikes = arr => {
    let sum = 0;
    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}

console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);

// zadatak 2 : Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova

let avgLikes = arr => {
    let s = sumLikes(arr);
    let prosecna = s / arr.length;
    return prosecna;
}

console.log(`Prosecan broj lajkova je: ${avgLikes(arrBlogs)}`);

// zadatak 3 : Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let visePOdN = arr => {
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].likes >= arr[i].dislikes) {
            console.log(`${arr[i].title}`)
        }
    }
}

visePOdN(arrBlogs);

// zadatak 4 : Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploVise = arr => {
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].likes > arr[i].dislikes * 2) {
            console.log(`${arr[i].title}`)
        }
    }
}

duploVise(arrBlogs);

// zadatak 5 : Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let zavrsavajuUzvicnikom = arr => {
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].title.endsWith("!")) {
            console.log(`${arr[i].title}`)
        }
    }    
}

zavrsavajuUzvicnikom(arrBlogs);

