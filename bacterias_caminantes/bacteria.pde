class Bacteria {
  float x, y, t, dir, vel;
  boolean vida = true;

  Bacteria () {
    if (vida == true) {
      x = random (0 + 50, width - 50);
      y= random (0 + 50, height - 50);
      t = 10;
      //dir = 30;
      vel=1;
    }
  }

  void dibujarCapa1 () {
    if (vida == true) {
      t+=0.1;
      noStroke ();
      fill (#ea613b);
      ellipse (x, y, t, t);
    }
  }

  void dibujarCapa2 () {
    if (vida == true) {
      noStroke ();
      fill (#ec468a);
      ellipse (x, y, t/1.4, t/1.4);
    }
  }


  void mover () {
    if (vida == true) {
      dir += random (-30, 30);
      x = x+vel*cos(radians (dir));
      y = y+vel*sin(radians (dir));

      if (x >= width - t/2) {
        x -= 2;
      }

      if (x < 0 + t/2) {
        x += 2;
      }

      if (y > height - t/2) {
        y -= 2;
      }

      if (y < 0 + t/2) {
        y += 2;
      }
    }
  }

  void romper () {
    if (t >= 100) {
      vida = false;
    }
  }
}
