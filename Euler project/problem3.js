function problem3(){
  alert("problem3 started");
  /*
    first part of this problem is to find a prime number
    prime numbers cant be evenly divided by any number except by 1
    and themselves
    */
    //this is found by going through every number until a prime is found
    var numm2BT = 100
      while(true){
        var i = 2;
        if (numm2BT % i === 0){
          if(numm2BT === i){if (600851475143 % numm2BT== 0){alert(numm2BT)}}

        }

      }
}
var p3btn = document.getElementById('problem3btn');
p3btn.onclick = problem3;
