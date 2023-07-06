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

  mic = new p5.AudioIn();       //inicio el
  mic.start();                  //audio

  pixelDensity(1);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.0;

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


  var options = {
    bodyA: p1.body,
    bodyB: p2.body,
    length: 150,
    stiffness: 0.4,
  };

  var constraint = Constraint.create(options);
  World.add(world, constraint);

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
    new Particle(random(200, 300), random(20, 300),h11)
  );
  particles.push(
    new Particle(random(200, 400), random(200, 400), h12)
  );
}


function draw() {
  background(118, 194, 166);
  amp = mic.getLevel();
  userStartAudio();

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

   /* if (amp > 0.7){
    particles[i].r += tamanio*3;
   }*/
   

   // particles[i].r += amp/4;

    if (crece == false){
    particles[i].r += amp*1/4;
    h1 += amp*1/4;
    h2 += amp*1/4;
    h3 += amp*1/4;
    h4 += amp*1/4;
    h5 += amp*1/4;
    h6 += amp*1/4;
    h7 += amp*1/4;
    h8 += amp*1/4;
    h9 += amp*1/4;
    h10 += amp*1/4;
    h11 += amp*1/4;
    h12 += amp*1/4;
    tiempo += 0.2;
    if (tiempo >= 500){
      crece = true;
      tiempo = 0;
    }
   }

   if (crece == true){
    particles[i].r -= 0.01 + amp/3;
    h1 -= 0.01 + amp/3;
    h2 -= 0.01 + amp/3;
    h3 -= 0.01 + amp/3;
    h4 -= 0.01 + amp/3;
    h5 -= 0.01 + amp/3;
    h6 -= 0.01 + amp/3;
    h7 -= 0.01 + amp/3;
    h8 -= 0.01 + amp/3;
    h9 -= 0.01 + amp/3;
    h10 -= 0.01 + amp/3;
    h11 -= 0.01 + amp/3;
    h12 -= 0.01 + amp/3;
    tiempo += 0.2;
    if (tiempo >= 500){
      crece = false;
      tiempo = 0;
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