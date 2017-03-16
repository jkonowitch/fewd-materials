# Travelling Dwarf

## Objective

Write code to move the dwarf through the maze.

## Instructions

Open `index.html` and look at the grid. You will see a dwarf and a maze. Your task is to write code to move the dwarf through the maze to the end.

If you open the console, there is a variable, `d`, which you can call the following methods on to manipulate the dwarf.

```javascript
d.orient('left'); // also 'right', 'up', and 'down'
d.move();
```

You will also find a file called `solution.js`. Any code you write in here will be run against the grid in `index.html`. This is where you should write your solution!

## Bonus

Only move on to this step if you finish the program described above.

In `bonus-solution.js` write a new program that moves the dwarf through the maze *without* foreknowledge of the maze design. In other words, the dwarf will have to detect impediments and decide which way to turn.

HINTS:
  - `g.at(x, y)` will tell you if there is an obstacle at the coordinate you specify...
  - `d.orientation` will tell you your current orientation (ie, 'left', 'right', 'down', 'up')


