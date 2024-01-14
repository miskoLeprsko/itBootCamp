let blog1 = {
    title: "HTML",
    content: "Osnovni HTML tagovi",
    author: "Jelena",
    likes: 10,
    comment: true
};

// Ispis objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1['content']);

// Izmena odredjene osobine
blog1.content = 'HTML tabele';
console.log(blog1.content);
blog1['content'] = 'HTML liste';
console.log(blog1.content);
blog1.likes = 7;
blog1.comment = false;
console.log(blog1);

let user1 = {
    username: "MilosStanojevic",
    age: 29,
    blogs: ["Naredba grananja", "Nizovi", "Objekti"],
    login: function() {
        console.log("Ulogovani ste");
        console.log(this);
    },
    logout: function() {
        console.log("Izlogovani ste");
    },
    logBlogs: function() {
        this.blogs.forEach( element => {
            console.log(element);
        });
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);

user1.blogs.forEach(el => {
    document.write(`<p>${el}</p>`)
})

//////////////////////////////////////////////////////////////////////////////////////////////
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    // 1.
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2.
    brNadprosecna: function() {
        let br = 0;
        let pros = this.prosecna();
        // this.temperature.forEach(t => {
        //     if(t > pros) {
        //         br++;
        //     }
        // });
        for(let i=0; i<this.temperature.length; i++) {
            if(this.temperature[i] > pros) {
                br++;
            }
        }
        return br;
    },
    // 3.
    brMaxTemp: function() {
        let br = 0;
        let maxTemp = this.temperature[0];
          this.temperature.forEach(t => {
            if(t > maxTemp) {
              maxTemp = t;
            }
          });
          this.temperature.forEach(t => {
            if(t == maxTemp) {
              br++;
            }
          });
          return br;
      },
    //4 .
    dvaParametraTemp: function(t1,t2) {
        counter = 0;
        for(let i = 0 ; i < this.temperature.length; i++) {
            if (t1 < this.temperature[i] && t2 > this.temperature[i]) {
                counter++;
            }
        }
        return counter;
    },
    // 5.
    iznadProsekaUVeciniDana: function() {
        let brDana = this.brNadprosecna();
        if(brDana > this.temperature.length / 2) {
            return true;
        } else {
            return false;
        }

    },
    // 6.
    leden: function() {
        // let ledenDan = true;
        // this.temperature.forEach(t => {
        //     if(t > 0) {
        //         ledenDan = false;
        //     }
        // })
        // return ledenDan;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > 0) {
                return false;
            }
        }
        return true;
    },
    //8
    nepovoljan: function() {
        for(let i = 0 ; i<this.temperature.length - 1; i++) {
            if(Math.abs(this.temperature[i]-this.temperature[i + 1]) > 8) {
                return true;

            }
        }
        return false;
    }    
};
console.log(`Prosecna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je: ${dan1.brNadprosecna()}`);
console.log(`Max temperatura: ${dan1.brMaxTemp()}`);
console.log(`Broj merenja izmedju dve vrednosti: ${dan1.dvaParametraTemp(3,5)}`);
console.log(`Da li ima vise natprosecnih temperatura ${dan1.iznadProsekaUVeciniDana()}`);
console.log(`Da li je dan bio leden ${dan1.leden()}`);
console.log(`Da li je dan nepovoljan? ${dan1.nepovoljan()}`);


