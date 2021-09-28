

describe('Fizzbuzz', function() {

  let fizzbuzz; 

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by three', function() {
      
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });  

  describe('knows when a number is NOT', function() { 
    it('divisible by three', function() {
      
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('when playing says', function() {
  
    it('"Fizz" when a number is divisible by three', function() {
      expect(fizzbuzz.says(3)).toEqual('Fizz');  
    }); 

    it('"Buzz" when a number is divisible by five', function() {
      expect(fizzbuzz.says(5)).toEqual('Buzz');
    });
  });
  
});







