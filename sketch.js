let systems = [];
let gravity;

function setup() {
  createCanvas(800, 200);
  system = new ParticleSystem(createVector(width / 2, 250));
  
  gravity = createVector(0, 0.05);
}

function draw() {
  background(0, 0, 120);

  for (let s of systems) {
    s.addParticle();
    s.run();
  }
}

function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos);
  systems.push(s);
}

// if (mouseIsPressed) {
//   let wind = createVector(0.2, 0);
//   system.add(wind);
//   }
  
//   system.add(gravity);