//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;
var fruit;
var fruitImage;
var monster;
var monsterImage;
var fruitsGroup;
var monstersGroup;

function preload(){
  
  knifeImage = loadImage("knife.png");
  monsterImage=loadImage("alien1.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruitsGroup = new Group();
  monstersGroup = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  monsters();
    fruits();
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function monsters(){
  if(frameCount%80===0){
    monster=createSprite(600,random(100,500),10,10);
    monster.addImage(monsterImage);
    monster.velocityX=-8;
    monstersGroup.lifetime=100;
  }
  if(monstersGroup.isTouching(knife)){
    gameState=END;
  }
}
function fruits(){
  if(frameCount%80===0){
    fruit=createSprite(600,random(100,500),10,10);
    var num=Math.round(random(1,4));
    if(num===1){
      fruit.addImage(fruit1);
    }
    else if(num===2){
      fruit.addImage(fruit2);
    }
    else if(num===3){
      fruit.addImage(fruit3);
    }
    else {
      fruit.addImage(fruit4);
    }
    fruit.scale=0.2;
    fruit.velocityX=-8;
  }
  fruitsGroup.lifetime=100;
  if(fruitsGroup.isTouching(knife)){
    fruitsGroup.distroyEach();
    kinfeSwooshSound.play();
  }
  if(fruitsGroup.isTouching(knife)){
  fruitsGroup.distroyEach();
  score=score+2;
 }
}