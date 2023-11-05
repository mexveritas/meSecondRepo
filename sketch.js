let system;
let gravity;

function setup() {
  createCanvas(600, 500);
  system = new ParticleSystem(createVector(width / 2, 250));
  
  gravity = createVector(0, 0.05);
}

function draw() {
  background(20);
  system.addParticle();
  system.run(); //run for all particle, check dead
  
  if (mouseIsPressed) {
  let wind = createVector(0.2, 0);
  system.add(wind);
  }
  
  system.add(gravity);
}