var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var BG
var conSpriteBot
var conSpriteR
var conSpriteL
var conSpriteINV
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	BG=loadImage("backG.jpeg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 conSpriteBot=createSprite(width/2,640,200,20)
	 conSpriteBot.shapeColor="brown"
bottemBase=Bodies.rectangle(width/2,640,200,20, {isStatic:true} );
World.add(world,bottemBase)

conSpriteR=createSprite(500,600,20,100)
	 conSpriteR.shapeColor="brown"
Right=Bodies.rectangle(500,600,20,100, {isStatic:true} );
World.add(world,Right)


conSpriteL=createSprite(300,600,20,100)
	 conSpriteL.shapeColor="brown"
left=Bodies.rectangle(300,600,20,100, {isStatic:true} );
World.add(world,left)

conSpriteINV=createSprite(400,620,200,20)
	 conSpriteINV.visible=false
left=Bodies.rectangle(400,620,20,100, {isStatic:true} );
World.add(world,left)



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BG);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



