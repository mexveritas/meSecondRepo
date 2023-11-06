let system;
let gravity;

function setup() {
  createCanvas(800, 200);
  system = new ParticleSystem(createVector(50, 190));
  
  gravity = createVector(0, 0.05);
}

function draw() {
  background(0, 0, 120);
  system.addParticle();
  system.run();

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    system.add(wind);
  }
  system.add(gravity);
}


// function mouseClicked() {
//   let mpos = createVector(mouseX, mouseY);
//   let s = new ParticleSystem(mpos);
//   systems.push(s);
// }

// function mousePressed() {
//   let wind = createVector(0.2, 0);
//   system.applyForce(wind);
//   }
  
  // system.add(gravity);