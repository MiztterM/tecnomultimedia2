


function Particle(x, y, r) {

  //mancha
  let circulos = [];
  let pos = [];
  let dosCosos = false;
  let dosCososVariable = 1;
//mancha

  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);



//mancha
    let tamMancha = random (15,40);
    let tamMancha2 = random (15,40);
    pos[0] = random (-15,-5);
    pos[1] = random (-15,-5);
    pos[2] = random (5,15);
    pos[3] = random (5,15);

    circulos[0] = new Circulo(pos[0], pos[1], tamMancha);
    circulos[1] = new Circulo(pos[2], pos[3], tamMancha2);

if (dosCososVariable == 1){
  dosCosos = false;
} else {
  dosCosos = true;
}

//mancha

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(0.5);
    stroke(10);
    fill(234, 73, 135); //fuxia
    ellipse(0, 0, this.r * 1.8);
    //

    if (this.r > 30) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1.4);
      fill(236, 178, 0); //amarillo
      ellipse(0, 0, this.r * 0.6);
      fill(236, 0, 200); //amarillo
    }
    
    if (this.r > 60) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1.4);
      fill(236, 178, 0); //amarillo
      ellipse(0, 0, this.r * 0.7);
      
    }
    if (this.r > 70) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1.4);
      fill(236, 178, 0); //amarillo
      ellipse(0, 0, this.r * 0.8);
      
      //mancha
      strokeWeight(0);
      fill (42, 48, 47);
      circulos[0].dibujar();

      if (dosCosos = true) {
      circulos[1].dibujar();
      }
      //mancha
    }
    if (this.r < 30) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1);
    }

    pop();
    
  };
  
}
