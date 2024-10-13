const setGridSizeButton = document.getElementById("setGridSize");
const gridContainer = document.getElementById("gridContainer");

function createElement({
  type = "div",
  text = "",
  className = "",
  style = "",
}) {
  const newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.className = className;
  newElement.style.cssText = style;
  return newElement;
}

function createGrid(size = 16) {
  const marginSize = 1;
  const cellSize = 500 / size - marginSize * 2;

  while (gridContainer.firstChild) gridContainer.firstChild.remove();

  for (let i = 1; i <= size * size; i++) {
    gridContainer.appendChild(
      createElement({
        className: `cell ${i}`,
        style: `width: ${cellSize}px; height: ${cellSize}px; border: 1px solid; margin: ${marginSize}px`,
      })
    );
  }
}

function getRandomColor() {
  const colors = [
    "cornflowerblue",
    "tomato",
    "mediumseagreen",
    "goldenrod",
    "slateblue",
    "palevioletred",
    "teal",
    "coral",
    "darkturquoise",
    "indianred",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

gridContainer.addEventListener("mouseover", (e) => {
  const cell = e.target;
  if (cell.classList.contains("cell")) {
    cell.style.backgroundColor = getRandomColor();
  }
});

setGridSizeButton.addEventListener("click", (e) => {
  const newSize = prompt(
    "Enter new grid size. (size must be less than 100)",
    "16"
  );

  if (newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size!");
  }
});

createGrid();
