// HTMLcollection 요소를 배열로 만들기
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("eraser-btn");
const file = document.getElementById("file");
const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

context.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

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
function onCanvasClick() {
  if (isFilling) {
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onLineWidthChange(event) {
  context.lineWidth = event.target.value;
}

function changeBrushColor(select) {
  context.strokeStyle = select;
  context.fillStyle = select;
}
function onColorChange(event) {
  changeBrushColor(event.target.value);
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  changeBrushColor(colorValue);
  color.value = colorValue;
}

function onChangeMode() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onClickDestroy() {
  context.fillStyle = "white";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onClickEraser() {
  context.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  // 가상의 이미지 url 만들기, 브라우저를 위한 것
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    context.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    file.value = null;
  };
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onChangeMode);
destroyBtn.addEventListener("click", onClickDestroy);
eraseBtn.addEventListener("click", onClickEraser);
file.addEventListener("change", onFileChange);
