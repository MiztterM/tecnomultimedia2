let circulos = [];

let miVelocidadYDireccion; // INTERACTIVIDAD

function setup() {
  createCanvas(1000, 700);
  frameRate(60);

  for (let i = 0; i < 5; i++) {
    circulos[i] = new Circulo(random(20,width-50), random(10,height-50), random(10,190), 2, 0);
  }

  miVelocidadYDireccion = new Dir_y_Vel(); // INTERACTIVIDAD
}

function draw() {
  fill(5);
  background(122, 196, 170); //celeste
  strokeWeight(0.1);


  miVelocidadYDireccion.calcularTodo(mouseX, mouseY); // INTERACTIVIDAD 
  var velocidad = miVelocidadYDireccion.velocidad()/750; // INTERACTIVIDAD pitch (AGUDO O GRAVE)


  for (let i = 0; i < circulos.length; i++) {
    circulos[i].dibujar();
    circulos[i].mover();
    circulos[i].vel = circulos[i].vel + velocidad;


    if (circulos[i].vel >= 2){
      circulos[i].vel = circulos[i].vel - 0.2;
    } else {}
  }

}

function mousePressed() {
  circulo1.vel++;
}


class Dir_y_Vel {

  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.prevPosX;
    this.prevPosY;
    this.miDireccionX;
    this.miDireccionY;
    this.vel;
    this.miDireccionPolar;
  }

  calcularTodo(mi_X, mi_Y) {
    this.prevPosX = this.posX;
    this.prevPosY = this.posY;
    this.posX = mi_X;
    this.posY = mi_Y;

    this.miDireccionX = this.posX - this.prevPosX;
    this.miDireccionY = this.posY - this.prevPosY;
    this.miDireccionPolar = degrees(atan2(this.posY - this.prevPosY, this.posX - this.prevPosX));

    this.vel = dist(this.posX, this.posY, this.prevPosX, this.prevPosY);
  }

  velocidad() {
    return this.vel;
  }
  direccionX() {
    return this.miDireccionX;
  }

  direccionY() {
    return this.miDireccionY;
  }


  direccionPolar() {
    return this.miDireccionPolar;
  }
}