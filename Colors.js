class Color {
  
  constructor(x,y,leng,index){
  this.x = x; 
  this.y = y; 
  this.Width = leng;
  this.Height = leng;
  this.strokeW = 0.5;
  this.index = index;
  }
  
 
  colorSet(H,S,L){
  this.H = H; 
  this.S = S;
  this.L = L;  
  }
  
  show(){
    stroke(0,0,360);
    strokeWeight(this.strokeW);
    fill(this.H,this.S,this.L);
    rect(this.x,this.y,this.Width,this.Height,40);
    
    if(mouseX > this.x && mouseX < this.x + this.Width && mouseY > this.y && mouseY < this.y + this.Height && mouseIsPressed){
      activeH = this.H;
      activeS = this.S;
      activeL = this.L;
      active = this.index;
    }
    else{
     this.strokeW = 0.5;
    }
    
    
    if (this.index == active){
      this.strokeW = 5;
    }
    else{
     this.strokeW = 0.5;
    }
    
  }
  
}
