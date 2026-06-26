// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   textile.js  — Canvas-based textile pattern generator
//
//   Draws a woven geometric pattern onto a <canvas>
//   element using the province's accent colour.
//   Each province gets a unique feel via modular
//   pattern switching based on grid position.
// ═══════════════════════════════════════════════

/**
 * Renders a woven textile background onto a canvas element.
 * @param {HTMLCanvasElement} canvas - Target canvas
 * @param {string} color  - Hex colour string for the province (e.g. '#C87D3A')
 */
function drawTextile(canvas, color) {
  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth  || 400;
  canvas.height = canvas.offsetHeight || 180;

  const w = canvas.width;
  const h = canvas.height;
  const s = 18; // tile size

  // Base fill
  ctx.fillStyle = '#0B1510';
  ctx.fillRect(0, 0, w, h);

  // Two tones derived from the province colour
  const c1 = color + 'AA'; // prominent
  const c2 = color + '44'; // subtle

  for (let x = 0; x < w + s; x += s) {
    for (let y = 0; y < h + s; y += s) {
      const cell = (x / s + y / s);
      const even = (cell % 2 === 0);

      ctx.strokeStyle = even ? c1 : c2;
      ctx.lineWidth   = even ? 1.5 : 0.5;
      ctx.beginPath();

      switch (cell % 4) {
        case 0: // diagonal cross
          ctx.moveTo(x, y);     ctx.lineTo(x + s, y + s);
          ctx.moveTo(x + s, y); ctx.lineTo(x, y + s);
          break;
        case 1: // inset square
          ctx.rect(x + 3, y + 3, s - 6, s - 6);
          break;
        case 2: // diamond
          ctx.moveTo(x + s / 2, y);
          ctx.lineTo(x + s, y + s / 2);
          ctx.lineTo(x + s / 2, y + s);
          ctx.lineTo(x, y + s / 2);
          ctx.closePath();
          break;
        case 3: // circle
          ctx.arc(x + s / 2, y + s / 2, s / 3, 0, Math.PI * 2);
          break;
      }

      ctx.stroke();
    }
  }
}
