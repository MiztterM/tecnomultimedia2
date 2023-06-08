let circulos = [];
let mic;
let amp;
let IMPRIMIR = true;

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  mic = new p5.AudioIn();
  mic.start();
  
  for (let i = 0; i < 5; i++) {
    circulos[i] = new Circulo(random(20,width-50), random(10,height-50), random(10,60), 1, 0);
  }

}

function draw() {
  fill(5);
  background(122, 196, 170); //celeste
  strokeWeight(0.1);
  amp = mic.getLevel();
  if (IMPRIMIR){
    printData();
  }

  for (let i = 0; i < circulos.length; i++) {
    circulos[i].dibujar();
    circulos[i].mover();
    circulos[i].vel = circulos[i].vel + amp*30;

    if (circulos[i].vel >= 2){
      circulos[i].vel = circulos[i].vel - 1.2;
    } else {}
  }
}


function printData(){
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp*30;
  text(texto, 20, 20);
  pop();
}