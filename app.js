const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.fillRect(230, 200, 15, 100);
context.fillRect(370, 200, 15, 100);
context.fillRect(280, 200, 60, 200);

context.fillRect(280, 420, 15, 150);
context.fillRect(325, 420, 15, 150);

context.arc(310, 130, 50, 0, 2 * Math.PI);
context.fill();

// 새로운 경로 필수
context.beginPath();
context.arc(290, 130, 8, Math.PI, 2 * Math.PI);
context.arc(330, 130, 8, Math.PI, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
