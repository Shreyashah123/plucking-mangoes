
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,launcher;
function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree=new Tree(450,450,400,400);
	mango1=new Mango(450,350,100,100);
	mango2=new Mango(400,380,100,100);
	mango3=new Mango(350,410,100,100);
	mango4=new Mango(500,390,100,100);
	mango5=new Mango(450,430,100,100);
	stone= new Stone(150,400,10,10)
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  
  image(boy,100,400,200,200);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  /*detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);*/
 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body.false);
	}
	}



