var bg,sleep,brush,gym,eat,drink,move,bath;
var austronaut
function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png" ,"images/move1.png");
}

function setup() {
  createCanvas(600,500);
  austronaut = createSprite(300,230)
  austronaut.addAnimation("sleeping",sleep);
  austronaut.scale= 0.1;
}

function draw() {
  background(bg);  
  
  textSize(20);
  fill("white");
  text("INSTRUCCIONES:",20,35);
  textSize(15);
  text("Flecha Hacia Arriba = Cepillarse",20,55);
  text("Flecha Hacia Abajo = Ejercitarse",20,70);
  text("Flecha Hacia Izquierda = Comer",20,85);
  text("Flecha Hacia Derecha = Bañarse",20,100);
  text("Tecla M = Moverse",20,115);

  edges = createEdgeSprites();
  austronaut.bounceOff(edges);

  if(keyDown("UP")){
    austronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    text("hola",200,200)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP")){
    austronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    text("mucho",200,200)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP")){
    austronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    text("gusto",200,200)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP")){
    austronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    text("hola",200,200)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP")){
    austronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    text("hola",200,200)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}