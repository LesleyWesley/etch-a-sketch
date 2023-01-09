//Selects grid container in html

const gridContainer = document.querySelector(".grid-container");

//Selects grid density buttons

const tenButton = document.querySelector(".ten");
const twentyButton = document.querySelector(".twenty");
const thirtyButton = document.querySelector(".thirty");

//Variable for number of divs across div container

let squareNum = 20;

//============================================================

//Builds grid based on whatever squareNum is

const buildGrid = function () {


  let gridWidth = gridContainer.offsetWidth - 6 - (squareNum + 3);
  console.log(gridWidth / squareNum);

  for (let i = 0; i < squareNum * squareNum; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${gridWidth / squareNum}px`;
    div.style.height = `${gridWidth / squareNum}px`;
    gridContainer.appendChild(div);

  }
}

//Initial building of grid when page loads

buildGrid();

//================================================================

//Adds ResizeObserver to change size of grid if size of grid container is changed

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
