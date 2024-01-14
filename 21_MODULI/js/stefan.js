let x = 5; // pomocna promenjiva 

//......

let rezultat = x + 5; // promenjiva koja pamti rezultat (GLVANA PROMENJIVA)

let racunaj = () => { // funkcija kojia se trazi od mene
    console.log(rezultat + 10)
}

export { rezultat, racunaj };