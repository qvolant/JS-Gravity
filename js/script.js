function onload() {
  var radius = 30;
  var posX = 50;
  var posY = 50;
  var vx = 15;
  var vy = 0;
  var ay = 0.3;
  var deg = 0;
  var vr = 0;
  var air = 0.998;

  var areaW = 700;
  var areaH = 450;
  var area = document.getElementById('areadiv')
  var ball = document.getElementById('ball');
  var ballshape = document.getElementById('ballshape')

  setInterval(update, 1000/60);
  function update() {
    posX += vx;
    vx *= air;
    vy += ay;
    vy *= air;
    posY += vy;
    deg += vr;

    if (posY >= areaH - radius) {
      vy *= -0.90;
      posY = areaH - radius;
      vr = vx;
    }
    if (posY <= radius) {
      vy *= -0.90;
      posY = radius;
      vr = vx;
    }

    if (posX >= areaW - radius) {
      vx *= -0.95;
      posX = areaW - radius;
      vr *= 0.7;
    }
    if (posX <= radius) {
      vx *= -0.95;
      posX = radius;
      vr *= 0.7;
    }

    ball.style.top = posY + "px";
    ball.style.left = posX + "px";
    ballshape.style.transform = "rotate("+deg+"deg)";
  }

  document.onkeypress = function(key) {
    console.log(key.keyCode);
    vr = 9999;
    if (key.key == "z") {
      vy -= 10;
    }
    else if (key.key == "s") {
      vy += 10;
    }
    else if (key.key == "q") {
      vx -= 10;
    }
    else if (key.key == "d") {
      vx += 10;
    }
  }
}
