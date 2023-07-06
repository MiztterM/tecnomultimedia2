var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

var engine;
var world;
var particles = [];
let mic,amp;
var boundaries = [];
var ground;
var mConstraint;

var h1,h2,h3,h4,h5,h6,h7,h8,h8,h10,h11;

let crece = false;
var tiempo = 0;


var tamaños = [];
var gravedad = 0.0;

function setup() {
  createCanvas(800, 800);
  h1 = random(50, 70);
  h2 = random(50, 70);
  h3 = random(10, 40);
  h4 = random(10, 40);
  h5 = random(10, 40);
  h6 = random(10, 40);
  h7 = random(10, 40);
  h8 = random(10, 40);
  h9 = random(10, 40);
  h10 = random(120, 140);
  h11 = random(70, 120);
  h12 = random(70, 120);

  tamaños [0] = h1; 
  tamaños [1] = h2; 
  tamaños [2] = h3; 
  tamaños [3] = h4; 
  tamaños [4] = h5; 
  tamaños [5] = h6; 
  tamaños [6] = h7; 
  tamaños [7] = h8; 
  tamaños [8] = h9; 
  tamaños [9] = h10; 
  tamaños [10] = h11; 
  tamaños [11] = h12; 

  for (var i = 0; i < tamaños.length; i++){
  tamaños [i] = tamaños [i];
  }

  mic = new p5.AudioIn();       //inicio el
  mic.start();                  //audio

  pixelDensity(1);
  engine = Engine.create();
  world = engine.world;
  //world.gravity.y = gravedad;

  // Engine.run(engine);

   //chicas
  var p1 = new Particle(random(30, width-100), random(30, height-100), h1);
  var p2 = new Particle(random(30, width-100), random(30, height-100), h2);
  var p3 = new Particle(random(30, width-100), random(30, height-100), h3);
  var p4 = new Particle(random(30, width-100), random(30, height-100), h4);
  var pcinco = new Particle(random(30, width-100), random(30, height-100), h5);
  var p6 = new Particle(random(30, width-100), random(30, height-100), h6);
  
  var p7 = new Particle(random(30, width-100), random(30, height-100), h7);
  var p8 = new Particle(random(30, width-100), random(30, height-100), h8);
  var p9 = new Particle(random(30, width-100), random(30, height-100), h9);

  particles.push(p1);
  particles.push(p2);
  particles.push(p3);
  particles.push(p4);
  particles.push(pcinco);
  particles.push(p6);
  particles.push(p7);
  particles.push(p8);
  particles.push(p9);


  // paredes/limites
  boundaries.push(new Boundary(width / 2, height + 200, width + 400, 200, 0)); // piso
  boundaries.push(new Boundary(width / 2, -200, width + 400, 200, 0)); // techo
  boundaries.push(new Boundary(-200, height / 2, 200, width + 400, 0));
  boundaries.push(new Boundary(width + 200, height / 2, 200, width + 400, 0));

  //grandes

  particles.push(
    new Particle(random(100, 400), random(200, 400), h10)
  );

  particles.push(
    new Particle(random(200, 300), random(20, 300), h11)
  );
  particles.push(
    new Particle(random(200, 400), random(200, 400), h12)
  );
}


function draw() {
  background(118, 194, 166);
  amp = mic.getLevel();
  userStartAudio();

  world.gravity.y = gravedad;
  drawColorsBeige();
  drawColorsCeleste2();
  drawColorsCeleste1();
  drawColorsNaranja();

  Engine.update(engine);
  for (var i = 0; i < boundaries.length; i++) {
    /// dibuja los limites
    boundaries[i].show();
  }
  
  for (let i = 0; i < particles.length; i++) {
    let dx = random(-2, 2);
    let dy = random(-2, 2);

    // +amplitud +velocidad
    let minSpeed = 0;
    let maxSpeed = map(amp, 0, 1, 0, 10);
    let speed = random(minSpeed, maxSpeed);
    let velocity = createVector(dx, dy).mult(speed);

    particles[i].body.position.x += velocity.x;
    particles[i].body.position.y += velocity.y;

// Sonido por Tamaño
for (let i = 0; i < 12; i++) {
   if (amp > 0.35 && particles[i].r < tamaños[i] + 50){
    particles[i].r += 0.5;
   } else {
    if (particles[i].r > tamaños [i]) {
    particles[i].r -= 0.1;}
   }
  }
    particles[i].show();
  }

  //marco
  noFill();
  strokeWeight(80);
  stroke(245);
  rect(0, 0, width, height);

}