class Empl{

    constructor()
    {
        this.emp_no=prompt('enter your employee number');
        this.name=prompt('enter your name');
        this.basic=parseInt(prompt('enter your basic pay'));
    }
    calculate()
    {
        if(this.basic>=20000)
        {
            this.da=this.basic*53/100;
            this.ta=this.basic*12/100;
            this.hra=this.basic*10/100;
            this.pf=this.basic*8/100;

            this.gross=this.basic+this.da+this.hra+this.ta;
        }
        else if(this.basic>=10000 &&this.basic<20000)
        {
            this.da=this.basic*45/100;
            this.ta=this.basic*10/100;
            this.hra=this.basic*12/100;
            this.pf=this.basic*7.5/10
            
            this.gross=this.basic+this.da+this.hra+this.ta;
        }
        else
        {
            this.da=this.basic*40/100;
            this.ta=this.basic*8/100;
            this.hra=this.basic*14/100;
            this.pf=this.basic*7/100;

            this.gross=this.basic+this.da+this.hra+this.ta;
        }
    }

    display()
    {
        document.getElementById('1t-data').innerHTML=this.name,'<br/>'
        document.getElementById('2t-data').innerHTML=this.emp_no,'<br/>'
        document.getElementById('3t-data').innerHTML=this.gross,'<br/>'
        document.getElementById('4t-data').innerHTML=this.pf,'<br/>'
    }

}

let e1=new Empl()
e1.calculate();
e1.display()