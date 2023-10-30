function makeBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll('div');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  count = size * size;
  for(let i = 0; i < count; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend", square);
  }
}

makeBoard(16);