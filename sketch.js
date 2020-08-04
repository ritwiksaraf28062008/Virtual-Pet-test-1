//Create variables here
var dog, happyDog, database, foodS, foodStock , dogimg;

function preload()
{
  //load images here
  dogimg = loadImage("./images/dogImg.png");
  happyDog = loadImage("./images/dogImg1.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database;
  dog = createSprite(450,250,30,50);
  foodStock = database.ref('Food');
  foodStock.on("value" , foodStock);
       
}




  

function draw() { 
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  

  drawSprites();  
  //add styles here
  text(foodStock , 250,50)

}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}



