
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5,Roof;
var r1,r2,r3,r4,r5;
var world;

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(width/2,height/4,width/7,20)
	bobDiameter = 40
	startBobPositionX = width/2
	startBobPositionY = height/4 +500
	b1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	b2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
    b3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	b4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	b5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	r1  = new rope (b1.body,Roof.body,-bobDiameter*2,0)
	r2  = new rope (b2.body,Roof.body,-bobDiameter*1,0)
	r3  = new rope (b3.body,Roof.body,0,0)
	r4  = new rope (b4.body,Roof.body,bobDiameter*1,0)
	r5  = new rope (b5.body,Roof.body,bobDiameter*2,0)
	Engine.run(engine);
  

  

}


function draw() {
  
  background("white");
  Roof.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()



  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
	}
}
function drawLine(Constraint){
	bobBodyPosition = Constraint.bodya.position
	roofBodyPosition = Constraint.bodyb.position
	roofBodyOffset = Constraint.pointb
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)
}