console.log("HELOOOO!");

// var originalText = $("p.cool").text();
// var additionalText = " And I added some stuff.";
// $("p.cool").text(originalText + additionalText);

var clickCount = 0;
var originalText = $("p.cool").text();

$("button").on("click", function() {
  clickCount = clickCount + 1;
  console.log(clickCount);
  if (clickCount === 2) {
    $("p.cool").text("Woot the button was clicked for the second time!");
  } else {
    // put it back the way it was
    $("p.cool").text(originalText);
  }
});