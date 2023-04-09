class Library{

    constructor()
    {
        this.acc_no=prompt("enter accesion number of book's");
        this.title=prompt('enter Book title');
        this.author=prompt("enter author's name");
        
    }
    calculate()
    {
        this.days=parseInt(prompt("enter the no. of days book is submitted late"));

        this.charges=this.days*2
       
    }

    display()
    {
        document.getElementById('1t-data').innerHTML=this.acc_no,'<br/>';
        document.getElementById('2t-data').innerHTML=this.title,'<br/>';
        document.getElementById('3t-data').innerHTML=this.author,'<br/>';
        document.getElementById('4t-data').innerHTML=this.charges,'<br/>';
    }

}

let e1=new Library()
e1.calculate();
e1.display()