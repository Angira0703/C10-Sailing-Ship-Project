var sea,ship;
var seaImg,shipImg;

function preload(){
  

  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-1.png", "ship-2.png");
 
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png");
 
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.25;
  

  
  
}

function draw() 

{
 
  

  


  sea.velocityX = -3;
  

  if(sea.x < 0){
 
    sea.x = 400;
    
  }

  if(keyDown(UP_ARROW)){
    ship.y = ship.y - 1
    ship.scale = 0.22

  }
  if(keyDown(DOWN_ARROW)){
    ship.y = ship.y + 1
    ship.scale = 0.28
    
  }

  

  

  

 
  drawSprites();
}