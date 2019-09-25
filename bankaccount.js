class BankAccount{
    constructor(account_balance, account_name,account_number,active){
        this.account_balance = account_balance;
        this.account_name=account_name;
        this.account_number=account_number;
        this.transaction=[];
        this.active = active;
        
    }

    open(initial_deposit,user_name,){
        const AccountOpening = [this.active = true,
        this.account_balance = initial_deposit,
        this.account_name = user_name,
        this.account_number=Math.random(1233456789087,90876543212344).toString().split('.')[1]]
        return `Account is active for transactions ${AccountOpening}`
    }

    getBalance(){
        if(this.active){
            return `Your Account balance is ${this.account_balance}`;
        }else{
            return "Please first open the account";
        }
    }
    
    deposit(amount){
        if(this.active){
            let date = (new Date()).toString();
            let y = [this.account_balance = amount + this.account_balance, date,this.account_name, this.account_number];
            this.transaction.push(y);
            return `An mount of ${amount} has been added to your account, New Balance is ${this.account_balance}, thanks for banking with us, your transactions ${y}`;
        }else{
            return "Please first open the account";
        }
    }

    withdraw(amount){
        if(this.active){
            let date = (new Date()).toString();
           let x = [this.account_balance = this.account_balance - amount, this.account_name, this.account_number, date];
           this.transaction.push(x);
            return `You have withdrawn ${amount}, New Balance is ${this.account_balance}`;
        }else{
            return "Please first open the account";
        }
    }

    close(){
        if(this.active){
            this.active = false;
            return "Account has been closed";
        }else{
            return "Please first open the account";
        }
    }
}

let newuser = new BankAccount();
let opening = newuser.open(10000,'Aggy');
let balance1 = newuser.getBalance();
let depositing = newuser.deposit(20000);
let balance2 = newuser.getBalance();
let withdrawing = newuser.withdraw(15000);
let balance3 = newuser.getBalance();
let closing = newuser.close();

 
console.log(opening)
console.log(balance1)
console.log(depositing)
console.log(balance2)
console.log(withdrawing)
console.log(balance3)
console.log(closing)