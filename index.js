var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "#232323";
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.background = "#232323";
});

//RESET BUTTON
resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a  new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match the pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

//DISPLAY THE PICKED COLOR ON SCREEN
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to sqaures
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    //compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
      //change colors of all squares for correct answer
      for (var j = 0; j < squares.length; j++) {
        squares[j].style.background = clickedColor;
      }
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

//TO PICK A RANDOM COLOR
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//TO FILL THE COLORS ARRAY WITH RANDOM COLORS
function generateRandomColors(num) {
  //make an array
  var arr = [];

  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
}

//TO GENERATE RANDOM COLORS
function randomColor() {
  //pick a red from 0 to 255
  var R = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var G = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var B = Math.floor(Math.random() * 256);
  ("rgb(R, G, B)");
  return "rgb(" + R + ", " + G + ", " + B + ")";
}
