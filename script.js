const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'https://i.ibb.co/kSrfw6R/Chess-Pieces-Sprite-compressed.png';

const boardLen = 600;
const sqLen = boardLen / 8;

const darkCol = '#77995b';
const lightCol = '#eeeeee';

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

drawBoard()
