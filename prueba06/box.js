function Circle(x, y, r) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
   
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

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
    ellipse(0, 0, this.r * 2);
    //

    if (this.r > 30) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1.7);
      fill(236, 178, 0); //amarillo
      ellipse(0, 0, this.r * 1.2);
    }
    if (this.r > 80) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1.7);
      fill(236, 178, 0); //amarillo
      ellipse(0, 0, this.r * 1);
    }
    if (this.r < 30) {
      fill(42, 48, 47); //Negro
      ellipse(0, 0, this.r * 1);
    }

    pop();
  };


  
}
