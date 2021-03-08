const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
var engine,world
var ball,ground


function setup() {
  createCanvas(800,400);
  background("red")
  engine=Engine.create();
  world=engine.world
  var option1={
    restitution:1
  }
  ball=Bodies.rectangle(400,200,10,15,option1);
  World.add(world,ball)
  var option={
    isStatic:true
  }
ground=Bodies.rectangle(400,390,800,15,option);
  World.add(world,ground)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 rectMode(CENTER);
 rect(ball.position.x,ball.position.y,10,15)
 rect(ground.position.x,ground.position.y,800,15)
}