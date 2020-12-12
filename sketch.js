const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  
  roof1=new roof(300,75,70,20);
  roof2=new roof(370,75,70,20);
  roof3=new roof(440,75,70,20);
  roof4=new roof(510,75,70,20);
  roof5=new roof(580,75,70,20);
  roof6=new roof(650,75,70,20);
 
  b1=new bob(300,250,10);
  b2=new bob(370,250,10);
  b3=new bob(440,250,10);
  b4=new bob(510,250,10);
  b5=new bob(580,250,10);
  b6=new bob(650,250);

  r1=new rope(roof1.body,b1.body);
  r2=new rope(roof2.body,b2.body);
  r3=new rope(roof3.body,b3.body);
  r4=new rope(roof4.body,b4.body);
  r5=new rope(roof5.body,b5.body);
  r6=new rope(roof6.body,b6.body);

	Engine.run(engine);
  }

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();

  roof1.display();  
  roof2.display();  
  roof3.display();   
  roof4.display(); 
  roof5.display();  
  roof6.display();  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  keyPressed1();
}

//function keyPressed(){
	//if (keyCode===UP_ARROW){
		//Matter.Body.applyForce(b1.body,b1.body.position,{x:10,y:-20});
//	}
 //}

 function keyPressed1(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:20,y:20});
	}
 }