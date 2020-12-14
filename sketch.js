var ground;
var paperObject;
var trash1,trash2,trash3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	 trash1 =new Trash(650,height - 50,200,20);
	 trash2 = new Trash(550,620,20,100);
	 trash3 =new Trash(740,620,20,100);

	 paperObject=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  trash1.display();
   trash2.display();
   trash3.display();
   paperObject.display();
   ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});
	   
	}
   }