/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   

// describe your code
describe("consoleLogTest", function(){
		beforeEach(function(){
			spyOn(window.console, 'log');
		});

       // what it should do
       it("should Return array in console",function(){
               //expect something
               consoleLogTest();
               expect(window.console.log).toHaveBeenCalled()
               
       });

});


/*
Note how describe - it() argument reads like a sentence.
*/

