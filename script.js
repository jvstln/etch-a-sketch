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
  const cellSize = 500 / size;

  while (gridContainer.firstChild) gridContainer.firstChild.remove();

  for (let i = 1; i <= size * size; i++) {
    gridContainer.appendChild(
      createElement({
        className: `cell ${i}`,
        style: `width: ${cellSize}px; height: ${cellSize}px;`,
      })
    );
  }
}

function getRandomColor() {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 20 + 40;
  const light = Math.random() * 20 + 40;

  return `hsl(${hue}, ${saturation}%, ${light}%)`;
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
