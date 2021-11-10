const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'https://i.ibb.co/kSrfw6R/Chess-Pieces-Sprite-compressed.png';

const boardLen = 600;
const sqLen = boardLen / 8;

const darkCol = '#77995b';
const lightCol = '#eeeeee';

const strPieces = 'RNBQKBNR'; // order of pieces in chess board

let tablero = [];

function drawBoard() {
  let i = 0;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let color = (row + col) % 2 != 0 ? darkCol : lightCol;
      ctx.fillStyle = color;
      ctx.fillRect(row * sqLen, col * sqLen, sqLen, sqLen);
    }
  }

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const p = tablero[rank][file];
      console.log(p);
      if (p) {
        drawPiece(p, file * sqLen, rank * sqLen);
      }
    }
  }
}

function drawPiece(p, x, y) {
  const pos = 'KQBNRP'; // Order of pieces in png sprite
  let idx = pos.indexOf(p.letter);
  let height = p.color == 'b' ? 100 : 0;
  ctx.drawImage(img, 100 * idx, height, 100, 100, x, y, sqLen, sqLen);
}

function iniciarTablero() {
  // it fills the global 2D array tablero with objects returned by piece()

  function piece(row, col) {
    let letter, color;
    const l = 'RNBQKBNR';
    if (row < 2) color = 'b';
    else if (row > 5) color = 'w';
    else return null;

    letter = row == 0 || row == 7 ? l[col] : 'P';
    return { letter, color };
  }

  for (var i = 0; i < 8; i++) {
    tablero[i] = []; // weird, I would normally use tablero.push([])
    for (var j = 0; j < 8; j++) {
      tablero[i].push(piece(i, j));
    }
  }
}

window.addEventListener('load', (e) => {
  iniciarTablero();
  drawBoard();
});

