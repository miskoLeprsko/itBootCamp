let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

db.collection("tasks")
.add({
    title: "Cas ITBootcamp",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Cas iz baze podataka"
})
.then(() => {
    console.log("Uspesno dodat task");
})
.catch((e) => {
    console.log(`Greska ${e}`);
})
// sve ove metoe vracaju promise

let movie1 = {
    name: "Batman: The Dark Knight Rises",
    director: {
        name: "Christopher",
        surname: "Nolan"
    },
    releaseYear: 2012,
    genres: ["Superheroe","Action"],
    rating: 9.5,

}

let movie2 = {
    name: "Pulp Fiction",
    director: {
        name: "Quentin",
        surname: "Tarantino"
    },
    releaseYear: 1994,
    genres: ["Tarantino","Action"],
    rating: 7.5,

}

let movie3 = {
    name: "Lock stock and two smoking barrels",
    director: {
        name: "Guy",
        surname: "Ritchie"
    },
    releaseYear: 1996,
    genres: ["Comedy","Action"],
    rating: 8.5,

}

// prvi film

db.collection("movies").doc("movie1")
.set(movie1)
.then(()=> {
    console.log("uspesno dodata");
})
.catch((e)=> {
    console.log(`greska ${e}`);
});

// drugi film

db.collection("movies").doc("movie2")
.set(movie2)
.then(()=> {
    console.log("uspesno dodata");
})
.catch((e)=> {
    console.log(`greska ${e}`);
});

// treci film

db.collection("movies").doc("movie3")
.set(movie3)
.then(()=> {
    console.log("uspesno dodata");
})
.catch((e)=> {
    console.log(`greska ${e}`);
});

// promena podataka prvog filma 

db.collection("movies").doc("movie1")
.update({
    genres: ["Supernatural"]
})
.then(()=> {
    console.log("uspesno promenjeno");
})
.catch((e)=> {
    console.log(`greska ${e}`);
});

// class Movie {
//     constructor(n, d, y, g, r) {
//       this.name = n;
//       this.director = d;
//       this.releaseYear = y;
//       this.genres = g;
//       this.rating = r;
//     }
//   }
//   let movie1 = new Movie(
//     "Film1",
//     { name: "Ime1", surname: "Prezime1" },
//     2023,
//     ["Action", "Comedy"],
//     5.5
//   );
//   let movie2 = new Movie(
//     "Film2",
//     { name: "Ime2", surname: "Prezime2" },
//     2014,
//     ["Horror"],
//     7.0
//   );
//   let movies = [movie1, movie2];
//   function addMovie(arr) {
//     for (let i = 0; i < movies.length; i++) {
//       db.collection("movies")
//         .doc(`movie${i + 1}`)
//         .set(Object.assign({}, movies[i]))
//         .then(() => {
//           console.log("Movie added successfully");
//         })
//         .catch((e) => {
//           console.log(`Error: ${e}`);
//         });
//     }
//   }
//   addMovie(movies);
//   db.collection("movies")
//     .doc("movie1")
//     .update({
//       rating: 5.8,
//     })
//     .then(() => {
//       console.log("Rading updated successfully");
//     })
//     .catch((e) => {
//       console.log(`Error: ${e}`);
//     });



// Dohvatanje okumenta

db.collection("movies").doc('movie1')
.get()
.then(doc=> {
    if(doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    } else {
        console.log("Ne postoji ovaj dokument");
    }
})
.catch(e => {
    console.log(`Greska ${e}`);
});

// Dohvatanje svih dokumenata iz kolekcije

db.collection("customers")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, " => ", data);
    })
})
.catch(e => {
    console.log(`Greska ${e}`);
});
