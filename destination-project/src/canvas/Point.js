export class Point  {

  constructor(index,x,y,height){
    this.x = x;
    this.y = y;
    this.fixedY=y;
    this.speed=0.005;
    this.cur =index;
    this.max = Math.random() * 100 +(50);
  }

  update(height){
    this.cur+= this.speed;
    this.y= this.fixedY + (Math.sin(this.cur)*(this.max+height));
  }
}
