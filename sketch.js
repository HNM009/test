
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40)
}

function draw() 
{
  background(30);
  
  if (keyDown("w")){
    box.y = box.y - 10
  }
  if (keyDown("a")){
    box.x = box.x - 10
  }
  if (keyDown("d")){
    box.x = box.x + 10
  }
  if (keyDown("s")){
    box.y = box.y + 10
  }
  drawSprites();
}




