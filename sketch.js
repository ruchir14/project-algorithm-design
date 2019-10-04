var frect,mrect;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(200,200,50,80);
  mrect = createSprite(400, 200, 80, 30);
  frect.shapeColor = "green";
  mrect.shapeColor = "green";

  mrect.velocityY=-5;
  frect.velocityY= 5;
  
}

function draw() {
  background(0);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;  

  if (mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2){
      mrect.velocityX=mrect.velocityX*(-1);
      frect.velocityX=frect.velocityX*(-1);
    }
    if( mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
      mrect.velocityY=mrect.velocityY*(-1);
      frect.velocityY=frect.velocityY*(-1);
    }
   /* frect.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else {
    frect.shapeColor = "green";
    mrect.shapeColor = "green";
  }*/
  drawSprites();
}