function Calculator(num1,num2){
    this.num1 = num1
    this.num2 = num2
    this.getSum = function(){
        return this.num1+this.num2;
    }
    this.getSub = function(){
        return this.num1-this.num2;
    }
    this.getMul = function(){
        return this.num1*this.num2;
    }
    this.getDiv= function(){
        return this.num1/this.num2;
    }
}

Calculator.prototype.secrets = function(){
    return [this.num1,this.num2]
}

var cal = new Calculator(2,3);
console.log(cal.getMul())
console.log(cal.secrets())