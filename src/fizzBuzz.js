class Fizzbuzz {
  
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
  isDivisibleByThree(number) { 
  return this._isDivisibleBy(number, 3); 
  }
  isDivisibleByFifteen(number) { 
    return this._isDivisibleBy(number, 15);
  }
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }
  says(number) {
    if(this.isDivisibleByThree(number)) {
      return "Fizz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
   if (this.isDivisibleByFifteen(number)) {
    return "Fizzbuzz";
   }
   return number;
  }
}
