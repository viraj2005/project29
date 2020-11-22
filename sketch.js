const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  ground = new Ground(600,height,1200,20);

  block8 = new Box(330, 235, 30, 40)
  block9 = new Box(360, 235, 30, 40)
  block10 = new Box(390, 235, 30, 40)
  block11 = new Box(420, 235, 30, 40)
  block12 = new Box(450, 235, 30, 40)
  block13 = new Box(360, 195, 30, 40)
  block14 = new Box(390, 195, 30, 40)
  block15 = new Box(420, 195, 30, 40)
  block16 = new Box(390, 155, 30, 40)

  polygon = Bodies.circle(50, 200, 20)
  World.add(world, polygon)

  slingShot = new SlingShot(this.polygon, {x: 100, y: 200})
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}