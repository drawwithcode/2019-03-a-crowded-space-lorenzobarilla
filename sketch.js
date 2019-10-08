//variabili per generazione cerchi e incremento scala
let scaleIncrease = 1.0;
var allMyCerchi = [];
var amountOfCerchi = 100;
var Cerchi;
//variabili per generazione quadrati e angolo di rotazione
var allMyQuadrati = [];
var amountOfQuadrati = 100;
var rotationAngle = 0;
var Quadrati;

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  angleMode(DEGREES);

//istanza creazione cerchi in posizioni e con diametro random
  for(var i = 0; i < amountOfCerchi; i++) {
    var tempx = random()*windowWidth;
    var tempy = random()*windowHeight;
    var tempr = random()*10 + 10;//diametro cerchi

    var tempCerchio = new Cerchio(tempx, tempy, tempr);
    allMyCerchi.push(tempCerchio);
  }

//istanza creazione quadrati in posizioni e con lunghezza lato random
  for(var i = 0; i < amountOfQuadrati; i++) {
    var tempx = random()*windowWidth;
    var tempy = random()*windowHeight;
    var temps = random()*150 + 15;//lunghezza lato

    var tempQuadrato = new Quadrato(tempx, tempy, temps);
    allMyQuadrati.push(tempQuadrato);
  }

}

function draw() {
  background("black");

  rotationAngle = rotationAngle + 1;

  for(var i = 0; i < allMyCerchi.length; i++) {
    var tempCerchio = allMyCerchi[i];
    tempCerchio.expand();
    tempCerchio.display();
    tempCerchio.color = color(random()*255, random()*255, random()*255);
  }

  for(var i = 0; i < allMyQuadrati.length; i++) {
    var tempQuadrato = allMyQuadrati[i];
    tempQuadrato.rotation();
    tempQuadrato.display();
  }
}

//creazione oggetto cerchi concentrici in espansione
function Cerchio (_x, _y, _diameter) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;

  this.color = "white";
  this.strokeWeight = (0.5);

  var sizeIncrease = 5;

  this.expand = function() {
    if (frameCount <= 250 ) {
      this.size += sizeIncrease;
    }
    else {
      this.size -= sizeIncrease;
    }
    if (frameCount == 500) {
      frameCount = 0;
    }
  }

  this.display = function() {
    push();
    stroke(this.color);
    strokeWeight(this.strokeWeight);
    noFill();
    for (var i = 0; i < 7; i++) {
      ellipse(this.x, this.y, this.size + i*25);
    }
    pop();
  }
}

//creazione oggetto quadrati rotanti
function Quadrato (_x, _y, _side) {
  this.size = _side;
  this.x = _x;
  this.y = _y;

  this.color = "white";
  this.strokeWeight = (0.5);

  this.rotation = function() {
    rotate(rotationAngle);
  }

  this.display = function() {
    push();
    stroke(this.color);
    strokeWeight(this.strokeWeight);
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }
}
