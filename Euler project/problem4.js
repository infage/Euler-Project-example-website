function problem4(){
  alert("problem 4 started");

  /* Largest palindrome product
    highest number that can be made from 3 digit numbers
    is 9998001 */

  var a = 999;
  var b = 1000;
  var i = a*b;
  var problem4Solved = false;
  var highestPalindrome = 0;
  while(b>1 && a>1){
    //if a is less than one take one away from b and start over.
      a = 999;
      b--;
      while(a>1){
        a--;
        i = a*b;
        console.log("sum is "+ a + " " + b +" = " +i);
        //test if i is palindrome
        if (testIfPalindrome(i) == true){
          if(i > highestPalindrome){ highestPalindrome = i;}
        };

      }
    }

  return highestPalindrome;
}

function testIfPalindrome(n){
  //to test if a test if a testIfPalindrome
  var isPalindrome = false;
  //turn n into a string data type
  var testedNumber = n;
  testedNumber = testedNumber.toString();

  // split each individual digit into its own variable in an array
  var palinArray = testedNumber.split("");

  // reverse the array and create a new word from it.
  var rPalinArray = palinArray.reverse();
  var rTestedNumber = rPalinArray.join("")
  // if (reversed array == normal array){testIfPalindrome = true}
  if (testedNumber === rTestedNumber){isPalindrome = true;
  };
  return isPalindrome;
}
var p4btn = document.getElementById('problem4btn');
p4btn.onclick = problem4;
