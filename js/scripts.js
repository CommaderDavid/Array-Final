// Back end
var beepBoop = function(numberInput) {
  var order = numberInput.split("");
  var returnOrder = [];

  
}
// Front end
$(document).ready(function() {
  $("form#beep").submit(function(e) {
    e.preventDefault();

    var numberInput = $("input#number").val();
    var result = beepBoop(numberInput);

    $("#result").empty().append(result);
  });
});
