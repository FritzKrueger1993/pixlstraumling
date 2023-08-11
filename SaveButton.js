
class SaveButton{
  constructor(x,y,Width,Height){
    this.x = x;
    this.y = y;
    this.Width = Width;
    this.Height = Height;
  }
  show(){
    
    
    stroke(0,0,360);
    strokeWeight(this.strokeW);
    fill(330,270,360);
    rect(this.x,this.y,this.Width,this.Height,20);
    
    textSize(30);
    textAlign(CENTER,CENTER);
    fill(360,0,360);
    textFont(myFont);
    text('save', this.x + this.Width * 0.5, this.y + this.Height * 0.5);
    
    
    
    if(mouseX > this.x && mouseX < this.x + this.Width && mouseY > this.y && mouseY < this.y + this.Height){
       mouseOverSave=true;
     }
     else{
       mouseOverSave=false;
     }

  }
}
