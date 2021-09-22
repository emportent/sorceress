/* DO NOT LOOK TOO MUCH! */

var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = canvas.width / 2;
var angle = 0;
var lineWidth = 2;
var lineColor = 'blue';
var lineLength = 100;
var lineCount = 45;
var lineSpacing = lineLength / lineCount;
var lineAngle = Math.PI * 2 / lineCount;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  for (var i = 0; i < lineCount; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle + i * lineAngle) * radius, centerY + Math.sin(angle + i * lineAngle) * radius);
    ctx.stroke();
  }
  angle += 0.01;
}

setInterval(draw, 10);

var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];
var colorIndex = 0;

function changeColor() {
  lineColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
});
