class Employee{
    pan;name;tax_income;tax
    constructor()
    {
        this.pan=prompt('please enter PAN number');
        this.name=prompt('please enter name');
        this.tax_income=parseInt(prompt('please enter annual income'));
    }

    calc()
    {
       if(this.tax_income<=100000)
       {
        this.tax=0
       }
       else if(this.tax_income>100000 && this.tax_income<=150000)
       {
        this.tax=10/100*(this.tax_income-100000)
         }
       else if(this.tax_income>150000 && this.tax_income<250000)
       {
        this.tax=5000+20/100*(this.tax_income-150000)
         }
       else
       {
        this.tax=25000+30/100*(this.tax_income-250000)
         }
    }

    display()
    {
        document.write('the pan number is,',this.pan,'<br>');
        document.write('the name is,',this.name,'<br>');
        document.write('the annual income is,',this.tax_income,'<br>');
        document.write('the tx on annual income is,',this.tax,'<br>');
    }
}

let e1=new Employee()
e1.calc();
e1.display();
