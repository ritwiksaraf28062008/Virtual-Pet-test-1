//Create variables here
var dog, happyDog, database, foodS, foodStock , dogimg;

function preload()
{
  //load images here
  dogimg = loadImage("./images/dogImg.png");
  happyDog = loadImage("./images/dogImg1.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 50,displayHeight - 200);
  database = firebase.database();
  dog = createSprite(450,250,30,50);
  foodStock = database.ref('Food');
  foodStock.on("value" , readStock);
  dog.addImage( "normal" , dogimg);
  dog.scale = 0.3
       
}




  

function draw() { 
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW) && foodS>=0){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  if(keyWentUp(UP_ARROW) && foodS>=0){
    dog.addImage(dogimg);
  }

  drawSprites();  
  //add styles here
  textSize(30);
  fill("white");
  text(foodS , 250,50)

}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1
  }
  database.ref('/').update({
    Food : x
  })
}

function readStock(data){
  foodS = data.val();
}



