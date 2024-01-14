import generateImage from "./general.js";

let generateList = (parent) => {
    let lista = document.createElement("ul");;
    lista.style.listStyle = "none"
    parent.append(lista);
    return lista
}

let generateItem = (parent, src) => {
    let li = document.createElement("li");
    let img = generateImage(src);
    parent.append(li);
    li.append(img);
}

export { generateList, generateItem }