import React, { createRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import styled ,{ css,keyframes } from 'styled-components';
import {WaveGroup} from '../../canvas/WaveGroup.js'
const useStyles = makeStyles ({
  root: {
    width:'100%',
    minHeight:'100vh',
    background:'#ffffff',
    overflow:'hidden',
    display:'block'
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
    document.getElementById("canvas-container").appendChild(canvas)
    waveGroup = new WaveGroup();
    window.addEventListener("resize",resize,false);//window로 되어있길래 바꿔줌.근데 똑같음.
    resize();
    requestAnimationFrame(animate);
  },[])

  function resize(){
    stageWidth = canvasContainerRef.current.offsetWidth;
    stageHeight = canvasContainerRef.current.clientHeight;
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
    <div id="canvas-container" className={classes.root} ref={canvasContainerRef} />
  )
}
export default WavesContainer; 