## JavaScript

### Variables

```javascript
var name = "Jeff";
console.log(name);
```

### Operators

```javascript
"Jeff " + "Konowitch";

5 - 2;
```

### Conditionals

```javascript
var age = 18;

if (age >= 21) {
  console.log("It is legal for you to drink!");
} else {
  console.log("Hold on a minute!");
}

// Other examples of comparators, <, <=, ===
```

### Loops

```javascript
console.log("Let's count down to shuttle launch!")

var countdown = 10;

while (countdown >= 0) {
  console.log(countdown)
  countdown = countdown - 1;
}
```

## jQuery

### Change Elements

```javascript
$("h1").text("Holy Moley");
$("h1").addClass("bigger");
```

### Read Elements

```javascript
$("input").val();
$("p").text();
```

### User Events

```javascript
$("button").on("click", function() {
  console.log("YOU CLICKED!");
});
```