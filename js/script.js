//Selects grid container in html

const gridContainer = document.querySelector(".grid-container");

//Selects grid density buttons

const tenButton = document.querySelector(".ten");
const twentyButton = document.querySelector(".twenty");
const thirtyButton = document.querySelector(".thirty");

//Selects color buttons

const classicButton = document.querySelector(".classic");
const vaporButton = document.querySelector(".vaporwave");
const cyberpunkButton = document.querySelector(".cyberpunk");
const eraserButton = document.querySelector(".eraser");

//Selects clear button

const clearButton = document.querySelector(".clear");

//Variable for number of divs across div container

let squareNum = 20;

//Variable for pen color

let color = "#495057";

//Arrays for color schemes

const cyberpunkArray = ["#EEE601", "#53C5C8", "#09050C", "#CA104D", "#495057"];
const vaporwaveArray = ["#BFFCFF", "#DFFFFA", "#FEDAF6", "#B0E1FF", "#E5C6FF", "#AC5293"];


//============================================================

//Builds grid based on whatever squareNum is

const buildGrid = function () {

  let gridWidth = gridContainer.offsetWidth - 6 - (squareNum + 3);

  for (let i = 0; i < squareNum * squareNum; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${gridWidth / squareNum}px`;
    div.style.height = `${gridWidth / squareNum}px`;
    div.addEventListener("mouseover", function() {
      chooseColor();
      div.style.backgroundColor = `${color}`;
    })
    gridContainer.appendChild(div);
  }
}

//Initial building of grid when page loads

buildGrid();

//================================================================

//Adds ResizeObserver to change density of grid if size of grid container is changed

const myObserver = new ResizeObserver(entries => {
  gridContainer.replaceChildren();
  buildGrid();
});

myObserver.observe(gridContainer);

//================================================================

//Function to remove active class from size buttons

const removeActiveSize = function () {
  tenButton.classList.remove("active");
  twentyButton.classList.remove("active");
  thirtyButton.classList.remove("active");
};

//Function to remove active class from color buttons

const removeActiveColor = function () {
  classicButton.classList.remove("active");
  vaporButton.classList.remove("active");
  cyberpunkButton.classList.remove("active");
  eraserButton.classList.remove("active");
}

//================================================================

//Rebuilds grid if 10x10 button is pushed

tenButton.addEventListener("click", function() {
  removeActiveSize();
  tenButton.classList.add("active");

  squareNum = 10;
  buildGrid();
})

//Rebuilds grid if 20x20 button is pushed

twentyButton.addEventListener("click", function() {
  removeActiveSize();
  twentyButton.classList.add("active");

  squareNum = 20;
  buildGrid();
})

//Rebuilds grid if 30x30 button is pushed

thirtyButton.addEventListener("click", function() {
  removeActiveSize();
  thirtyButton.classList.add("active");
  squareNum = 30;
  buildGrid();
})

//=============================================================

//Functions to choose random color from array

const chooseRandomColor = function (array) {
  return array[Math.floor(Math.random() * array.length)];
}


//Function to choose color

const chooseColor = function () {
  if (classicButton.classList.contains("active")) {
    color = "#495057";
  } else if (vaporButton.classList.contains("active")) {
    color = chooseRandomColor(vaporwaveArray);
  } else if (cyberpunkButton.classList.contains("active")) {
    color = chooseRandomColor(cyberpunkArray);
  } else if (eraserButton.classList.contains("active")) {
    color = "#FFF";
  }
}



//============================================================

classicButton.addEventListener("click", function () {
  removeActiveColor();
  classicButton.classList.add("active");
  color = "#495057";
})

vaporButton.addEventListener("click", function () {
  removeActiveColor();
  vaporButton.classList.add("active");
  color = "red";
})

cyberpunkButton.addEventListener("click", function () {
  removeActiveColor();
  cyberpunkButton.classList.add("active");
  color = `${chooseRandomColor(cyberpunkArray)}`;
})

eraserButton.addEventListener("click", function () {
  removeActiveColor();
  eraserButton.classList.add("active");
  color = "#FFF";
})

//==========================================================

//Clears grid when Clear Sketchpad button is pushed

clearButton.addEventListener("click", function () {
  buildGrid();
})
