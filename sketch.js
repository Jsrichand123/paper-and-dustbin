
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,db1,db2,db3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    //creating sprites 
  //paper = createSprite(200,345,30,30);
 // db1 = createSprite(930,310,20,100);
 // db2 = createSprite(1070,310,20,100);
  //db3 = createSprite(1000,350,130,20);
  
 // groundSprite=createSprite(width/2, height-35, width,10);
  //groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	//Createing the Bodies
	//paper = Bodies.circle(100 , 345 , 30, {restitution:0.4, isStatic:true}); 
	//World.add(world, paper);

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} ); 
	//World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}

