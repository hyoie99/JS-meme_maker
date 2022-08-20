const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;

const colors = [
  "#c56cf0",
  "#ffb8b8",
  "#ff3838",
  "#ff9f1a",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
  "#4b4b4b",
];

function onclick(event) {
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
}

function onMove(event) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  context.strokeStyle = color;
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
}

canvas.addEventListener("click", onclick);
canvas.addEventListener("mousemove", onMove);
