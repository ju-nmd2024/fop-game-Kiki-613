function setup() {
  createCanvas(700, 800);
}

//Variables setup/
let velocity = 0.3;
let acceleration = 0.2;
let aladdinY = 10;
let x = 110;
let y = 50;
let state = "start";

// Screens - start, game, result(win/lost)/
function startScreen() {
  push();
  background(210, 170, 109);
  fill(255, 255, 255);
  text(
    "Okay Aladdin, let's get Jasmine! Press SPACE to land safely.",
    190,
    170
  );
  fill(120, 0, 200);
  rect(300, 210, 100, 50);
  fill(255, 255, 255);
  text("START", 330, 239);
  pop();
}

function lostScreen() {
  push();
  background(210, 170, 109);
  fill(255, 255, 255);
  text("Oh no! Jasmine will have to save herself now.", 220, 170);
  fill(120, 0, 200);
  rect(300, 210, 100, 50);
  fill(255, 255, 255);
  text("RESTART", 323, 239);
  line(200, 700, 460, 700);
  line(320, 550, 320, 700);
  line(266, 600, 380, 600);
  pop();
}

function winScreen() {
  push();
  background(210, 170, 109);
  fill(255, 255, 255);
  text("Welcome to Agrabah. Prince up for Jasmine!", 230, 170);
  fill(120, 0, 200);
  rect(300, 210, 100, 50);
  fill(255, 255, 255);
  text("RESTART", 323, 239);
  aladdin(x, 400);
  pop();
}

function gameScreen() {
  push();
  background(210, 170, 109);
  fill(0, 0, 0);
  line(200, 700, 460, 700);

  // code reference from Garret's ufo example /

  aladdinY = aladdinY + velocity;
  velocity = velocity + acceleration;

  if (keyIsDown(32)) {
    velocity = velocity - 0.7;
  }
  aladdin(x, aladdinY);

  // condition for if landing velocity means loss or win /
  if (aladdinY >= 400 && velocity > 4) {
    state = "resultLost";
  } else if (aladdinY >= 400 && velocity <= 7) {
    state = "resultWin";
  }
  pop();
}

// function to reset variables after result screen /
function reset() {
  x = 110;
  aladdinY = 10;
  velocity = 0.3;
  acceleration = 0.2;
}

// Character /
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

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "resultLost") {
    lostScreen();
    reset();
  } else if (state === "resultWin") {
    winScreen();
    reset();
  }
}

// switch between screens when buttons are clicked/
function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 300 &&
    mouseX <= 400 &&
    mouseY >= 210 &&
    mouseY <= 260
  ) {
    state = "game";
  } else if (
    (state === "resultWin" &&
      mouseX >= 300 &&
      mouseX <= 400 &&
      mouseY >= 210 &&
      mouseY <= 260) ||
    (state === "resultLost" &&
      mouseX >= 300 &&
      mouseX <= 400 &&
      mouseY >= 210 &&
      mouseY <= 260)
  ) {
    state = "start";
  }
}
