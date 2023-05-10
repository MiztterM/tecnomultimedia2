class Bacterias {

  Bacteria [] bichito = new Bacteria[4];
  boolean vida = true;

  Bacterias () {
    for (int i = 0; i < 4; i++ ) {
      bichito [i] = new Bacteria ();
    }
  }

  void activar () {

    for (int i = 0; i < 4; i++ ){
    bichito [i]. dibujarCapa1 ();
    bichito [i]. mover ();
    
    }
    for (int i = 0; i < 4; i++ ){
    bichito [i]. dibujarCapa2 ();
    }
  }
}
