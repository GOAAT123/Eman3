const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var emanImg, eman;
var ground;
var lifeCount=2;

function preload(){
  emanImg=loadAnimation("PNG/eman1.png", "PNG/eman2.png", "PNG/eman3.png", "PNG/eman4.png", "PNG/eman5.png", "PNG/eman6.png", "PNG/eman7.png", "PNG/eman8.png");
  backgroundImg=loadImage("PNG/city.png");
  copImg=loadAnimation("PNG/cop.png", "PNG/cop2.png", "PNG/cop3.png", "PNG/cop4.png", "PNG/cop5.png", "PNG/cop6.png", "PNG/cop7.png", "PNG/cop8.png");
  groundImg=loadImage("PNG/ground.jpg");
  heartImg=loadImage("PNG/heart.png");
}

var gameState="play";

function setup() {
  createCanvas(1300,500);

  ground=createSprite(10, 670, 4000, 3000);
  ground.addImage("ground", groundImg);
  ground.x=ground.width/2;
  ground.velocityX=-6;
  ground.scale=5;

  eman=createSprite(110, 390, 50, 50);
  eman.addAnimation("emanAnimation", emanImg);
  eman.scale=1.5;

  heart=createSprite(50, 50, 20, 20);
  heart.addImage("life", heartImg);
  heart.scale=0.1;

  copGroup = new Group();
}

function draw() {
  background(backgroundImg);  

  if(copGroup.isTouching(eman)){
   heart.destroy();
   cop.velocityX=0;
  }

  if(keyDown("space")) {
    eman.velocityY = -12;
  }

  eman.velocityY = eman.velocityY + 0.8;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }


  
  eman.collide(ground);

  spawnCop();
  drawSprites();
}

function spawnCop() {
  if(frameCount % 300 === 0) {
    cop=createSprite(1000, 370, 50, 50);
    cop.addAnimation("copAnimation",copImg);
    cop.scale=1.1;
    cop.velocityX=-5;
    copGroup.add(cop);
  }}