
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob0,bob1,bob2,bob3,bob4,bob5,bob6,roofObject;
var rope0,rope1,rope2,rope3, rope4,rope5,rope6;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,100,800,20);
	sidebar=new roof(width/2+300,height/2,20,500);
	sidebar2=new roof(width/2-300,height/2,20,500);
	ground=new roof(width/2,height/2+250,1600,200);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob0=new bob(width/2-120,height/2,bobDiameter);
	bob1=new bob(width/2-80,height/2,bobDiameter);
	bob2=new bob(width/2-40,height/2,bobDiameter);
	bob3=new bob(width/2,height/2,bobDiameter);
	bob4=new bob(width/2+40,height/2,bobDiameter);
	bob5=new bob(width/2+80,height/2,bobDiameter);
	bob6=new bob(width/2+120,height/2,bobDiameter);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 2200,
	    height: 1700,
	    wireframes: false
	  }
	});

	rope0=new rope(bob0.body,roofObject.body,-bobDiameter*3, 0)
	rope1=new rope(bob1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bob2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roofObject.body,bobDiameter*2, 0)
	rope6=new rope(bob6.body,roofObject.body,bobDiameter*3, 0)

	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
  sidebar.display();
  sidebar2.display();
  ground.display();

  rope0.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  bob0.display();	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob0.body,bob0.body.position,{x:-25,y:-22});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




