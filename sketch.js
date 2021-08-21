var object1,object2 ;



function setup() {
  createCanvas(800,400);
 object1 =  createSprite(400, 50, 50, 50);
object1.shapeColor = "green" ;
object2 = createSprite(400,300,50,50) ;
object2.shapeColor = "green" ;
bounceOff(object1,object2) ;
}

function draw() {
  background(0);  
 //object2.x = mouseX ;
 //object2.y = mouseY ;
 object1.velocityY = 2 ;
 object2.velocityY = -2 ; 
  drawSprites();
}
 function bounceOff(obj1,obj2) {
   if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2 ) {
      obj1.velocityX = obj1.velocityX * (-1) ;
      obj2.velocityX = obj2.velocityX * (-1) ;
    }
    if(obj1.y - obj2.y < obj1.height/2 + obj2.hieght/2
      && obj2.y - obj1.y < obj1.height/2 + obj2.width/2 ) {
        obj1.velocityY = obj1.velocityY * (-1) ;
        obj2.velocityY = obj2.velocityY * (-1) ;
      }

 }