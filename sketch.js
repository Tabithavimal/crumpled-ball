
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbinObj1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);

    paperSprite=createSprite(200,645,30,30)
	paperSprite.shapeColor="green"

	//dustbinObj1=new Dustbin(200,40,80,100)

	engine = Engine.create();
	world = engine.world;


	
	
	
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
 
 
 
  drawSprites();
 // dustbinObj1.display();
}
function keyPreessed(){

	if( keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	
	
	}
	
	
	
	
	 }
	 


