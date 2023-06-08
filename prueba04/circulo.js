class Circulo {
  
  constructor(x, y, d, vel, dir) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.vel = vel;
    this.dir = dir;
  }

  dibujar() {
   miCirculo(this.x, this.y, this.d);

  function miCirculo(x, y, d) {
    /////
    let r4 = d * 0.58;
    beginShape();
    fill(234, 104, 71); //naranja
    for (let i = 0; i < TWO_PI; i += TWO_PI / 360) {
      let xx = x + r4 * cos(i);
      let yy = y + r4 * sin(i);
      let p = res(xx, yy);
      vertex(p.x, p.y);
    }
    endShape(CLOSE);

    /////
    let r3 = d * 0.55;
    beginShape();
    fill(234, 73, 138); //fuxia
    for (let i = 0; i < TWO_PI; i += TWO_PI / 360) {
      let xx = x + r3 * cos(i);
      let yy = y + r3 * sin(i);
      let p = res(xx, yy);
      vertex(p.x, p.y);
    }
    endShape(CLOSE);

    //////
    let r = d * 0.5;
    beginShape();
    fill(50); //negro
    for (let i = 0; i < TWO_PI; i += TWO_PI / 360) {
      let xx = x + r * cos(i);
      let yy = y + r * sin(i);
      let p = res(xx, yy);
      vertex(p.x, p.y);
    }
    endShape(CLOSE);

    /////
    let r2 = d * 0.35;
    beginShape();
    fill(237, 177, 0); //amarillo

    for (let i = 0; i < 10; i += TWO_PI / 10) {
      let xx = x + r2 * cos(i);
      let yy = y + r2 * sin(i);
      let p = res(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape();
  }

  function res(x, y) {
    let p = createVector(x, y);
    let scl = 0.0001;
    let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 200;
    let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 50;
    p.x += cos(ang) * off;
    p.y += sin(ang) * off;
    return p;
  }

}

mover (){
  this.dir += random (-30,30);
   this.x = this.x + this.vel*cos (radians (this.dir));
   this.y = this.y + this.vel*sin (radians (this.dir));
  
   if (this.x >= width - this.d/2) {
    this.x -= 30;
  }
  
  if (this.x >= width + 200) {
    this.x -= 200;
  }
  
  if (this.x < 0 + this.d/2) {
    this.x += 30;
  }
  
  
  if (this.x < -200) {
    this.x += 200;
  }
  
  
  if (this.y > height - this.d/2) {
    this.y -= 30;
  }
  
  if (this.y > height - 200) {
    this.y -= 200;
  }
  
  if (this.y < 0 + this.d/2) {
    this.y += 30;
  }
  
  if (this.y < 0 + 200) {
    this.y += 200;
  }
  
  }
}