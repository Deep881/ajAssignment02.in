class Salary{
     
    MembersData()
    {
        this.name=prompt('enter your name')
        this.adress=prompt('Enter your adress')
        this.phone=prompt('Enter your phone')
        this.subject=prompt('Enter your subject')
        this.specialization=prompt('Enter your specialization')
        this.monthlySalary=parseInt(prompt('Enter your monthly salary'))
    }

    display()
    {
        document.write(this.name)+'<br>'+
        document.write(this.adress)+'<br>'+
        document.write(this.phone)+'<br>'+
        document.write(this.subject)+'<br>'+
        document.write(this.specialization)+'<br>'+
        document.write(this.monthlySalary)+'<br>'
    }
        
    calculate()
    {
        this.annualsallery=12*this.monthlySalary

        if(this.annualsallery<175000)
        {
            document.write('your annual salary is =','',this.annualsallery,'','your are not tax payers')
        }
        else{
                this.incomeTax = (5/100)*this.annualsallery
                document.write('your annual salary is = ','',this.annualsallery,'','your are tax payer and you have to pay tax ammount of ','', this.incomeTax)
        }
    }
}

let s1=new Salary();
s1.MembersData()
s1.display()
s1.calculate()
