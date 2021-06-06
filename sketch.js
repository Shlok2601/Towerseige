const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var  gameState="onSling"
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    block2= new Block(600,300,50,50);
    ground=new Ground(400,380,800,10)
    block1=new Block(600,200,50,50)
    platform=new Ground(600,340,200,10)
    block3=new Block(650,200,50,50)
    block4=new Block(550,200,50,50)
    

    polygon = Bodies.circle(200,100,50);
    World.add(world, polygon);
    slingshot=new SlingShot(polygon,{x:200,y:100})
}

function draw(){
    background(0);
    Engine.update(engine);
    block1.display();
    ground.display();
    platform.display();
    fill("red");
    block2.display();
    fill("blue");
    block3.display();
    fill("green");
    block4.display();
    fill("orange");
    slingshot.display();
    ellipseMode(RADIUS)
    ellipse(polygon.position.x,polygon.position.y,50,50)
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && polygon.speed<1){
        Matter.Body.setPosition(polygon,{x:200,y:50})
       slingshot.attach(polygon);
       gameState="onSling"
    }
}
