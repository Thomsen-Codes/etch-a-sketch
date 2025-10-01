let container = document.querySelector(".container");
let clearBtn = document.querySelector(".clear-button");
let gridBtn = document.querySelector(".submit-btn");
let errorMessage = document.getElementById("error");
let form = document.getElementById("form");

//User creating the grid
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userInput = document.querySelector("input").value;
  container.innerHTML = "";
  container.style.setProperty("--cols", userInput);
  if (userInput === "") {
    defaultGrid();
  }
  for (let index = 0; index < userInput * userInput; index++) {
    createGrid();
  }
});

//testing
form.dispatchEvent(new Event("submit"));

//create div
function createGrid() {
  let newGrid = document.createElement("div");
  container.appendChild(newGrid);
  newGrid.classList.add("box");
}
//Create a default grid always
function defaultGrid() {
  for (let index = 0; index < 16 * 16; index++) {
    let grid = document.createElement("div");
    container.appendChild(grid);
    container.style.setProperty("--cols", 16);
    grid.classList.add("box");
  }
}
