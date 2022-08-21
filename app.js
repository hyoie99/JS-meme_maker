// HTMLcollection 요소를 배열로 만들기
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}

function onLineWidthChange(event) {
  context.lineWidth = event.target.value;
}

function changeBrushColor(select) {
  context.strokeStyle = select;
  context.fillStyle = select;
}
function onColorChange(event) {
  // context.strokeStyle = event.target.value;
  // context.fillStyle = event.target.value;
  changeBrushColor(event.target.value);
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  // context.strokeStyle = colorValue;
  // context.fillStyle = colorValue;
  changeBrushColor(colorValue);
  color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach((color) => color.addEventListener("click", onColorClick));
