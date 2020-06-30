
var bullet,wall ;
var speed,weight;
function setup() {
  createCanvas(1200,600);
  bullet = createSprite(50, 200, 100, 70);
  wall=createSprite(900,200,60,height/2)
  speed=random(54,96)
  weight=random(47,50)
  wall.shapeColor= (80,80,80);
  wall.visible = true;
  
  bullet.velocityX = speed;
  
  if(wall.x-bullet.x<bullet.width+wall.width/2)
  {
    bullet.velocityX = 0;
  var deformation = 0.5*weigth*speed*speed/22500
  if (deformation>180){
  

  

    bullet.shapeColor = color("red");
  }
}

if(deformation<100){}

bullet.shapeColor= color("red")}


  
function draw() {
  background(0);
  
  if(bullet.isTouching(wall)){
    bullet .velocityX = 0;
    bullet.shapeColor = color("green")
  }

    
  

  
  


  drawSprites();
  
}