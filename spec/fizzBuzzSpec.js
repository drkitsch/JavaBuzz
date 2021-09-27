describe('Fizzbuzz', function() {

  let fizzbuzz; 
  describe('knows when a number is', function() {
    it('divisible by three', function() {
      fizzbuzz = new Fizzbuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });
  });  
});




