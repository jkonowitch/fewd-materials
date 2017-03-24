$("button").on("click", function() {
  var celsius = $("input").val();
  var fahrenheit = celsius * 9/5 + 32;
  $("#converted").text(fahrenheit);
});