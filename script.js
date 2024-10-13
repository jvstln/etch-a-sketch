const gridContainer = document.getElementById("gridContainer");
let darkeningEffectPercentage = 0;
let hslLight = 60;

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
        style: `width: ${cellSize}px; height: ${cellSize}px; transition: 0.2s;`,
      })
    );
  }
}

function getRandomColor() {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 20 + 40;

  if (hslLight > 100) hslLight = 100;
  else if (hslLight < 1) hslLight = 0;
  else hslLight -= (hslLight * (darkeningEffectPercentage || 0)) / 100;

  return `hsl(${hue}, ${saturation}%, ${hslLight}%)`;
}

gridContainer.addEventListener("mouseover", (e) => {
  const cell = e.target;

  if (cell.classList.contains("cell")) {
    cell.style.backgroundColor = getRandomColor();
  }
});

document.getElementById("setGridSize").addEventListener("click", () => {
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

document.getElementById("clear").addEventListener("click", () => {
  for (const child of gridContainer.children) {
    child.style.backgroundColor = "";
  }
});

document
  .getElementById("darkeningEffectPercentage")
  .addEventListener("input", (e) => {
    darkeningEffectPercentage = e.target.value;
  });

createGrid();
