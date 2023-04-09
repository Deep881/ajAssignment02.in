class Employee{
    constructor(b_pay)
    {
        this.basic_pay = b_pay
    }
  calculations(){
   let dearnessAllowance,HouseRentAllowance,providentFund,netPay,grossPay

   dearnessAllowance=(25/100)*this.basic_pay;
   HouseRentAllowance=(15/100)*this.basic_pay;
   providentFund=(8.33/100)*this.basic_pay;
   netPay=this.basic_pay+dearnessAllowance+HouseRentAllowance;
   grossPay=netPay-providentFund;

  
  }
}

let Employee1=new Employee(40000);
Employee1.calculations()