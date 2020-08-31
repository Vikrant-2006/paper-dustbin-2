
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papaperObject,dustbin1,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   papperObject = new Papper(50,300,70);
   dustbin1= new Dustbin(520,620,20,100);
   dustbin2= new Dustbin(630,680,200,30);
   dustbin3= new Dustbin(730,620,20,100);
   ground = new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(papperObject.body,papperObject.body.position,{x:100,y:-100});

}
}


