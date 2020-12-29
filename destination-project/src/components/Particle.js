import {Vector} from './Vector.js';
export class Particle {
  constructor(x,y,radius,size,angle,color){
    this.x= x;
    this.y= y;
    this.radius= radius;
    this.size= size;
    this.angle=angle;
    this.color= color;
  }


  update(target,index,position,shift,speed,size,targetSize,orbit){
    position=new Vector(this.x,this.y);
    shift=new Vector(this.x,this.y);
    speed = speed || 0.01 + Math.random() * 0.04;
    this.angle = this.angle||0;

    if(this.color){
      var color = this.color.split(',');
      var colorIndex = -1;
      while(++colorIndex < 3) {      
        color[colorIndex] = Math.round(parseInt(color[colorIndex], 10) + (Math.random()*100)-50);
        // Clamp
        color[colorIndex] = Math.min(color[colorIndex], 255);
        color[colorIndex] = Math.max(color[colorIndex], 0);
      }
      this.color = color.join(', ');
    }
    //size
    this.size = this.size||7;
    size = 1+Math.random()*this.size;
    targetSize = targetSize||this.size;
    orbit = this.radius*0.5+(this.radius * 0.5 * Math.random());
  
    this.angle += speed;

    shift.x += (target.x - shift.x) * speed;
    shift.y += (target.y - shift.y) * speed;

    position.x = shift.x + Math.cos(index + this.angle) * orbit;
    position.y = shift.y + Math.sin(index + this.angle) * orbit;
    
    //if(!isSafari) {
      size += (targetSize - size) * 0.03;

      if(Math.round(size) === Math.round(targetSize)) {
        targetSize = 1 + Math.random() * this.size;
      }
    //}
  }
}