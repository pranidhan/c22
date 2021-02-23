const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;//namespace

var myengine,myworld;
var ground;
var ball;





function setup() {
  createCanvas(800,400);

 myengine = Engine.create();
 myworld = myengine.world;

 var ground_option ={
  isStatic:true,
 }

  ground=Bodies.rectangle(400,390, 800, 20,ground_option);
  World.add(myworld,ground);

console.log(ground);



var ball_options = {restitution: 1};


ball=Bodies.circle(400, 50, 20,ball_options); 
World.add(myworld,ball);




}

function draw() {
  background("black"); 
  Engine.update(myengine);

  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20) ;
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

 
}