const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[]; 

var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;



  ground = new Ground(480,height,1200,20);


  //creating divisions
  for(var k=0;k<=innerWidth;k=k+80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }


  //creating rows of plinko
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new  plinko(j,75));
  }

  for(var i=15;i<=width-10;i=i+50)
  {
    plinkos.push(new plinko(i,175));
  }

 


  
  


}

function draw() {
  background(24,24,24);  
  Engine.update(engine);

  ground.display();


//creating particles
  if(frameCount%60===0)
  {
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }


  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++)
  {
    plinkos[j].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }


  drawSprites();
}