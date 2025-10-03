let container = document.querySelector(".container");
let clearBtn = document.querySelector(".clear-button");
let gridBtn = document.querySelector(".submit-btn");
let form = document.getElementById("form");
let box = document.querySelector(".box");
let colorOne = document.querySelector("color-choice");

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

//It makes it work
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
//getting random colour
function getRandomColour() {
  const hex = `0123456789ABCDEF`;
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Color the boxes
function colorBox() {
  let color = "";
  let colorSelect = document.getElementById("color-choice");
  let grid = document.querySelector(".container");

  // track current color
  colorSelect.addEventListener("change", function (event) {
    color = event.target.value;
    console.log("Selected:", color);
  });

  // single listener on the grid
  grid.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("box")) {
      event.target.classList.remove("black", "blue", "green", "rainbow");
      switch (color) {
        case "Black":
          event.target.classList.add("black");
          break;
        case "Green":
          event.target.classList.add("green");
          break;
        case "Blue":
          event.target.classList.add("blue");

        case "Rainbow":
          let randomColour = getRandomColour();
          event.target.style.setProperty("--rainbow-color", randomColour);
          event.target.classList.add("rainbow");
          break;
      }
    }
  });
}
colorBox();

//give functionality to the 'Reset' Button
clearBtn.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.remove("black", "blue", "green", "rainbow");
  });
});
