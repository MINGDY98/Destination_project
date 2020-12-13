import React from 'react';
import Map from '../../components/Map'
import { makeStyles } from '@material-ui/core/styles';
import PrimaryCard from '../../ui/PrimaryCard'
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    display:'flex',
  },
});

const MapContainer =() =>{
  const classes = useStyles();
  return(
    <>
    <Map/>
    </>


  )

}
export default MapContainer;

  
