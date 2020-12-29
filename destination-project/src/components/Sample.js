import React, { createRef, useEffect } from 'react';
import {Particle} from './Particle.js';
import {Vector} from './Vector.js';
const Sample = () => {
  const canvasContainerRef = React.createRef()
  let canvas;
  let ctx;
  let count;
  let speed;
  let radius;
  let size;
  let color;
  let maxDistance;
  let background;
  var width;
  var height;
  var PI2;
  var HALF_PI;
  var isTouch;
  var isSafari;
  var dpr;
  var target;
  var particles;
  var position;
  var shift;
  var angle;
  var targetSize;
  var orbit;
  useEffect(() => {
    init();
  }, []);

  function init(){
    count= 25;
    speed=0.3;
    radius=6;
    size=15;
    color='30, 180, 1';
    maxDistance=100;
    background=['1, 62, 66', '1, 40, 60'];

    PI2 = Math.PI * 2;
    HALF_PI = Math.PI / 2;
    isTouch = 'ontouchstart' in window;
    isSafari =  !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    
    canvas = React.createRef()
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    document.getElementById("canvas-container").appendChild(canvas);//12번째줄
    dpr=window.devicePixelRatio||1;
    updateDimensions();
    window.addEventListener("resize",updateDimensions,false);//window로 되어있길래 바꿔줌.근데 똑같음.
    resetTarget();//18

    if(isTouch){
      canvas.addEventListener('touchstart',touchMove,false);
      canvas.addEventListener('touchmove',touchMove,false);
    }else{
      window.addEventListener('mousemove', mouseMove, false);
      window.addEventListener('mouseout', resetTarget, false);
    }
    setupParticles();
    loop();
    
  }
  function updateDimensions(){
    if(canvasContainerRef !== null || canvasContainerRef.curent !== null){
      width = canvasContainerRef.current.offsetWidth*dpr;
      height = canvasContainerRef.current.clientHeight*dpr;
      canvas.style.width=width+'px';
      canvas.style.height=height+'px';
      ctx.scale(1,1);
      //waveGroup.resize(stageWidth,stageHeight, 0);
    }
  }

  function mouseMove(event){
    target = new Vector(event.ClientX*dpr,event.ClientY*dpr);
  }
  function resetTarget(){
    target = new Vector(width / 2, height /2);
  }
  function touchMove(event){
    if(event.touches.length === 1) {
        event.preventDefault(); 
      }
    target = new Vector(event.touches[0].pageX * dpr, event.touches[0].pageY * dpr);
  }
  function setupParticles(){
    particles=[];
    var index = -1;
    var between = PI2 /count;
    while(++index < count) {
      var x;
      var y;
      var angle;
      var max = Math.max(width, height);
      angle = (index + 1) * between;
    
      x = Math.cos(angle) * max;
      x += width / 2;

      y = Math.sin(angle) * max;
      y += height / 2;

      var particle = new Particle({
        x: x,
        y: y,
        radius: radius,
        size: size,
        angle: angle,
        color: color,
        position:position,
        shift:shift
      });

      particles.push(particle);
    }
  }

  function findClosest(){
    var index = -1;
    var pointsLength = particles.length;

    while(++index < pointsLength) {
      var closestIndex = -1;
      particles[index].closest = [];
      
      while(++closestIndex < pointsLength) {
        var closest = particles[closestIndex];
        var distance = particles[index].position.distanceTo(closest.position);
        if(distance <maxDistance) {
          var vector = new Vector(closest.position.x, closest.position.y);
          vector.opacity = 1 - (distance /maxDistance);
          vector.distance = distance;
          particles[index].closest.push(vector);
        }
      }
    }
  }

  function loop(){
    //   this.clear();
    if(isTouch || isSafari) {
      ghost();
    } else {
      ghostGradient();
    }    
    if(maxDistance > 0) {
      findClosest();
    }    
    draw();
    
    window.requestAnimationFrame(loop);
  }

  
  function clear(){
    ctx.clearRect(0, 0 , width, height);
  }

  function ghost(){
    ctx.globalCompositeOperation = "source-over";
    ctx.rect(0, 0 , width, height);
    if(typeof background === 'string') {
      this.ctx.fillStyle = "rgb(" + background + ")";
    } else  {
      this.ctx.fillStyle = "rgb(" + background[0] + ")";
    }
      
    ctx.fill();
  }
  function ghostGradient(){
    var gradient;
  
    if(typeof background === 'string') {
      ctx.fillStyle = 'rgb(' + background + ')';   
    } else {
      gradient = ctx.createRadialGradient(width/2,height/2, 0, width/2, height/2, Math.max(width,height)/2);
      
      var length = background.length;
      for(var i = 0; i < length; i++){
        gradient.addColorStop((i+1) / length, 'rgb(' + background[i] + ')');
      }
      ctx.fillStyle = gradient;
    }
    
    ctx.globalOpacity = 0.1;
    ctx.globalCompositeOperation = "darken";
    ctx.fillRect(0, 0 , width,height);
  }

  function draw(){
    var index = -1;
    var length = particles.length;
    while(++index < length) {
      var point = particles[index];
      var color = point.color || color;
      point.update(target, index,position,shift,speed,size,targetSize,orbit);
      
      ctx.globalAlpha = 0.3;
      ctx.globalCompositeOperation = "lighten";
      ctx.fillStyle = 'rgb(' + color + ')';
      ctx.beginPath();
      ctx.arc(point.position.x, point.position.y, point.size, 0, PI2, false);
      ctx.closePath();
      ctx.fill();
      
      if(maxDistance > 0) {
        drawLines(point, color);
      }
    }  
  }

  function  drawLines(point, colors){
    colors = colors || color;
    var index = -1;
    var length = point.closest.length;
    ctx.globalAlpha = 0.2;
    ctx.globalCompositeOperation = "screen";
    ctx.lineCap = 'round';
    while(++index < length) {
      ctx.lineWidth = (point.size * 2) *  point.closest[index].opacity;
      ctx.strokeStyle = 'rgba(' + colors + ', ' + point.closest[index].opacity + ')';
      ctx.beginPath();
      ctx.moveTo(point.position.x, point.position.y);
      ctx.lineTo(point.closest[index].x, point.closest[index].y);
      ctx.stroke();
    }
  }
/**
  function Particle(options) {
    let _ = require('underscore')
    options = _.clone(options || {});
    //options = _.defaults(option, options);
    
    position = shift = new Vector(options.x, options.y);
    
    speed = options.speed || 0.01 + Math.random() * 0.04;
    
    angle = options.angle || 0;
      
    if(options.color) {
      var color = options.color.split(',');
      var colorIndex = -1;
      while(++colorIndex < 3) {      
        color[colorIndex] = Math.round(parseInt(color[colorIndex], 10) + (Math.random()*100)-50);
        
        // Clamp
        color[colorIndex] = Math.min(color[colorIndex], 255);
        color[colorIndex] = Math.max(color[colorIndex], 0);
      }
      color = color.join(', ');
    } 
    
    // Size
    options.size = options.size || 7;
    size = 1 + Math.random() * options.size;
    targetSize = options.targetSize || options.size;
    
    orbit = options.radius * 0.5 + (options.radius * 0.5 * Math.random());
  }

  function update(target,index) {
    angle += speed;

    shift.x += (target.x - shift.x) * speed;
    shift.y += (target.y - shift.y) * speed;
  
    position.x = shift.x + Math.cos(index + angle) * orbit;
    position.y = shift.y + Math.sin(index + angle) * orbit;
    
    if(!isSafari) {
      size += (targetSize - size) * 0.03;
  
      if(Math.round(size) === Math.round(targetSize)) {
        targetSize = 1 + Math.random() * size;//원래options.size임.
      }
    }
  }
 */


  return (
    <div id="canvas-container" style={{position:'absolute',left:0,top:0}} ref={canvasContainerRef}>
      안녕하세요
    </div>
  )
}
export default Sample;