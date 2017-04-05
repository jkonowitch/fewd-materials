$("a").on("click", function() {
  $(".dimmer").addClass("active");
});

$(".dimmer").on("click", function() {
  $(".dimmer").removeClass("active");
}).children().on("click", function() {
  return false;
})