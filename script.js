document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const circleRadius = 25;
  const circleColor = "#00aaff";
  const canvasColor = "#f1f1f1";

  let userCircle = {
      x: Math.random() * (canvas.width - circleRadius * 2) + circleRadius,
      y: Math.random() * (canvas.height - circleRadius * 2) + circleRadius,
      speedX: 0,
      speedY: 0
  };

  function drawCircle(x, y) {
      context.beginPath();
      context.arc(x, y, circleRadius, 0, 2 * Math.PI);
      context.fillStyle = circleColor;
      context.fill();
      context.closePath();
  }

  function clearCanvas() {
      context.fillStyle = canvasColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function update() {
      clearCanvas();
      drawCircle(userCircle.x, userCircle.y);
  }

  function moveCircle() {
      userCircle.x += userCircle.speedX;
      userCircle.y += userCircle.speedY;
      update();
  }

  function keyDownHandler(event) {
      switch (event.key) {
          case "ArrowLeft":
              userCircle.speedX = -1;
              break;
          case "ArrowRight":
              userCircle.speedX = 1;
              break;
          case "ArrowUp":
              userCircle.speedY = -1;
              break;
          case "ArrowDown":
              userCircle.speedY = 1;
              break;
      }
  }

  function keyUpHandler(event) {
      switch (event.key) {
          case "ArrowLeft":
          case "ArrowRight":
              userCircle.speedX = 0;
              break;
          case "ArrowUp":
          case "ArrowDown":
              userCircle.speedY = 0;
              break;
      }
  }

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  setInterval(moveCircle, 10);
});
