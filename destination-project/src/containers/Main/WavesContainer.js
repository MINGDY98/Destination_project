import React, { createRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import styled ,{ css,keyframes } from 'styled-components';
import {WaveGroup} from '../../components/WaveGroup.js'
const useStyles = makeStyles ({
  root: {
    width:'100%',
    height:'100%',
    background:'#ffffff',
    overflow:'hidden'
  },
})

const WavesContainer = (canvasRef) => {
  const canvasContainerRef = React.createRef()
  const classes = useStyles();
  let canvas;
  let ctx;
  canvasRef = createRef();
  var stageWidth;
  var stageHeight;
  var waveGroup;

  useEffect(()=>{
    canvas = canvasRef.current;
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    //console.log(document.body.find)
    document.getElementById("canvas-container").appendChild(canvas)
    //canvasContainerRef.appendChild(canvas);

    waveGroup = new WaveGroup();
    window.addEventListener("resize",resize,false);//window로 되어있길래 바꿔줌.근데 똑같음.
    resize();
    requestAnimationFrame(animate);
  },[])

  function resize(){
    stageWidth = document.body.clientWidth;
    stageHeight = document.body.clientHeight;
    console.log(document.body.clientWidth)
    canvas.width=stageWidth;
    canvas.height=stageHeight;
    ctx.scale(1,1);
    waveGroup.resize(stageWidth,stageHeight);
  }
  function animate(t){
    ctx.clearRect(0,0,stageWidth,stageHeight);
    waveGroup.draw(ctx);
    requestAnimationFrame(animate);
  }
  return (
    <div id="canvas-container" className={classes.root} ref={canvasContainerRef}>
      <section>
        <canvas ref={canvasRef} />
      </section>
    </div>
    

  )
}
export default WavesContainer; 