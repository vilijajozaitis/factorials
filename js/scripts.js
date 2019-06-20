var factorialize = function(num) {
  if (num === 0 || num === 1)
    return 1;
  else if (num >= 6)
    return ("Enter a number less than 6")

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;

}

$(document).ready(function() {
  $("form#factorialize").submit(function(event) {
    event.preventDefault();
    var entry = parseInt($("input#digit").val());
    var result = factorialize(entry)
  
      $(".entry").text(result);
      $(".originalNumber").text(entry);


    $("#result").show("#result");
  });
});
