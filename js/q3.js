class Student{
    constructor()
    {
        this.name =prompt(" Enter Student Name");
        this.age = prompt("Enter Student Age");
        this.m1 = prompt("Enter marks obtained in m1");
        this.m2 = prompt("Enter marks obtained in m2");
        this.m3= prompt("Enter marks obtained in m3");
    }
    compute()
    {
        this.average =(this.m1+this.m2+this.m3)/3;
      
        this.maximum=Math.max(this.m1,this.m2,this.m3);
    }
    
    display()
    {
        document.write(this.name,'<br/>');
        document.write(this.age,'<br');
        document.write(this.m1,'<br');
        document.write(this.m2,'<br');
        document.write(this.m3,'<br');
        document.write(this.average,'<br');
        document.write(this.maximum,'<br');
    }
}

let s1=new Student()
s1.compute();
s1.display();