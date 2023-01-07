//Selects grid container in html

const gridContainer = document.querySelector(".grid-container");

//Selects button to change the grid size

const changeGridButton = document.querySelector(".change-grid");
console.log(changeGridButton);

//Variable for number of divs across div container

let squareNum = 16;

//============================================================

//Builds grid based on whatever squareNum is

const buildGrid = function (squareAmount) {


  let gridWidth = gridContainer.offsetWidth - 6 - (squareAmount + 3);
  console.log(gridWidth / squareNum);

  for (let i = 0; i < squareAmount * squareAmount; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${gridWidth / squareAmount}px`;
    div.style.height = `${gridWidth / squareAmount}px`;
    gridContainer.appendChild(div);

  }
}

//Initial building of grid when page loads

buildGrid(squareNum);

//================================================================

//Event listener to resize grid based on if screen is resized

window.addEventListener("resize", function () {
  gridContainer.replaceChildren();
  buildGrid(squareNum);
})

//================================================================

//Event listener to resize grid based on user input after Change Grid Size button is pushed

changeGridButton.addEventListener("click", function () {
  let userSquares = prompt("How many squares wide would you like your grid? (max 99)");

  while (userSquares > 99) {
    userSquares = prompt("Please enter a number less than 99. You can do that, right?");
  }

  gridContainer.replaceChildren();
  buildGrid(userSquares);

})
