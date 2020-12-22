import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import wave from '../../assets/images/wave.png'
import styled ,{ css,keyframes } from 'styled-components';
const useStyles = makeStyles ({
  root: {
    display:'flex',
    position:'relative',width:'100%',height:'100vh',background:'#3586ff',overflow:'hidden'
  },
})

const animate = keyframes`
  0% {
    background-position-x:0;
  }
  100% {
    background-position-x:1000px;
  }
`;

const animate2 = keyframes`
  0% {
    background-position-x:0;
  }
  100% {
    background-position-x:-1000px;
  }
`;

const move= keyframes`
  0% {
    bottom: 0px;
  }
  50% {
    bottom: 200px;
  }
  100% {
    bottom: 0px;
  }
`;

const Wave = styled.div`
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:100px;
  background-image:url(${wave});
  background-size:1000px 100px;
 
  ${(props) =>
    props.wave1 &&css`
    animation: ${animate} 30s linear infinite, ${move} 10s linear 1;
    z-index:1000;
    opacity:1;
    animation-delay:0s;
    bottom:0
    `}
  ${(props) =>
    props.wave2 &&css`
    animation: ${animate2} 15s linear infinite,${move} 15s linear 1;
    z-index:999;
    opacity:0.5;
    animation-delay:-5s;
    bottom:10px
    `}
  ${(props) =>
    props.wave3 &&css`
    animation: ${animate} 20s linear infinite,${move} 12s linear 1;
      z-index:998;
      opacity:0.2;
      animation-delay:-2s;
      bottom:15px
      `}    
  ${(props) =>
    props.wave4 &&css`
    animation: ${animate2} 5s linear infinite,${move} 15s linear 1;
    z-index:997;
    opacity:0.7;
    animation-delay:-5s;
    bottom:20px
    `}
`;

const WaveContainer = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Wave wave1/>
      <Wave wave2/>
      <Wave wave3/>
      <Wave wave4/>

    </section>

  )
}
export default WaveContainer; 