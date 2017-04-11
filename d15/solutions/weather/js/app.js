$("button").on("click", function() {
  var city = $("input").val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=MYAPIKEY", function(data) {
    $("h4 .temperature").text(data["main"]["temp"]);
    $("img.icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0].icon + ".png");
  });
});
