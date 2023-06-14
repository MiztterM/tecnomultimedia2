var Engine = Matter.Engine,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

var engine;
var world;
var particles = [];
let mic;
let amp;
var boundaries = [];
var ground;
var mConstraint;

function setup() {
  createCanvas(800, 800);
  mic = new p5.AudioIn();       //inicio el
  mic.start();                  //audio
  pixelDensity(1);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.0;

  // Engine.run(engine);

  var p1 = new Particle(random(30, 700), random(30, 700), random(50, 70));
  var p2 = new Particle(random(30, 700), random(30, 700), random(50, 70));
  var p3 = new Particle(random(30, 700), random(30, 700), random(10, 40));
  var p4 = new Particle(random(30, 700), random(30, 700), random(10, 40));
  var pcinco = new Particle(random(30, 700), random(30, 700), random(10, 40));
  var p6 = new Particle(random(30, 700), random(30, 700), random(10, 40));

  particles.push(p1);
  particles.push(p2);
  particles.push(p3);
  particles.push(p4);
  particles.push(pcinco);
  particles.push(p6);

  var options = {
    bodyA: p1.body,
    bodyB: p2.body,
    length: 150,
    stiffness: 0.4,
  };

  var constraint = Constraint.create(options);
  World.add(world, constraint);

  // paredes/limites
  boundaries.push(new Boundary(width / 2, height + 100, width + 200, 100, 0)); // piso
  boundaries.push(new Boundary(width / 2, -100, width + 200, 100, 0)); // techo
  boundaries.push(new Boundary(-100, height / 2, 100, width + 200, 0));
  boundaries.push(new Boundary(width + 100, height / 2, 100, width + 200, 0));

  //grandes
  particles.push(
    new Particle(random(100, 400), random(100, 300), random(150, 180))
  );
  particles.push(
    new Particle(random(100, 400), random(200, 400), random(150, 180))
  );
  particles.push(
    new Particle(random(200, 300), random(200, 300), random(80, 130))
  );
  particles.push(
    new Particle(random(200, 300), random(20, 300), random(80, 130))
  );
  particles.push(
    new Particle(random(200, 400), random(200, 400), random(80, 130))
  );
}

function draw() {
  background(118, 194, 166);
  amp = mic.getLevel();


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
    let dx = random(-1, 1);
    let dy = random(-1, 1);

    // +amplitud +velocidad
    let minSpeed = 0;
    let maxSpeed = map(amp*2, 0, 1, 0, 10);
    let speed = random(minSpeed, maxSpeed);
    let velocity = createVector(dx, dy).mult(speed);

    particles[i].body.position.x += velocity.x;
    particles[i].body.position.y += velocity.y;

    particles[i].show();
  }

  //marco
  noFill();
  strokeWeight(80);
  stroke(245);
  rect(0, 0, width, height);
}



