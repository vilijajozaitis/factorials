var factorialize = function(num) {
  if (num === 0 || num === 1)
    return 1;
    // console.log(1);
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
  // console.log(num);
}

$(document).ready(function() {
  $("form#factorialize").submit(function(event) {
    event.preventDefault();
    // var input = $("#i").val();
    var result = factorialize(5);
    console.log(result);
    });
  });
