class Particle {
  
  constructor(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-0.5, 0.5), random(-3, -0.5));
  this.position = position.copy();
  this.lifespan = 255;
  this.w = random(0.1, 10);
  this.c = color(255, 255, 255, random(0, 255));
  }
  
  run() {
  this.update();
  this.display();
  }
  
  applyForce(aForce) {
    this.acceleration.add(aForce);
  }
  
  update() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2.5;
    
  this.acceleration = createVector(0, 0);
  }
  
  display() {
  stroke(200, this.lifespan);
  strokeWeight(0.5);
  fill(this.c, this.lifespan);
  ellipse(this.position.x, this.position.y, this.w, this.w);
  }
  
  isDead() {
  return this.lifespan < 0
  }
}