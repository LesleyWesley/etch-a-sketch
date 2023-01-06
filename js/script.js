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


  const gridWidth = gridContainer.offsetWidth - 6 - (squareAmount + 3);
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

//Event listener for when change grid button is pushed.  Sends prompt to ask user how many squares they want grid to be, and rebuilds grid based on this

window.addEventListener("resize", function () {
  gridContainer.replaceChildren();
  buildGrid(squareNum);
})
