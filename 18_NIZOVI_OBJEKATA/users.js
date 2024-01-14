let blog1 = {
    title: "IF naredba grananja",
    likes: 50,
    dislikes: 1
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

// let arrBlogs = [blog1, blog2, blog3];

let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 34,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};

///////////////////////////////////////////////////////////////////////////

console.log(user1.blogs[0].title);
user1.logBlogs();
user2.logBlogs();

// 1. zadatak : Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1 , user2];

// Ispis username polja iz users niza

users.forEach(el => {
    console.log(el.username);
});

// Ispis svih naslova blogova koje su korisnici kreirali
users.forEach(el => {
    el.logBlogs();
})

// Da nisam imala metodu log Blogs

users.forEach(el => {
    let userBlogs = el.blogs; // niz blogova korisnika
    // iteriram nizom objekata gde je svaki objekat po jedan blog. Iz tog objekta blog mogu uzeti naslov
    userBlogs.forEach(b => {
        console.log(b.title);
    })
})

// zadatak 3 : Ispisati naslove onih blogova koji imaju vise od 50 lajkova

users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach(b => {
        if(b.likes > 50) {
            console.log(b.title);
        }
    })
})

// zadatak 2 : Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(el => {
    if (el.age < 18) {
        console.log(el.username);
    }
})

// zadatak 4 : Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach(el => {
    if (el.username === "JohnDoe") {
        console.log(el.blogs);
    }
})

// zadatak 5 : Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali.

users.forEach(el => {
    let ukupnoLajkova = 0;
    el.blogs.forEach(b => {
        ukupnoLajkova += b.likes;
    });
    if(ukupnoLajkova > 100) {
        console.log(el.username);
    }
});

// // zadatak 6 : Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
// let sumaLajkova = 0;
// let broj = 0 ;
// users.forEach(el => {
//     el.blogs.forEach(b => {
//         sumaLajkova += b.likes;
//         broj++;
//     });
// });
// let prosek = sumaLajkova / broj;
// users.forEach(el => {
//     el.blogs.forEach(b => {
//         if(b.likes > prosek) {
//             console.log(b.title);
//         }
//     });
// });

// zadatak 7 : Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
//nadprosecan broj pozitivnih
let sumaLajkova = 0;
let broj = 0 ;
users.forEach(el => {
    el.blogs.forEach(b => {
        sumaLajkova += b.likes;
        broj++;
    });
});
let prosek = sumaLajkova / broj;
//ispodprosecan broj negativnih
let sumaDislajkova = 0;
let broj1 = 0 ;
users.forEach(el => {
    el.blogs.forEach(b => {
        sumaDislajkova += b.dislikes;
        broj1++;
    });
});
let prosek2 = sumaDislajkova / broj1;
users.forEach(el => {
    el.blogs.forEach(el1 =>{
        if(el1.likes > prosek && el1.dislike < prosek2) {
            console.log(el1.title);
        }
    })
})

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};
let dan = [dan1, dan2, dan3];
// zadatak 2 : Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:Ispisati prvi od njih Ispisati poslednji od njih
let maxBrMerenja = dan[0].temperature.length;
let indeksPrvog = 0;
let indexPoslednjeg = 0;
dan.forEach((d, index) => {
    if(maxBrMerenja < d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPrvog = index;
    }

    if(maxBrMerenja <= d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indexPoslednjeg = index;
    }

    
});

// a : ispisati svaki takav datum=============================================

dan.forEach(d => {
    if(d.temperature.length === maxBrMerenja) {
        console.log(d.datum);
    }
})

// b : ispisati prvi takav datum
// nacin 1 ================================================================
console.log(dan[indeksPrvog].datum);
// nacin 2==================================================================
for(let i = 0 ; i < dan.length; i++) {
    if(maxBrMerenja == dan[i].temperature.length) {
        console.log(dan[i].datum);
        break;
    }
}
// c : ispisati poslednji takav datum
// nacin 1 ============================================================
console.log(dan[indexPoslednjeg].datum);
// nacin 2===========================================================
for(let i = dan.length - 1; i >=0; i--) {
    if(maxBrMerenja == dan[i].temperature.length) {
        console.log(dan[i].datum);
        break;
    }
}

// zadatak 3  Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let kisniSuncaniOblacni = niz => {
    let br1 = 0;
    let br2 = 0;
    let br3 = 0;

    niz.forEach(el => {
        if(el.kisa) {
            br1++;
        };
    });

    console.log(`bilo je ${br1} kisnih dana`);

    niz.forEach(el => {
        if(el.sunce) {
            br2++;
        };
    });

    console.log(`bilo je ${br2} suncanih dana`);

    niz.forEach(el => {
        if(el.oblacno) {
            br3++;
        };
    });
    
    console.log(`bilo je ${br3} oblacnih dana`);
};

kisniSuncaniOblacni(dan);

// zadata 4 : Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);
