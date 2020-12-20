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
    document.body.appendChild(canvas);

    waveGroup = new WaveGroup();
    canvas.addEventListener("resize",resize,false);
    resize();
    requestAnimationFrame(animate);
  },[])

  function resize(event){
    stageWidth = document.body.clientWidth;
    stageHeight = document.body.clientHeight;
    canvas.width=stageWidth*2;
    canvas.height=stageHeight*2;
    ctx.scale(2,2);
    waveGroup.resize(stageWidth,stageHeight);
  }
  function animate(t){
    ctx.clearRect(0,0,stageWidth,stageHeight);
    waveGroup.draw(ctx);
    requestAnimationFrame(animate);
  }
  return (
    <section className={classes.root}>
      <canvas ref={canvasRef} />
    </section>

  )
}
export default WavesContainer; 