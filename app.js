const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;
context.moveTo(0, 0);

function onClick(event) {
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
}
canvas.addEventListener("click", onClick);
