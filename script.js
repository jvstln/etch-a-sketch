const setGridSizeButton = document.getElementById("setGridSize");
let squareGrid = makeSquareGrid(16);
document.body.appendChild(squareGrid);

function createElement({ type = "div", text = "", className = "" }) {
  const newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.className = className;
  return newElement;
}

function makeSquareGrid(size, containerReference) {
  const container = createElement({ className: "square-grid" });
  let rowContainer;

  for (let row = 1; row <= size; row++) {
    rowContainer = createElement({ className: "row" });

    for (let col = 1; col <= size; col++) {
      rowContainer.appendChild(
        createElement({ className: `cell ${row}-${col}` })
      );
    }

    container.appendChild(rowContainer);
  }

  return container;
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

function cellHoverEffectHandler(e) {
  const cell = e.target;
  if (cell.classList.contains("cell")) {
    cell.style.backgroundColor = getRandomColor();
  }
}

function setGridSizeHandler(e) {
  const newSize = Number(
    prompt("Enter new grid size. (size must be less than 100)", "16")
  );

  if (newSize <= 100) {
    const newSquareGrid = makeSquareGrid(newSize);
    squareGrid.replaceWith(newSquareGrid);
    newSquareGrid.addEventListener("mouseover", cellHoverEffectHandler);
  } else {
    alert("Invalid size!");
  }
}

squareGrid.addEventListener("mouseover", cellHoverEffectHandler);
setGridSizeButton.addEventListener("click", setGridSizeHandler);
