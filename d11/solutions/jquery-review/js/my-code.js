console.log("I'M WORKING!");

$("div").css("background-color", "green");
$("div").html("<p>woot.</p>")

$("div#one").on("click", function() {
  $("div#one").toggleClass("bigger");
})

$("div#two").on("click", function() {
  $("div#two").css("height", "500px");
  $("div#two").css("width", "500px");
});