class ChatUI {
    constructor(lista) {
        this.listaPoruka = lista
    }
    set listaPoruka(lista) {
        this._listaPoruka = lista;
    }
    get listaPoruka() {
        return this._listaPoruka
    }

    delete() {
        this.listaPoruka.innerHTML = "";
    }

    templateLI(obj) {
        let li = document.createElement('li');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        div1.textContent = `${obj.username}: ${obj.message}`;
        div2.textContent = this.formatDate(obj.created_at.toDate());
        li.append(div1, div2);
        return li;
        // unList.appendChild(li);
    }
    
    formatDate(vreme) {
        return `${vreme.getDay()}.${vreme.getMonth()+1}.${vreme.getFullYear()}. - ${vreme.getHours()}:${vreme.getMinutes()}`;
    }


}

export default ChatUI;