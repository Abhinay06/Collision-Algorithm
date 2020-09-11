var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,20,10);
  movingRect=createSprite(300,270,10,20);

  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";

}

function draw() {
  background(0,0,0);  

   movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;


  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="blue";
  }
  else{
      fixedRect.shapeColor="yellow";
     movingRect.shapeColor="yellow";
  }


  

  drawSprites();
}