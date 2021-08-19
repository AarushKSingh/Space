var dock = false


function preload(){
  iss = loadImage("images/iss.png")
  bg = loadImage("images/spacebg.jpg")
  s1 = loadImage("images/spacecraft1.png")
  s2 = loadImage("images/spacecraft2.png")
  s3 = loadImage("images/spacecraft3.png")
  s4 = loadImage("images/spacecraft4.png")  
}




function setup() {
  createCanvas(1000,600);
  spacecraft = createSprite(285, 240 , 50, 50);
  spacecraft.addImage(s1)
  spacecraft.scale = 0.3
  satelite = createSprite(330,130,50,50)
  satelite.addImage(iss)


  
}

function draw() {
  background(bg);  
  if(!dock){
    spacecraft.x = spacecraft.x + random(-1,1)
  }
  if(keyDown(UP_ARROW)){
   spacecraft.y = spacecraft.y-1
   spacecraft.addImage(s2)
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y+1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+1
    spacecraft.addImage(s4)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x-1
    spacecraft.addImage(s3)
  }
  if(spacecraft.y <=(satelite.y+70) && spacecraft.x <= (satelite.x-10)){
   dock = true
   textSize(25)
   fill("white")
   text ("Docking Successful!", 500, 300)


  }
  drawSprites();
}