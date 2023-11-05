class Particle {
  
  constructor(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-3, 0));
  this.position = position.copy();
  this.lifespan = 255;
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
  strokeWeight(1);
  fill(180, this.lifespan);
  ellipse(this.position.x, this.position.y, 15, 15);
  }
  
  isDead() {
  return this.lifespan < 0
  }
}