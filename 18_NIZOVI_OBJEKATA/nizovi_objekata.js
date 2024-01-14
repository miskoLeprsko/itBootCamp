console.log("Nizovi objekata");

let blog1 = {
    title: "IF naredba grananja",
    likes: 50,
    dislike: 21
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
// Ispis niza objekata
console.log(arrBlogs);

//Ispis jednog elementa iz niza
console.log(arrBlogs[1]);

// Ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

// Ispis naslova svih elemenata iz niza = koriscenjem for petlje

for(let i = 0 ; i < arrBlogs.length ; i++) {
    console.log(arrBlogs[i].title);
}

arrBlogs[1].title = "While ciklus";
// Ispis naslova svi elemenata iz niza koriscenjemm forEach petlje

arrBlogs.forEach( obj => {
    console.log(obj.title);
})