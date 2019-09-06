const NUMOFDATAPTS = 20;
const CANVX = 1000;
const CANVY = 1000;
var array = [];

//drawing
var sorted = false;
var rectX= 0;
var rectY= 0;

//bubble sort
var xpos = 0;
var x = 0;
var ypos = 1;
var y = 0;

//general sorting
var sortInProgress = false;
var numOfUnsortedDataPoints = NUMOFDATAPTS;

//insertion sort
var ins = 1;

var sortMethod = "none";
var click = 0;

Array.prototype.shuffle = function() {
  for(let i = 0; i < NUMOFDATAPTS; i++){
    this[i] = 0;
  }
  for(let i = 1; i <= NUMOFDATAPTS; i++){
    let works = false;
    while(!works){
      let num = Math.floor((Math.random() * NUMOFDATAPTS));
      if(this[num] == 0){
        this[num] = i;
        works = true;
      }
    }
  }
  numOfUnsortedDataPoints = NUMOFDATAPTS;
  frameRate(3)
  return this
}

function setup() {
  createCanvas(CANVX, CANVY);
}

function mousePressed() {
  // Check if mouse is inside the circle
  if(mouseX > 100 && mouseX < 900){
    if(mouseY > 150 && mouseY < 250){
      click = 1;
      array.shuffle();
    }else if(mouseY > 350 && mouseY < 450){
      click = 2;
      array.shuffle();
    }else if(mouseY > 550 && mouseY < 650){
      click = 3;
      array.shuffle();
    }else if(mouseY > 750 && mouseY < 850){
      click = 4;
      array.shuffle();
    }
  }
  if(mouseY > 10 && mouseY < 110){
    if(mouseY > 10 && mouseY < 110){
      click = 5;
      array.shuffle();
    }
  }
}

function draw() {
  clear();
  background("black");

  if(sortMethod == "none"){
    xpos = 0;
    ypos = 1;
    stroke("white");
    fill("red");
    if(click == 1){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 150, 800 , 100);
    if(click == 2){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 350, 800 , 100);
    if(click == 3){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 550, 800 , 100);
    if(click == 4){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 750, 800 , 100);

    fill("black");
    textAlign(CENTER);
    textSize(40);
    text("bubble", 500, 200);
    text("insertion", 500, 400);
    text("merge", 500, 600);
    text("heap", 500, 800);

    if(click == 1){
      sortMethod = "bubble";
    } else if(click == 2){
      sortMethod = "insertion";
    } else if(click == 3){
      sortMethod = "merge";
    } else if(click == 4){
      sortMethod = "heap";
    }
  }else if(sortMethod == "bubble"){
    var rectX= 0;
    var rectY= 0;
    for(let i = 0; i < NUMOFDATAPTS;i++){
      if(xpos == i || ypos == i){
        stroke("green");
        fill("green");
      } else {
        stroke("gray");
        fill("gray");
      }
      rectY = 1000 - 1000 * (array[i]/NUMOFDATAPTS);
      rect(rectX, rectY, 1000/NUMOFDATAPTS , 1000 * (array[i]/NUMOFDATAPTS));
      rectX += 1000/NUMOFDATAPTS;
    }

    if(!sorted){
      //next step of sorting
      x = array[xpos];
      y = array[ypos];
      if(x > y){
        array[xpos] = y;
        array[ypos] = x;
        sortInProgress = true;
      }

      xpos ++;
      ypos ++;

      if(ypos == numOfUnsortedDataPoints){
        if(sortInProgress){
          sortInProgress = false;
          xpos = 0;
          ypos = 1;
          numOfUnsortedDataPoints -= 1;
        } else {
          sorted = true;
          xpos = NUMOFDATAPTS;
          ypos = NUMOFDATAPTS;
        }
      }
    }
    if(sorted){
      if(click == 5){
        fill("green");
      }else{
        fill("red");
      }
      rect(10, 10, 100 , 100);

      fill("black");
      textAlign(CENTER);
      textSize(20);
      text("end.", 60, 60);

      if(click == 5){
        sortMethod = "none";
        click = 0;
        sorted = false;
      }
    }

  } else if(sortMethod == "insertion"){

    if(ins < NUMOFDATAPTS){
      if(ins < NUMOFDATAPTS) {
        let key = array[ins];
        let j = ins - 1;
        xpos = ins;
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
        }
        array[j + 1] = key;

        ins++
      }
    } else {
      if(click == 5){
        fill("green");
      }else{
        fill("red");
      }
      rect(10, 10, 100 , 100);

      fill("black");
      textAlign(CENTER);
      textSize(20);
      text("end.", 60, 60);

      if(click == 5){
        sortMethod = "none";
        click = 0;
        sorted = false;
      }
    }

    var rectX= 0;
    var rectY= 0;
    for(let i = 0; i < NUMOFDATAPTS;i++){
      if(xpos == i){
        stroke("green");
        fill("green");
      } else {
        stroke("gray");
        fill("gray");
      }
      rectY = 1000 - 1000 * (array[i]/NUMOFDATAPTS);
      rect(rectX, rectY, 1000/NUMOFDATAPTS , 1000 * (array[i]/NUMOFDATAPTS));
      rectX += 1000/NUMOFDATAPTS;
    }


  } else if(sortMethod == "merge"){
    xpos = 0;
    ypos = 1;
    stroke("white");
    fill("red");

    if(click == 1){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 350, 800 , 100);


    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("This is in unfinished. Click to return to sort selection.", 500, 400);

    if(click == 2){
      sortMethod = "none";
      click = 0;
    }

  } else if(sortMethod == "heap"){
    xpos = 0;
    ypos = 1;
    stroke("white");
    fill("red");

    if(click == 1){
      fill("green");
    }else{
      fill("red");
    }
    rect(100, 350, 800 , 100);


    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("This is in unfinished. Click to return to sort selection.", 500, 400);

    if(click == 2){
      sortMethod = "none";
      click = 0;
    }

  }

}
