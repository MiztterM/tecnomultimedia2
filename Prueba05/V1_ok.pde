ArrayList<Circulo> circulos;

void setup() {
  size(400, 400);
  
  circulos = new ArrayList<Circulo>();
  
  for (int i = 0; i < 6; i++) {
    float x = random(width);
    float y = random(height);
    float diametro = random(20, 50);
    float velocidadX = random(-2, 2);
    float velocidadY = random(-2, 2);
    Circulo circulo = new Circulo(x, y, diametro, velocidadX, velocidadY);
    circulos.add(circulo);
  }
}

void draw() {
  background(255);
  
  for (int i = 0; i < circulos.size(); i++) {
    Circulo circuloA = circulos.get(i);
    
    circuloA.actualizar();
    circuloA.rebotar();
    circuloA.dibujar();
    
    for (int j = i + 1; j < circulos.size(); j++) {
      Circulo circuloB = circulos.get(j);
      
      if (circuloA.seTocan(circuloB)) {
        circuloA.invertirDireccion();
        circuloB.invertirDireccion();
      }
    }
  }
  
    loadPixels();
  
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int index = x + y * width;
      float sum = 0;
      
      for (Circulo circulo : circulos) {
        float d = dist(x, y, circulo.x, circulo.y) - circulo.diametro /2 ;
        sum += 10 * circulo.diametro / d;
        
        if (sum <= 50) { 
          pixels[index] = color(35, 41, 41); // negro    

          if (sum < 40) { 
            pixels[index] = color(233, 72, 135); // fucsia
          }  

          if (sum < 35) { 
            pixels[index] = color(236, 99, 63); // naranja
          }

          if (sum < 30) { 
            pixels[index] = color(59, 155, 169); // celeste oscuro
          } 

          if (sum < 25) { 
            pixels[index] = color(114, 193, 167); // celeste
          }

          if (sum < 20) { 
            pixels[index] = color(227, 208, 156); // crema
          }

          if (sum <= 15) { 
            pixels[index] = color(114, 193, 167); // celeste
          }
        } else { 
          pixels[index] = color(232, 174, 0); // amarillo
        }
      }
    }
  }
  
  updatePixels();
  
}

class Circulo {
  float x;
  float y;
  float diametro;
  float velocidadX;
  float velocidadY;
  
  Circulo(float x, float y, float diametro, float velocidadX, float velocidadY) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
    this.velocidadX = velocidadX;
    this.velocidadY = velocidadY;
  }
  
  void actualizar() {
    x += velocidadX;
    y += velocidadY;
  }
  
  void rebotar() {
    if (x - diametro / 2 < 0 || x + diametro / 2 > width) {
      velocidadX *= -1;
    }
    if (y - diametro / 2 < 0 || y + diametro / 2 > height) {
      velocidadY *= -1;
    }
  }
  
  void invertirDireccion() {
    velocidadX *= -1;
    velocidadY *= -1;
  }
  
  boolean seTocan(Circulo otro) {
    float distancia = dist(x, y, otro.x, otro.y);
    float radioTotal = diametro / 2 + otro.diametro / 2;
    return distancia < radioTotal;
  }
   
  void dibujar() {
  //  ellipse(x, y, diametro, diametro);
  }
}
