var moving, fixed


function setup() {
  createCanvas(800,400);
  moving=createSprite(100,100,50,50)
  moving.shapeColor="red"

  fixed=createSprite(300,150,50,50)
  fixed.shapeColor="red"
}

function draw() {
  background(0);  
moving.x=mouseX
moving.y=mouseY

if(moving.x-fixed.x < moving.width/2+fixed.width/2
   && fixed.x-moving.x < moving.width/2+fixed.width/2
   
   && fixed.y-moving.y < moving.height/2+fixed.height/2
   && moving.y-fixed.y < moving.height/2+fixed.height/2){
  
   fixed.shapeColor="green"
   moving.shapeColor="blue"}

   else{
     fixed.shapeColor="red"
     moving.shapeColor="red"
   }


  drawSprites();
}