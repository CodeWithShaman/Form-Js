var stdsData = [];

function add() {
  var input1 = document.getElementById("input-1").value;

  var input2 = document.getElementById("input-2").value;

  var input3 = document.getElementById("input-3").value;

  var input4 = document.getElementById("input-4").vlaue;

  var input5 = document.getElementById("input-5").value;

  stdsData.push(input1, input2, input3, input4, input5);
  console.log(stdsData);
  document.getElementById("result").innerHTML = stdsData;
}
function removeAll() {
  stdsData = [];
  console.log(stdsData);
  document.getElementById("result").innerHTML = stdsData;
}