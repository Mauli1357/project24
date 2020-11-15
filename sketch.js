
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,600,20);
	trash1 = new Trash(500,600,20,100);
	trash2 = new Trash(680,600,20,100);
	trash3 = new Trash(590,660,200,20);
	ground1 = new Ground(400,680,800,22);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  trash1.display();
  trash2.display();
  trash3.display();
  ground1.display();
  drawSprites();
 
}

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper1.body, paper1.body.position,{x: 96, y:-46});


	 }

 }

