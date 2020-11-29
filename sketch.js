const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,ball,ground1;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	basket1 = new Basket(1200,650);

	ground1 = new Ground(width/2,670,width,20);

	ball = new Paper(200,450,70);

	 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  basket1.display();
  //basket2.display();
  //basket3.display();
  ball.display();
  ground1.display();
  //keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-145})
	}
}

