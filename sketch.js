const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground1, dustbin1, dustbin2, dustbin3, a = 0;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100, 530,60,60);

	ground1 = new Ground(width / 2, 690, width, 140);
	//dustbin1 = new wall(650, 610, 150, 20);
	dustbin2 = new wall(480, 530, 150, 200);
	//dustbin3 = new wall(550, 675, 20, 180);
	Engine.run(engine);
	
}


function draw() {
	//rectMode(CENTER);
	background("white");
	fill("navy")
   text("THROW THE TRASH IN BIN:)",300,250);
   textSize(34)
	keypressed();
	paper1.display();
	ground1.display();
	//dustbin1.display();
	dustbin2.display();
	//dustbin3.display();
}
function keypressed() {
	if (keyCode === UP_ARROW && a == 0) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 60, y: -150 });
		a = 1;
		
	}
}