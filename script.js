const gridContainer = document.getElementById("gridContainer");
const darkeningEffectElement = document.getElementById(
  "darkeningEffectPercentage"
);
let darkeningEffectPercentage = 0;
let hslLight = 60;
let currentPressedKey = "";

function createGrid(size = 16) {
  const cellSize = 500 / size;

  while (gridContainer.firstChild) gridContainer.firstChild.remove();

  for (let i = 1; i <= size * size; i++) {
    const cell = document.createElement("div");
    cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; transition: 0.2s;`;
    cell.className = `cell ${i}`;
    gridContainer.appendChild(cell);
  }
}

function getRandomColor() {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 20 + 40;

  if (hslLight < 0) hslLight = 0;
  else if (hslLight > 100) hslLight = 100;
  else hslLight -= (hslLight * darkeningEffectPercentage) / 100;

  return `hsl(${hue}, ${saturation}%, ${hslLight}%)`;
}

function setDarkeningEffect(value) {
  if (isNaN(value)) return;
  darkeningEffectPercentage = Number(value);
  darkeningEffectElement.value = Number(value);
}

gridContainer.addEventListener("mouseover", (e) => {
  const cell = e.target;

  if (cell.classList.contains("cell")) {
    if (currentPressedKey === "e" || currentPressedKey == "w") {
      cell.style.backgroundColor = "";
    } else if (currentPressedKey === "b") {
      cell.style.backgroundColor = "black";
    } else if (currentPressedKey !== "s") {
      cell.style.backgroundColor = getRandomColor();
    }
  }
});

document.getElementById("setGridSize").addEventListener("click", () => {
  const newSize =
    prompt("Enter new grid size. (size must be less than 100)", "16") ?? 16;

  if (newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size!");
  }
});

document.getElementById("reset").addEventListener("click", () => {
  createGrid();
  darkeningEffectPercentage = 0;
  darkeningEffectElement.value = "";
});

darkeningEffectElement.addEventListener("input", (e) => {
  setDarkeningEffect(e.target.value);
});

window.addEventListener("keydown", (e) => {
  if (e.key == "[") {
    setDarkeningEffect(darkeningEffectPercentage - 1);
  } else if (e.key == "]") {
    setDarkeningEffect(darkeningEffectPercentage + 1);
  } else if (e.key == "\\") {
    setDarkeningEffect(0);
  } else {
    currentPressedKey = e.key.toLowerCase();
  }
});

window.addEventListener("keyup", (e) => {
  currentPressedKey = "";
});

createGrid();
