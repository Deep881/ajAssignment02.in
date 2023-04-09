class student
{
    constructor()
    {
        this.name = prompt('Please enter your name');
        this.hindi=parseInt(prompt('Please enter marks obtained in hindi ')); 
        this.english = parseInt(prompt('Please enter marks obtained in english'));
        this.maths=parseInt(prompt('Please enter marks obtained in maths'));
        this.computer = parseInt(prompt('Please enter marks obtained in computer'));  
    }
    compute()
    {
        this.average = (this.hindi+this.english+this.maths+this.computer)/4

        if (this.average>=90)
        {
            this.grades='congratulations you passed with grade A++.'
        }
        else if (this.average >=75 && this.average<90)
        {
            this.grades='congratulations you passed with grade A.'
        }
        else (this.average >=75 && this.average<90)
        {
            this.grades='you recived with grade B.'
        }
    }

    display(){
        document.write('name: '+this.name +'<br/>');
        document.write('hindi: '+this.hindi +'<br/>');
        document.write('english: '+this.english +'<br/>');
        document.write('maths: '+this.maths+'<br/>');
        document.write('computer: '+this.computer+'<br/>');
        document.write('average: '+this.average+'<br/>');
        document.write('grades: '+this.grades+'<br/>');
    }
}

let s1=new student();
s1.compute();
s1.display();