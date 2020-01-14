function problem2(){
    //alert("problem2started");
  //Create 2 fibonacci numbers
    var a = 1;
    var b = 2;
    var c = 0;
    var sum2 = 2;

    while(c < 4000000){
      //create new fibonacci number by adding together last 2
      var c = a + b;
    //  alert(c);
      //test if new fibonacci number is divisible by two
      if(c % 2 === 0){sum2 = sum2 +c}
      //shift new numbers around
      var a = b;
      var b = c;
      }
    alert("The sum of all even numbers in the fibonacci sequence below " +
    "four million is " + sum2);
}
var p2Btn = document.getElementById('problem2btn')
p2Btn.onclick = problem2;
