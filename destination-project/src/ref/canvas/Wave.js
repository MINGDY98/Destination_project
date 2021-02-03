
import {Point} from './Point.js';
export class Wave  {
  constructor(index,totalPoints,color){
    this.index=index;
    this.totalPoints=totalPoints;
    this.color=color;
    this.points=[]; 
  }

  resize(stageWidth, stageHeight, height){
    this.stageWidth= stageWidth;
    this.stageHeight=stageHeight+ height;
    this.centerX = stageWidth/2;
    this.centerY = stageHeight/(1.5);
    this.pointGap=this.stageWidth/(this.totalPoints-1);
    this.init(height);
  }

  init(height){
    this.points=[];
    for(let i=0;i<this.totalPoints;i++){
      const point = new Point(
        this.index+i,
        this.pointGap*i,
        this.centerY,
        height
      );
      this.points[i]=point;
    }
  }
  draw(ctx, height){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    let prevX =this.points[0].x;
    let prevY=this.points[0].y;
    ctx.moveTo(prevX,prevY);
    for(let i =1; i<this.totalPoints;i++){
      if(i<this.totalPoints-1)(
        this.points[i].update(height)
      )
      const cx = (prevX + this.points[i].x)/2;
      const cy = (prevY + this.points[i].y)/2;
      ctx.quadraticCurveTo(prevX,prevY,cx,cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;

    }
    ctx.lineTo(prevX,prevY);
    ctx.lineTo(this.stageWidth,this.stageHeight);
    ctx.lineTo(this.points[0].x,this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
