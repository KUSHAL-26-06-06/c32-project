  
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World; 
const Constraint = Matter.Constraint;

var Box1,Box2,Box3;
var Box4,Box5,Box6;
var Box7,Box8,Box9;
var ground,canvas,polygon;
var engine,world;
var score;


function setup() {
  canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world; 
  

  var options = {
    isStatic:true
  }

  polygon=Bodies.circle(50,200,50,options);
  World.add(world,polygon);

  Box1=new Box(330,235,30,40);
  Box2=new Box(360,235,30,40);
  Box3=new Box(390,235,30,40);
  Box4=new Box(420,235,30,40,);
  Box5=new Box(450,235,30,40);
  Box6=new Box(360,195,30,40);
  Box7=new Box(390,195,30,40);
  Box8=new Box(420,195,30,40);
  Box9=new Box(390,145,30,40);   

  slingshot =new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(0); 
  Engine.update(engine);
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();

  Box1.score();
  Box2.score();
  Box3.score();
  Box4.score();
  Box5.score();
  Box6.score();
  Box7.score();
  Box8.score();
  Box9.score();


  Text("SCORE:"+score,750,40);
 
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  score(){
  if(this.visibility<0&&this.visibility>-105){
    score++;
     }
  }
}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();  

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
