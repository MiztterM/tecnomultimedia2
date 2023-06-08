class mover{

    constructor(x, y, d, vel, dir) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.vel = vel;
        this.dir = dir;
      }

      mover (){
        this.dir += random (-30,30);
         this.x = this.x + this.vel*cos (radians (this.dir));
         this.y = this.y + this.vel*sin (radians (this.dir));
        
         if (this.x >= width - this.d/2) {
          this.x -= 100;
        }
        
        if (this.x < 0 + this.d/2) {
          this.x += 100;
        }
        
        if (this.y > height - this.d/2) {
          this.y -= 100;
        }
        
        if (this.y < 0 + this.d/2) {
          this.y += 100;
        }
        }



}