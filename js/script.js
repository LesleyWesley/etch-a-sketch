//Selects grid container in html

const gridContainer = document.querySelector(".grid-container");

//Variable for number of divs across div container

let squareNum = 16;

//============================================================

//Builds grid based on whatever squareNum is

const buildGrid = function () {
  let totalSquares = 0;

  const gridWidth = gridContainer.offsetWidth - 6;

  while (totalSquares <= squareNum * squareNum) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${gridWidth / squareNum}`;
    div.style.height = `${gridWidth / squareNum}`;
    gridContainer.appendChild(div);

    totalSquares++;
  }
}

buildGrid();
