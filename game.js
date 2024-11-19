function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 140, 0);
}
function aladdin(x, y) {
  //aladdin upper body/
  push();
  angleMode(DEGREES);
  strokeWeight(0.4);

  fill(220, 160, 100);
  ellipse(x + 243, y + 224, 22, 50);
  fill(120, 0, 200);

  //vest/
  quad(x + 233, y + 205, x + 237, y + 210, x + 234, y + 230, x + 227, y + 229);
  quad(x + 243, y + 208, x + 253, y + 200, x + 256, y + 230, x + 247, y + 229);

  //left arm//
  push();
  fill(220, 160, 100);
  translate(x + 258, y + 218);
  rotate(-40);
  ellipse(0, 0, 7, 22);
  pop();

  push();
  fill(220, 160, 100);
  translate(x + 270, y + 229);
  rotate(35);
  ellipse(0, 0, 17, 6);
  pop();

  //right arm//
  push();
  fill(220, 160, 100);
  translate(x + 227, y + 220);
  rotate(40);
  ellipse(0, 0, 7, 22);
  pop();

  push();
  fill(220, 160, 100);
  translate(x + 217, y + 224);
  rotate(35);
  ellipse(0, 0, 17, 6);
  pop();

  //sword/
  push();
  fill(197, 197, 204);
  translate(x + 208, y + 190);
  rotate(-10);
  ellipse(0, 0, 10, 50);
  pop();
  fill(200, 0, 100);
  rect(x + 210, y + 214, 4, 6);

  //head/
  push();
  fill(0, 0, 0);
  ellipse(x + 240, y + 180, 30, 15);
  ellipse(x + 250, y + 190, 15, 30);

  push();
  fill(200, 0, 100);
  translate(x + 248, y + 166);
  rotate(29);
  rect(0, 0, 15, 10);
  pop();

  fill(220, 160, 100);
  ellipse(x + 237, y + 195, 20, 25);

  fill(0, 0, 0);
  ellipse(x + 233, y + 190, 6, 2);
  fill(255, 255, 255);
  circle(x + 232, y + 194, 5);
  fill(0, 0, 0);
  circle(x + 231, y + 194, 2);
  ellipse(x + 231, y + 202, 4, 1);
  pop();

  pop();

  //carpet/
  push();
  push();
  angleMode(DEGREES);
  strokeWeight(2);
  stroke(255, 230, 0);
  fill(140, 0, 255);
  quad(x + 140, y + 260, x + 350, y + 260, x + 320, y + 330, x + 110, y + 330);

  fill(180, 0, 255);
  quad(x + 160, y + 280, x + 315, y + 280, x + 300, y + 315, x + 145, y + 315);

  fill(255, 230, 0);
  stroke(180, 0, 255);
  strokeWeight(1);

  push();
  translate(x + 140, y + 260);
  rotate(-230);
  triangle(0, 0, -10, 20, 10, 20);
  pop();

  push();
  translate(x + 350, y + 260);
  rotate(240);
  triangle(0, 0, -10, 20, 10, 20);
  pop();

  push();
  translate(x + 320, y + 330);
  rotate(-40);
  triangle(0, 0, -10, 20, 10, 20);
  pop();

  push();
  translate(x + 110, y + 330);
  rotate(60);
  triangle(0, 0, -10, 20, 10, 20);
  pop();

  pop();
  pop();

  //aladdin lower body/
  push();
  angleMode(DEGREES);
  strokeWeight(0.4);

  //legs/
  fill(220, 160, 100);
  ellipse(x + 218, y + 286, 15, 7);
  ellipse(x + 257, y + 287, 15, 7);

  push();
  fill(255, 255, 255);
  translate(x + 230, y + 263);
  rotate(20);
  ellipse(0, 0, 20, 50);
  pop();

  push();
  fill(255, 255, 255);
  translate(x + 253, y + 262);
  rotate(-20);
  ellipse(0, 0, 20, 50);
  pop();

  //belt/
  fill(200, 0, 100);
  quad(x + 232, y + 234, x + 254, y + 231, x + 253, y + 240, x + 232, y + 242);

  pop();
}

let textStart = "Okay Aladdin, let's get Jasmine!";

let y = -150;
function draw() {
  background(210, 170, 109);
  text(textStart, 190, 175);
  aladdin(50, y);

  if (y < 120) {
    y = y + 1;
  }
}
