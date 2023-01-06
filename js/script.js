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
  let totalSquares = 1;

  const gridWidth = gridContainer.offsetWidth - 6 - (squareAmount + 3);
  console.log(gridWidth / squareNum);

  while (totalSquares <= squareAmount * squareAmount) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${gridWidth / squareAmount}px`;
    div.style.height = `${gridWidth / squareAmount}px`;
    gridContainer.appendChild(div);

    totalSquares++;
  }
}

//Initial building of grid when page loads

buildGrid(squareNum);

//================================================================

//Event listener for when change grid button is pushed.  Sends prompt to ask user how many squares they want grid to be, and rebuilds grid based on this

changeGridButton.addEventListener("click", function () {
  gridContainer.replaceChildren();

})
