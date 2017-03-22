$("a").on("click", function() {
  var redVal = $("input#red").val();
  var greenVal = $("input#green").val();
  var blueVal = $("input#blue").val();

  var rgbVal = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
  console.log(rgbVal);

  $("div#wrapper").css("background-color", rgbVal);
})