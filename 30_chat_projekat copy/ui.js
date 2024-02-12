export class ChatUI {

    constructor(l) {
        this.list = l;
    }

    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    // metode
    formatDate(date){        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        let isToday = false;
        let datumDanas = new Date();
        let dDanas = datumDanas.getDate();
        let mDanas = datumDanas.getMonth() + 1;
        let yDanas = datumDanas.getFullYear();
        if (d == dDanas && m == mDanas && y == yDanas) {
            isToday = true;
        }


        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = h + ":" + min;
        if(!isToday){
            strDate = d + "." + m + "." + y + ". - " +strDate;
        }
        

        return strDate;
    }

    templateLI(data, curentUserUser) {
        // Izvući podatke iz prosleđenog dokuemnta (data je dokument) i zapisati ih u formatu
        // useranme: poruka
        // time_stamp
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);


        let klasa = 'msgLeft';

        if (data.username == curentUserUser) {
            klasa = 'msgRight';
        }
        
        let htmlLI = 
        `<li class="${klasa}">
            <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
        </li>`;
        this.list.innerHTML += htmlLI;
    }

    delete() {
        this.list.innerHTML = "";
    }
}