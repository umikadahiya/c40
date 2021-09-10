const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("background.png");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 400, 1300, 5);
  superhero= new Hero(400,3,100,100);
  //attach=new Throw(superhero.body,{x:100,y:465});
  box1 = new Block(900, 200, 40, 40);
  box2 = new Block(900, 200, 40, 40);
  box3 = new Block(900, 200, 40, 40);
  box4 = new Block(900, 200, 40, 40);
  box5 = new Block(900, 200, 40, 40);
  box6 = new Block(900, 200, 40, 40);
  box7 = new Block(800, 200, 40, 40);
  box8 = new Block(800, 200, 40, 40);
  box9 = new Block(800, 100, 40, 40);
  box10 = new Block(800, 200, 40, 40);
  box11 = new Block(800, 200, 40, 40);
  box12 = new Block(800, 200, 40, 40);
  box13 = new Block(800, 100, 40, 40);
  box14 = new Block(800, 200, 40, 40);
  box15 = new Block(700, 200, 40, 40);
  box16 = new Block(700, 200,40, 40);
  box17 = new Block(700, 100, 40, 40);
  box18 = new Block(700, 100, 40, 40);
  box19 = new Block(700, 100, 40, 40);
  box20 = new Block(700, 100, 40, 40);
  box21 = new Block(600, 100,40, 40);
  box22 = new Block(600, 100, 40, 40);
  box23 = new Block(600, 100, 40, 40);
  box24 = new Block(600, 100, 40, 40);
  box25 = new Block(600, 100, 40, 40);
  box26 = new Block(600, 100, 40, 40);
  monster = new Monster(380,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}
