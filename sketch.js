var bathing;
var eating;
var workout;
var sleeping;
var brushing;
var drinking;
var backgroundImg;
var moving;
var astronaut;


function preload(){
 bathing = loadAnimation('bath1.png','bath1.png','bath1.png','bath2.png','bath2.png','bath2.png');
 backgroundImg = loadImage('iss.png');
 eating = loadAnimation('eat1.png','eat1.png','eat1.png','eat2.png','eat2.png','eat2.png');
 workout = loadAnimation('gym1.png','gym1.png','gym2.png','gym2.png');
 sleep = loadImage('sleep.png');
 moving = loadAnimation('move.png','move.png','move1.png','move1.png',);
 brushing = loadImage('brush.png');
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230,50,50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.08;
}

function draw() {
  background(backgroundImg);  
  textSize(20);
  fill("white");
  text("instructions:",20,30);

  textSize(15);
  text("Up Arrow = Brushing",20,45);
  text("Down Arrow = WorkingOut",20,60)
  text("Right Arrow = Bathing",20,75);
  text("Left Arrow = Eating",20,90);
  text("m key = Moving",20,105);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brushing);
    astronaut.changeAnimation("brush");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("working_Out",workout);
    astronaut.changeAnimation("working_Out");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eating);
    astronaut.changeAnimation("eat");
    astronaut.y = 350;
    astronaut.x = 150
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",bathing);
    astronaut.changeAnimation("bath");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("move",moving);
    astronaut.changeAnimation("move");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);


}