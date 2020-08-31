class Dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.dustbin1= loadImage("sprites/dustbingreen.png");
      this.dustbin2= loadImage("sprites/dustbingreen.png");
      this.dustbin3= loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      image(this.dustbin1,620,520);
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };