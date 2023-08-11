let Squares = [];
let Colors= [];
let SaveButton1;

let myFont;

let active = 0;
let activeH = 0;
let activeS = 0;
let activeL = 20;

let mouseOverSave;

let rows = 15;
let count;
let lenght;
let size = 800;

let H = [];
let S = [];
let L = [];


function preload() {
  myFont = loadFont('fonts/CODE_Bold.otf');
}

function setup() {
  initialCanva();
  colorMode(HSB, 360);
  ColorPresets(); 
  background(0);
  lenght = size/rows;

  for (i = 0; i < pow(rows, 2); i++) {
    let x = [];
    let y = [];
    x[i] = [i] % rows * lenght;
    y[i] = (([i] / rows) - [i] % rows * 1/ rows) * lenght;
    Squares[i] = new Square(x[i], y[i], lenght);
  }
  
  for(i = 0; i < 8; i++) {
    Colors[i] = new Color(width - 180, 40 + [i] * 70, 60,[i]);
    Colors[i].colorSet(H[i],S[i],L[i]); 
  }
  
  SaveButton1 = new SaveButton(width -200, height - 100, 100, 50);
  
  
}


function draw() {
  currentTime = millis();
  background(0);
  for (i = 0; i < pow(rows, 2); i++) {
    Squares[i].show();
  }
  
  for(i = 0; i < 8; i++) {
    Colors[i].show();
  }
  
  SaveButton1.show();
  
  print(mouseOverSave);
}

function initialCanva() {
  var cnv = createCanvas(size + 300, size, P2D);
  var Cnvx = (windowWidth - width) *0.5;
  var Cnvy = 20;
  cnv.position(Cnvx, Cnvy);
}

function mousePressed(){
 if (mouseOverSave){ 
   saveCanvas('Pixl', 'png');
 }
}

function windowResized(){
  initialCanva()
}
