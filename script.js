function createElement({ type = "div", text = "", className = "" }) {
  const newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.className = className;
  return newElement;
}

function makeSquareGrid(size) {
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

const squareGrid = makeSquareGrid(16);
document.body.appendChild(squareGrid);

squareGrid.addEventListener("mouseover", (e) => {
  const cell = e.target;
  if (cell.classList.contains("cell")) {
    cell.style.backgroundColor = getRandomColor();
  }
});
