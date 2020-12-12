class bob {
    constructor(x, y,radius) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2,
        isStatic:false
      }
      this.width = 70;
      this.height = 70;
      this.radius=10;
      
this.body = Bodies.circle(x, y,this.radius, options);
      
      //this.velocityX=2;
      //this.image = loadImage("unnamed.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.velocityX=2;
      push();
      translate(pos.x, pos.y);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      fill("orange");
      //circleMode(CENTER);
      ellipse(0,0,this.height, this.width);
      pop();
    }
  };