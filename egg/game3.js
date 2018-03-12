void setup(){
	frameRate(60);
};

//BOARD SETUP
var eggs = [];
var eggPic = loadImage("egg.png");
var spotlightR = 0;

var egg = function(x,y){
    this.x = x;
    this.y = y;
    this.speedX = random(-2,2);
    this.speedY = random(0,8);
    this.rotation = random(0,360);
    this.rotationSpeed = random(0,2.0);
};
egg.prototype.run = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.7;
    this.speedY += 0.2
    this.rotation += this.rotationSpeed/3;
    this.rotationSpeed *= 0.99;
    if (this.y > screenWidth) {
        this.x = random(0,screenWidth);
        this.y = random(-100,-9000);
        this.speedX = random(-2,2);
        this.speedY = random(0,8);
        this.rotation = random(0,360);
        this.rotationSpeed = random(0,2.0);
    }
};

egg.prototype.draw = function() {
    pushMatrix();
    translate(this.x,this.y);
    rotate(this.rotation);
    imageMode(CENTER)
    image(eggPic, -screenWidth/20, -screenWidth/20, screenWidth/10, screenWidth/10);
    popMatrix();
};

for (var i = 0; i < 100; i++) {
    var tmp = new egg(random(0,screenWidth),random(-100,-9000));
    eggs.push(tmp);
}
console.log(eggs);
//FUNCTIONS
void draw() {
    spotlightR += 0.002
    size(window.innerWidth,window.innerHeight);
    background(255,205,0);
    pushMatrix();
    translate(screenWidth/2,screenHeight/2)
    noStroke();
    fill(255,225,0);
    rotate(spotlightR);
    for (var i = 0; i < 16; i++) {  
        triangle(0,0,0,-screenHeight*7,screenHeight * sin((((0)*2)+1) * PI/16),-screenHeight * cos((((0)*2)+1) * PI/16))
        rotate(PI/8)
    }
    popMatrix();
    for (var i = 0; i < 100; i++) {
        eggs[i].run();
        eggs[i].draw();
    }
    pushMatrix()
    translate(screenWidth/2,screenHeight/2)
    rotate(sin(spotlightR*50)/5)
    image(eggPic,-screenWidth/6,-screenWidth/6, screenWidth/3, screenWidth/3);
    popMatrix()
};