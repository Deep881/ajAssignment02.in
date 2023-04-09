class Bill {
    constructor() {
        this.name = prompt('Enter your name')
        this.conNo =prompt( 'Enter consumer number')
        this.unit = parseInt(prompt('Enter unit consumed'))
    }

    compute() {
        if (this.unit <= 100) {
            this.amt = this.unit * 1.20
        }
        else if (this.unit > 100 && this.unit <= 200) {
            this.amt = 100 * 1.20 + (this.unit - 100) * 2.20
        }
        else if (this.unit > 200 && this.unit <= 300)
         {
            this.amt = 100 * 1.20 + 100 * 2.20 + (this.unit - 200) * 3.20
        }
        else {
            this.amt = 100 * 1.20 + 100 * 2.20 + 100 * 3.20 + (this.unit - 300) * 4
        }
    }

    display()
     {
        // document.write('Consumer name :' + this.name + '<br/>');
        // document.write('Consumer number :' + this.conNo + '<br/>');
        // document.write('Unit consumed :' + this.unit + '<br/>');
        // document.write('Bill amount :' + this.amt + '<br/>');

        document.getElementById('1t-data').innerHTML=this.name,'<br/>'
        document.getElementById('2t-data').innerHTML=this.conNo,'<br/>'
        document.getElementById('3t-data').innerHTML=this.unit,'<br/>'
        document.getElementById('4t-data').innerHTML=this.amt,'<br/>'
    }
}

let b1 = new Bill()
b1.compute()
b1.display()