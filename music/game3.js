void setup(){
    size(2750,1350);
    frameRate(600);
    loop()
    introFrame = 0;
    imageFlip = 0;
};


//BOARD SETUP
//var frame = -100
//var tillvit = ["t","ti","til","till","tillv","tillvi","tillvit"];
//var songName = "Mal";
//var author = "Tillvit";
//var snowClones = [];
//var bars = 200;
//var barColor = "881100"
//var fbctotal = 0;
//
//for(var i = 0; i < bars; i++){
//    var tmp = [-((Math.random()*100)),(Math.random())*100,(Math.random()-0.5)*4,(Math.random()-0.5)*4];
//    snowClones.push(tmp);
//}

var img = loadImage("");


var img2 = loadImage("tillvit.png");
var entr = 0;
var fps = 0;
var check = second();

//FUNCTIONS

textFont(createFont("Prototype"),1);
textAlign(RIGHT,CENTER);
imageMode(CENTER);

void draw() {
    background(0,0,0);
    if (fbc_array != undefined) {
        strokeWeight(0);
        noStroke();
        for (var i = 0; i < bars; i++) {
            fill(255,255,255);
            noStroke();
            if (style[3] == true) {
                rect(snowClones[i][0],snowClones[i][1],3,3);
            }
        }
        if (style[0] == true) {
            threshold = (((fbctotal/bars) + fbcminimum)/2);
            for (var i = 0; i < bars; i++) {
                if (style[0] == true) {
                         if (style[2] == true) {
                    fill(((barColor[0]*16)+barColor[1]*1)*(1/(255/(fbc_array[i])))*(1/(255/(fbc_array[i]))*(1/(255/(fbc_array[i])))),((barColor[2]*16)+barColor[3]*1)*(1/(255/(fbc_array[i])))*(1/(255/(fbc_array[i]))*(1/(255/(fbc_array[i])))),((barColor[4]*16)+barColor[5]*1)*(1/(255/(fbc_array[i])))*(1/(255/(fbc_array[i])))*(1/(255/(fbc_array[i]))));
                }else{
                    fill((barColor[0]*16)+barColor[1]*1,(barColor[2]*16)+barColor[3]*1,(barColor[3]*16)+barColor[4]*1)
                }
                //rect(i * 2750/bars,750-(fbc_array[i]*2.2),2750/bars * 0.7,fbc_array[i]*2.2);
                if ((561*(fbc_array[i]-threshold)/(255-threshold)) < 0){
                }else{
                    rect(i * 2750/bars,750-(561*(fbc_array[i]-threshold)/(255-threshold)),2750/bars * 0.7,(561*(fbc_array[i]-threshold)/(255-threshold)));
                }
                /*fill(255,255,255);
                rect(0,750-(561*threshold/255),2750,10)*/
                }
            }
        }
        if (style[1] == true) {
            noFill();
            smooth();
            strokeWeight(10.0);
            strokeJoin(ROUND);
            stroke(((barColor[0]*16)+barColor[1]*1),((barColor[2]*16)+barColor[3]*1),((barColor[4]*16)+barColor[5]*1));
            beginShape();
            for (var i = 0; i < bars; i++) {
                if(i == 0 || i == bars-1){
                    var x = (fbc_array[i]);
                }
                else{
                    var x = ((fbc_array[i]) + (fbc_array[i-1]) + (fbc_array[i+1]))/3;
                }
                vertex(i * 2750/bars,750-(x*2.3)*(threshold/255))
            }
            endShape();
        }
        stroke(((barColor[0]*16)+barColor[1]*1),((barColor[2]*16)+barColor[3]*1),((barColor[4]*16)+barColor[5]*1));
        line(0,750,2750,750);
        fill(255);
        textSize(150-songName.length);
        text(songName,2600,950);
        textSize(100);
        text(author,2600,1100);
        if (style[4] == true) {
            if (imageFlip < 600){
                if (imageFlip < 10){
                    image(img, 250, 1000, imageFlip*40, 400);
                }else if (imageFlip > 590){
                    image(img, 250, 1000, 400-((imageFlip-590)*40), 400);
                }else{
                    image(img, 250, 1000, 400, 400);
                }
            }else if (imageFlip >= 600 && imageFlip < 1200){
                if (imageFlip < 610){
                    image(img2, 250, 1000, (imageFlip-600)*40, 400);
                }else if (imageFlip > 1190){
                    image(img2, 250, 1000, 400-((imageFlip-1190)*40), 400);
                }else{
                    image(img2, 250, 1000, 400, 400);
                }
            }else{
                imageFlip = 0;
            }
        }
        imageFlip++;
    }else{
        console.log("undef");
    }
    if (introFrame <= 100){
        fill(0, 0, 0, (100-introFrame)*25);
        rect(-10,-10,2770,1270)
        noFill();
        stroke(255, 255, 255, (100-introFrame)*25);
        strokeWeight(5);
        introFrame++;
        pushMatrix();
        scale(5);
        translate(100,-75);
        arc(200-22,200,200,200,-PI/2,((pow(introFrame,2)*0.05)-90)/180*PI);
        if (introFrame < 15){
            line(120,170,120,170+(53/15*introFrame));
        }else{
            line(120,170,120,223);
            if (introFrame < 20){
                arc(130,223,20,20,(180-(introFrame-15)*36)/180*PI,PI);
            }else{
                arc(130,223,20,20,0,PI);
            }
        }
        if (introFrame >= 10 && introFrame <= 20){
            line(108,187,108+introFrame*2.5-25,187);
        }else if (introFrame > 20) {
            line(108,187,133,187);
        }
        if (introFrame >= 15 && introFrame <= 25){
            line(148,196,148,196+(introFrame-15)*3.5);
        }else if (introFrame > 25) {
            line(148,196,148,231);
        }
        if (introFrame >= 20 && introFrame <= 30){
            line(158,173,158,173+(introFrame-20)*5.8);
        }else if (introFrame > 30) {
            line(158,173,158,231);
        }
        if (introFrame >= 25 && introFrame <= 35){
            line(168,173,168,173+(introFrame-25)*5.8);
        }else if (introFrame > 30) {
            line(168,173,168,231);
        }
        if (introFrame >= 30 && introFrame <= 40){
            line(178,208,178+(introFrame-30)*1.1,208+(introFrame-30)*2.4);
        }else if (introFrame > 30) {
            line(178,208,189,232);
        }
        if (introFrame >= 40 && introFrame <= 50){
            line(198,208,198-(introFrame-40)*0.9,208+(introFrame-40)*2.4);
        }else if (introFrame > 40) {
            line(198,208,189,232);
        }
        if (introFrame >= 45 && introFrame <= 55){
            line(208,196,208,196+(introFrame-45)*3.5);
        }else if (introFrame > 45) {
            line(208,196,208,231);
        }
        if (introFrame > 50 && introFrame < 65){
            line(220,170,220,170+(53/15*(introFrame-50)));
        }else if (introFrame >= 65){
            line(220,170,220,223);
            if (introFrame < 70){
                arc(230,223,20,20,((180-(introFrame-65)*36)/180)*PI,PI);
            }else{
                arc(230,223,20,20,0,PI);
            }
        }
        if (introFrame >= 55 && introFrame <= 65){
            line(208,187,208+(introFrame-55)*2.5,187);
        }else if (introFrame > 55) {
            line(208,187,233,187);
        }
        popMatrix();
    }
    fps = round(frameCount/entr*10)/10;
    if (check !== second()){
        check = second();
        entr++;
    }
    stroke(255);
    fill(255);
    textSize(30);
    textAlign(RIGHT,CENTER);
    text(fps + " fps, " + entr + " secs, " + frameCount + " frames", 2700,1330);
};
