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

const squareGrid = makeSquareGrid(16);
document.body.appendChild(squareGrid);
