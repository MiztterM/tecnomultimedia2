
function drawColorsBeige() {
    for (var i = 0; i < particles.length; i++) {  /// invento un stroke falso contorno
      strokeWeight(0.5)
      stroke(0)
      ellipse(particles[0 + i].body.position.x,particles[0 + i].body.position.y,particles[i].r * 4,particles[i].r * 4+1);
    }
    for (var i = 0; i < particles.length; i++) {   /// lo corrigo muy a lo indio pero creativo
        noStroke();
        fill(227, 208, 156); //beige
        ellipse(particles[0 + i].body.position.x,particles[0 + i].body.position.y,particles[i].r * 4,particles[i].r * 4);
      }
  }
  
  function drawColorsCeleste2() {
    for (var i = 0; i < particles.length; i++) {  
        strokeWeight(0.5)
        stroke(0)
        ellipse(particles[0 + i].body.position.x,particles[0 + i].body.position.y,particles[i].r * 3.1+1,particles[i].r * 3.2+1);
      }
      for (var i = 0; i < particles.length; i++) {  
          noStroke();
          fill(118, 188, 170); //celeste02
          ellipse(particles[0 + i].body.position.x,particles[0 + i].body.position.y,particles[i].r * 3.1,particles[i].r * 3.2);
        }
    }
    
    function drawColorsCeleste1() {
        for (var i = 0; i < particles.length; i++) {  
            strokeWeight(0.5)
            stroke(0)
            ellipse(particles[0 + i].body.position.x,
                particles[0 + i].body.position.y,
                particles[i].r * 2.8+1,
                particles[i].r * 2.9+1);
          }
          for (var i = 0; i < particles.length; i++) {  
              noStroke();
              fill(54, 162, 164); //celeste01
              ellipse(particles[0 + i].body.position.x,
                particles[0 + i].body.position.y,
                particles[i].r * 2.8,
                particles[i].r * 2.9);
            }
        }
  
  
        function drawColorsNaranja() {
            for (var i = 0; i < particles.length; i++) {  
                strokeWeight(0.5)
                stroke(0)
                ellipse(particles[0 + i].body.position.x,
                    particles[0 + i].body.position.y,
                    particles[i].r * 2.4+1,
                    particles[i].r * 2.3+1);
              }
              for (var i = 0; i < particles.length; i++) {  
                  noStroke();
                  fill(236, 102, 72); //NARANJA
                  ellipse(particles[0 + i].body.position.x,
                    particles[0 + i].body.position.y,
                    particles[i].r * 2.4,
                    particles[i].r * 2.3);
                }
            }
  
  