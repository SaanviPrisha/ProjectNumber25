const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var box1, box2, box3, ground;
var trashcan;

function preload() {
    trashcan = loadImage("TrashcanImage.png")
}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paperBall = new Paper(50, 220);
    box1 = new Trashcan(600, 650, 150, 30);
    box2 = new Trashcan(520,620,20,100);
    box3 = new Trashcan(650,620,20,100);
    
    ground = new Trashcan(400, 670, 800, 40);
}

function draw() {
  rectMode(CENTER);
  background(48, 199, 166);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER)
  image(trashcan, 580, 550, 200, 200)
  paperBall.display();
  ground.display();
}
function keyPressed() {
    if(keyCode == 38) {
        Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x: 60, y:-60});
    }
}
