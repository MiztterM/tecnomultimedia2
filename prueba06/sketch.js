var Engine = Matter.Engine,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
let mic;
let amp;
let IMPRIMIR = true;
var boundaries = [];

var ground;

var mConstraint;
var canvas = createCanvas(800, 800); // me devulve una refe del lienzo

function setup() {
  createCanvas(800, 800);
  mic = new p5.AudioIn();
  mic.start();
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.0;
  Engine.run(engine);

  // paredes/limites
  boundaries.push(new Boundary(width / 2, height + 100, width + 200, 100, 0)); // piso
  boundaries.push(new Boundary(width / 2, -100, width + 200, 100, 0)); // techo
  boundaries.push(new Boundary(-100, height / 2, 100, width + 200, 0));
  boundaries.push(new Boundary(width + 100, height / 2, 100, width + 200, 0));

  // cedula/circle

  //chiquis
  circles.push(new Circle(random(30, 700), random(30, 700), random(50, 70)));
  circles.push(new Circle(random(30, 700), random(30, 700), random(50, 70)));
  circles.push(new Circle(random(30, 700), random(30, 700), random(10, 40)));
  circles.push(new Circle(random(30, 700), random(30, 700), random(10, 40)));
  circles.push(new Circle(random(30, 700), random(30, 700), random(10, 40)));

  //grandes
  circles.push(new Circle(random(100, 400), random(100, 300), random(150, 180)));
  circles.push(new Circle(random(100, 400), random(200, 400), random(150, 180)));
  circles.push(new Circle(random(200, 300), random(200, 300), random(80, 130)));
  circles.push(new Circle(random(200, 300), random(20, 300), random(80, 130)));
  circles.push(new Circle(random(200, 400), random(200, 400), random(80, 130)));
  // circles.push(new Circle(300, 100, getRandomDiameter()));

}

//function mousePressed() {
//  circles.push(new Circle(mouseX, mouseY, random(10, 60)));
//}

function draw() {
  background(118, 194, 166);
  amp = mic.getLevel();

  //Engine.update(engine);

  for (let i = 0; i < circles.length; i++) {
    let dx = random(-1, 1);
    let dy = random(-1, 1);

    // +amplitud +velocidad
    let minSpeed = 0;
    let maxSpeed = map(amp*10, 0, 1, 0, 10);
    let speed = random(minSpeed, maxSpeed);
    let velocity = createVector(dx, dy).mult(speed);

    circles[i].body.position.x += velocity.x;
    circles[i].body.position.y += velocity.y;

    circles[i].show();
  }

  for (let j = 0; j < boundaries.length; j++) {
    boundaries[j].show();
  }

  //marco
  noFill();
  strokeWeight(80);
  stroke(245);
  rect(0, 0, width, height);

  if (IMPRIMIR){
    printData();
  }
}

function getRandomDiameter() {
  return Math.random() * (180 - 20) + 20; //  diámetro aleatorio entre 20 y 180
}

function printData(){
  push();
  pop();
}
