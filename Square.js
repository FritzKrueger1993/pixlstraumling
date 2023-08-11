class Square{
    
constructor(x,y,leng){
  this.x = x; 
  this.y = y; 
  this.sWidth = leng;
  this.sHeight = leng;
  this.sColor = 0;
  this.sSatur = 0;
  this.sLight = 20;
  }
  
  
  show(){
    if(mouseX > this.x && mouseX < this.x + this.sWidth && mouseY > this.y && mouseY < this.y + this.sHeight && mouseIsPressed){
      this.sColor = activeH;
      this.sSatur = activeS;
      this.sLight = activeL;
    }
    
    stroke(0,0,360);
    strokeWeight(0.5);
    fill(this.sColor, this.sSatur, this.sLight);
    rect(this.x,this.y,this.sWidth,this.sHeight);
  }
  
  
  
}
