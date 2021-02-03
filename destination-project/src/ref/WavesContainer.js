import React, { createRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {WaveGroup} from './canvas/WaveGroup.js'
import { Button } from '@material-ui/core';
const useStyles = makeStyles ({
  root: {
    width:'100%',
    minHeight:'100vh',
    background:'#ffffff',
    overflow:'hidden',
    display:'block'
  },
})

const WavesContainer = () => {
  const canvasContainerRef = React.createRef()
  const classes = useStyles();
  let canvas;
  let ctx;
  var stageWidth;
  var stageHeight;
  var waveGroup;

  var anim;

  const [waveup, setWaveup]= React.useState(0)

  useEffect(()=>{
    init();
  },[])

  function init(){
    canvas = React.createRef()
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    document.getElementById("canvas-container").appendChild(canvas)
    waveGroup = new WaveGroup();
    window.addEventListener("resize",resize,false);//window로 되어있길래 바꿔줌.근데 똑같음.
    resize(0);
    anim = requestAnimationFrame(animate);
    console.log(anim)
  }

  function resize(_height){
    if(canvasContainerRef !== null || canvasContainerRef.curent !== null){
      stageWidth = canvasContainerRef.current.offsetWidth;
      stageHeight = canvasContainerRef.current.clientHeight;
      canvas.width=stageWidth*2;
      canvas.height=stageHeight;
      ctx.scale(1,1);
      waveGroup.resize(stageWidth,stageHeight, 0);
    }
  }

  function animate(t){
    ctx.clearRect(0,0,stageWidth,stageHeight);
    waveGroup.draw(ctx, waveup);
    requestAnimationFrame(animate);
  }

  const handleButton = () => {
    //document.getElementById("canvas-container").removeChild(canvas);
    setWaveup(200)
    setInterval(() => {

    }, 10)
    //init();
    
    //animate()
  }

  return (
    <div>      
      <div id="canvas-container" className={classes.root} ref={canvasContainerRef} />
    </div>
  )
}
export default WavesContainer; 