function mplesOf3And5(){
  var i = 0;
  var sum = 0;
  while (i < 1000){
    if (i % 3 === 0 || i % 5 === 0){
      var sum = sum + i;
    }
    i++
  };
alert("The sum of all multiples of 3 & 5 below 1000 is "+sum);
}
var p1Btn = document.getElementById('problem1btn');
p1Btn.onclick = mplesOf3And5;
