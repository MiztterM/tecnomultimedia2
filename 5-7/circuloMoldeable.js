class Circulo {
  
    constructor(x, y, d) {
      this.x = x;
      this.y = y;
      this.d = d;
    }
  
    dibujar() {
     miCirculo(this.x, this.y, this.d);
  
    function miCirculo(x, y, d) {
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
    }
  
    function res(x, y) {
      let p = createVector(x, y);
      let scl = 0.001;
      let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 40;
      let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 40;
      p.x += cos(ang) * off;
      p.y += sin(ang) * off;
      return p;
    }
  }
  
  }