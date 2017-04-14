## Bonus

Every time you search for a movie, add that movie title as a <li> under the `ul.searches` element.

HINT:

```javascript
// to create an element
var liThatIMade = $("<li>Peanut Butter</li>");

// to add it to the page
$("ul").append(liThatIMade);
```

## Bonus 2

When you click on a past movie search it shows up as if the user had typed it!

HINT

You cannot use $("li").on("click") because the `li`s are not on the page yet. You have to listen to its parent:

```javascript
$("ul").on("click", function(event) {
  // $(event.target) is the li that was clicked
  // Whereas $(this) is the ul
});
```