var ship
var sea
function preload(){
sea = LoadAnimation ("sea.png");
ship = LoadAnimation ("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea =createSprites(200,200,200,200)
  ship =createSpites(210,200,30,20)
 
}

function draw() {
  background("blue");
  if(sea.x < 0){
sea.x = sea.width/2;

  }



 drawSprites();
  

 
}
