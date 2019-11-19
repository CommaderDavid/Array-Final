// Back end
var beepBoop = function(numberInput) {
  var returnOrder = [];

  for (var i = 0; i <= numberInput; i++) {
    if (i % 3 === 0 && i != 0) {
      returnOrder.push(" 'I'm sorry, Dave. I'm afraid I can't do that.'")
    } else if (i.toString().includes("1")) {
      returnOrder.push(" 'Boop!'")
    } else if (i.toString().includes("0")) {
      returnOrder.push(" 'Beep!'")
    } else {
      returnOrder.push(" " + i)
    }
  }
  return returnOrder
}
// Front end
$(document).ready(function() {
  $("form#beep").submit(function(e) {
    e.preventDefault();

    $("#result").empty();

    var numberInput = parseInt($("input#number").val());
    var result = beepBoop(numberInput);

    for (var i = 0; i < result.length; i++) {
      if (i >= result.length - 1) {
        $("#result").append(result[i]);
      } else {
        $("#result").append(result[i] + ",");
      }
    }
    $("#hale").show();
  });
});
