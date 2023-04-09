class Bank
{

    
    constructor()
    {
        this.name=prompt('enter your name');
        this.acon=prompt('enter your Account number');
        this.type=prompt('enter account type');
        this.bal= parseInt(prompt('Balance in the account'));
    } 

    depo(deamt)
    {
        this.balance1=this.bal+deamt
        this.balance1=this.bal
    }

    withdrwa(wiamt)
    {
        if(this.bal<1000)
        {
            alert('Balance is low')
        }
        else {

            this.balance2=this.balance1-wiamt
            this.balance2=this.bal
        }
        

    }

    print()
    {
        document.write('name:'+this.name+'<br/>')
        document.write('account number:'+this.acon+'<br/>')
        document.write('type:'+this.type+'<br/>')
        document.write('Ammount after deposite:'+this.balance1+'<br/>')
        document.write('Ammount after withdrwa'+this.balance2+'<br/>')
        document.write('Ammount to be deposite:'+deamt+'<br/>')
        document.write('Ammount to be withdrwa:'+wiamt+'<br/>')
    }
}

let c1=new Bank()

c1.depo(parseInt(prompt('enter amount to be deposite')));
c1.withdrwa(parseInt(prompt('enter amount to be withdrwa')));
c1.print();
