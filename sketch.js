var bullet,bullet1,bullet2,bullet3,wall,wall1,wall2,wall3,thickness;
var speed,weight;
var line,line1,line2,line3;
var bulletRightEdge
var wallLeftEdge
function setup() {
  createCanvas(1600,800);
  speed = random(223,321)
  weight= random(32,52)
  thickness= random(22,83)

  bullet = createSprite(50,80,80,20);
  bullet.shapeColor =color("white");
  bullet.velocityX=speed;
  wall =createSprite(1500,80,thickness,100);
  wall.shapeColor=color(80,80,80);
  var line =createSprite(1000,150,2000,20);
  
  bullet1 = createSprite(1450,225,50,20);
  bullet1.shapeColor =color("yellow");
  wall1 =createSprite(1500,225,50,100);
  wall1.shapeColor=color(80,80,80);
  line1 =createSprite(1000,300,2000,20);

  bullet2 = createSprite(1450,370,50,20);
  bullet2.shapeColor =color("red");
  wall2 =createSprite(1500,370,50,100);
  wall2.shapeColor=color(80,80,80);
  line2 =createSprite(1000,450,2000,20);

  bullet3 = createSprite(1450,515,50,20);
  bullet3.shapeColor =color("green");
  wall3 =createSprite(1500,515,50,100);
  wall3.shapeColor=color(80,80,80);
  line3 =createSprite(1000,600,2000,20);
  
}

function draw() {
  background(0,0,0);  


  


function hasCollided(lbullet,lwall)
{
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true

  }
  return false;
}

if(hasCollided(bullet,wall))
{
  
  if(damage>10)
  {
    
  
    wall.shapeColor = color("green");
  }

  if(damage<10)
  {
    bullet.velocityX=0;
    wall.shapeColor =color("red");
    
  }
}
drawSprites();

}