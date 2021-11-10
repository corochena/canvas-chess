const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'https://i.ibb.co/kSrfw6R/Chess-Pieces-Sprite-compressed.png';

const boardLen = 600;
const sqLen = boardLen / 8;

const darkCol = '#77995b';
const lightCol = '#eeeeee';

const strPieces = 'TNBQKBNT'; // order of pieces in chess board

function drawBoard() {
  let i = 0;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let color = (row + col) % 2 != 0 ? darkCol : lightCol;
      ctx.fillStyle = color;
      ctx.fillRect(row * sqLen, col * sqLen, sqLen, sqLen);
    }
  }
}

function drawPiece(p, x, y) {
  const pos = 'KQBNTP'; // Order of pieces in png sprite
  let idx = pos.indexOf(p.letter);
  let height = p.color == 'b' ? 100 : 0;
  ctx.drawImage(img, 100 * idx, height, 100, 100, x, y, sqLen, sqLen);
}

drawBoard();
drawPiece({ letter: 'N', color: 'b' }, 300, 200);
