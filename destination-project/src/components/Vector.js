export class Vector {
  constructor(x,y){
    this.x= x||0;
    this.y= y||0;
  }


  distanceTo(vector, abs){
    var distance = Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    return abs || false ? Math.abs(distance) : distance;
  }

}