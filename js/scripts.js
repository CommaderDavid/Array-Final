// Back end
var beepBoop = function(numberInput) {
  var returnOrder = [];

  for (var i = 0; i <= numberInput; i++) {
    if (i == 0) {
      returnOrder.push(i)
    }
  }
  return returnOrder
}
// Front end
$(document).ready(function() {
  $("form#beep").submit(function(e) {
    e.preventDefault();

    var numberInput = parseInt($("input#number").val());
    var result = beepBoop(numberInput);

    $("#result").empty().append(result + ", ");
  });
});
