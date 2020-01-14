
function problem5(){
  var i = 1;
  while(true){
    var n = 1;
    while(n <= 20){
      if(i % n === 0){n++}
      else {
        break;
        }
      }
    if(n == 21){break}
    else {i++}
  }
  alert("The smallest number evenly divisible by all numbers between 1-20 is "
  + i)
}
var p5btn = document.getElementById('problem5btn');
p5btn.onclick = problem5;
