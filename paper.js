class paper {
  constructor(x, y, r) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.width=width;
      this.height=height
    
      this.image=loadImage("images/paper.png");
      this.body = Bodies.circle(this.x, this.y, this.r / 2, options);
      World.add(world, this.body);
  }
  display() {
      var pos1 = this.body.position;
      push();
      translate(pos1.x, pos1.y);
      imageMode(CENTER);
      
      image(this.image,0,0,this.r,this.r);
      
     // fill(255, 255, 255);
     // ellipse(0, 0, this.r, this.r);
      pop();
  }
}