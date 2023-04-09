class BikeOnRent
{
    constructor()
    {
        this.bno=prompt('enter bikes number');
        this.phon=prompt('enter your phone number');
        this.name=prompt('enter your name');
        this.days=parseInt(prompt('enter no. of days the bike is on rent'));
    }
    compute()
    {
         if (this.days<=5)
         {
            this.charges=this.days*500
         }
         else if (this.days>5 && this.days<=10)
         {
            this.charges=5*500+(this.days-5)*400
         }
         else{
            this.charges=5*500+(this.days-5)*400+(10-this.days)*200
         }
    }
    output()
    {
        document.write('name =',this.name,'<br/>');
        document.write('bike number =',this.bno,'<br/>');   
        document.write('phone number =',this.phon,'<br/>');
        document.write('number of days =',this.days,'<br/>');
        document.write('charges will be =',this.charges,'<br/>');    
        
        
    }
}

let b1=new BikeOnRent()
b1.compute();
b1.output();