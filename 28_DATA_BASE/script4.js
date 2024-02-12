// Dohvatanje odkumenata iz kolekcije po redosledu polja
// (dokument mora da sadrzi to polje da bi bio dohvacen)
// (ako ima vise od jendog polja neophodno je kreirati index)


// db.collection("Users")
// .orderBy('name', 'desc')
// .orderBy('age', 'asc')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// Dohvatanje odredjenoig broja dokumenata (limitiranje)

// db.collection("Users")
// // .orderBy('name', 'desc')
// // .orderBy('age', 'asc')
// .limit(2)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })


// Dohvatanje dokumenata koji zadovoljavaju odredjene uslove (filtriranje)

// // Imaju platu veću ili jednaku od 500

// db.collection("customers")
// .where('salary', '>=', 500)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Imaju platu između 300 i 800,

// db.collection("customers")
// .where('salary', '>=', 300)
// .where('salary', '<=', 800)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Imaju platu manju od 900, i imaju 30 godina,

// db.collection("customers")
// .where('salary', '<=', 900)
// .where('age', '==', 30)
// .orderBy("salary")
// .orderBy("name")
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // dohvati sve klijente koji imau preko 25 godina sortirane po imenima

// db.collection("customers")
// .where('age', '>', 25)
// .orderBy("age")
// .orderBy('name')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Imaju adresu u Nišu,

// db.collection("customers")
// .where('addresses', 'array-contains', "Nis")

// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Imaju adresu u Nišu ili Beogradu,

// db.collection("customers")
// .where('addresses', 'array-contains-any', ['Nis', 'Valjevo'])
// // .where('addresses', 'array-contains', "Beograd") da se je trazilo i nis i beograd

// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Imaju 22, 25 ili 28 godina.

// db.collection("customers")
// .where('age', 'in', [22,25,28])


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

// db.collection("tasks")
// .orderBy('Title')

// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Iz kolekcije tasks, pročitati sve zadatke, i koji:Su prioritetni,

// db.collection("tasks")
// .where('Priority','==','true')
// // .orderBy("Priority")

// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
//})


// // Iz kolekcije tasks, pročitati sve zadatke, i koji:Treba da se izvrše u tekućoj godini,

// let datum = new Date();
// let godina = datum.getFullYear();
// let datum1 = new Date(godina, 0, 1); // meseci idu od 0 do 11 1.januar tekuce godine
// let datum2 = new Date(godina + 1 , 0, 1); // 1. jauar sledece godine

// let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
// let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

// db.collection("tasks")
// .where("due_date", ">=", ts1)
// .where("due_date", "<", ts2)

// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// // Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu. Su završeni,

// let datum = new Date();
// // let godina = datum.getFullYear();
// // let datum1 = new Date(godina, 0, 1); // meseci idu od 0 do 11 1.januar tekuce godine
// // let datum2 = new Date(godina + 1 , 0, 1); // 1. jauar sledece godine

// // let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
// // let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

// db.collection("tasks")
// .where("due_date", "<=", datum)


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })
// // Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu. tek treba da pocnu,

// let datum = new Date();
// // let godina = datum.getFullYear();
// // let datum1 = new Date(godina, 0, 1); // meseci idu od 0 do 11 1.januar tekuce godine
// // let datum2 = new Date(godina + 1 , 0, 1); // 1. jauar sledece godine

// // let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
// // let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

// db.collection("tasks")
// .where("due_date", ">=", datum)


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

//=============================================================================================================

// // Ocena izmedju 5 i 10

// db.collection("movies2")
// .where('rating', '<', 10)
// .where('rating', '>', 5)


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// //kojima je zanr komedija, tragedija, drama

// db.collection("movies2")
// .where('genres', 'array-contains-any', ['Horror', 'Action'])


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// //koji su izlazi u 21. veku

// let ts1 = 2000;
// let ts2 = 2099;

// db.collection("movies2")
// .where('releaseYear', '>=', ts1)
// .where('releaseYear', '<=', ts2)


// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// })

// koje je rezirao george lucas

db.collection("movies2")

.where('director.name', '==', "George")
.where('director.surname', '==', "Lucas")

.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
})