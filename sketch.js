var fixed_rect,moving_rect;


function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200,200,50,80);
  fixed_rect.shapeColor = "blue";
  moving_rect = createSprite(400,200,80,30);
  moving_rect.shapeColor = "white";
}

function draw() {
  background(0,0,0); 

  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;

  if(moving_rect.x - fixed_rect.x <= fixed_rect.width/2 + moving_rect.width/2 &&
    fixed_rect.x - moving_rect.x <= moving_rect.width/2 + fixed_rect.width/2 &&
    moving_rect.y - fixed_rect.y <= fixed_rect.height/2 + moving_rect.height/2 &&
    fixed_rect.y - moving_rect.y <= fixed_rect.height/2 + moving_rect.height/2
    ){
    moving_rect.shapeColor = "blue";
    fixed_rect.shapeColor = "blue";

  }else {
    moving_rect.shapeColor = "red";
    fixed_rect.shapeColor = "red";
  }

  drawSprites();
}





