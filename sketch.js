
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var bob1,bob2,bob3,bob4,bob5;
var roof,sup1,sup2,sup3,sup4,rope1,rope2,rope3,rope4;

function setup(){
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 	//Create the Bodies Here.
	 roof=new Roof(400,150,250,20)
	 bob1=new Bob(400,297,35)
	 bob2=new  Bob(365,297,35)
	 bob3=new Bob(435,297,35)
	 bob4=new Bob(470,297,35)
	 bob5=new Bob(330,297,35)
   
	 sup1=new Roof(365,150,5,5);
	 sup2=new Roof(435,150,5,5);
	 sup3=new Roof(470,150,5,5);
	 sup4=new Roof(330,150,5,5);
   
	 rope1=new Rope(roof.body,bob1.body);
	 rope2=new Rope(sup1.body,bob2.body);
	 rope3=new Rope(bob3.body,sup2.body);
	 rope4=new Rope(bob4.body,sup3.body);
	 rope5=new Rope(bob5.body,sup4.body);
   
	   Engine.run(engine);
	 
   }
   
   
   function draw() {
	 rectMode(CENTER);
	 background(220);
	 
	 bob1.display()
	 bob2.display()
	 bob3.display()
	 bob4.display()
	 bob5.display()
	 roof.display()
	 rope1.display()
	 rope2.display()
	 rope3.display()
	 rope4.display()
	 rope5.display()
   
	 drawSprites();
	
   }
   
   function keyPressed(){
	if(keyCode===32){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-15,y:-15})
	}
  }
  