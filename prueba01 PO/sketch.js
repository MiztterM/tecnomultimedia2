let circulo;
let circulo2;
let circulo3;

  function setup() {
    createCanvas(600, 600);
    frameRate(30);
    circulo = new Circulo(random(50,width-50), random(50,height-50), random(50,100), 2, 0);
	circulo2 = new Circulo(random(50,width-50), random(50,height-50), random(50,100), 2, 0);
	circulo3 = new Circulo(random(50,width-50), random(50,height-50), random(50,100), 2, 0);
	
  }
  
  function draw() {
	fill(5);
	background(122, 196, 170); //celeste
 	strokeWeight(0.1);
	circulo.dibujar();
	circulo2.dibujar();
	circulo3.dibujar();
	circulo.mover();
	circulo2.mover();
	circulo3.mover();
  }