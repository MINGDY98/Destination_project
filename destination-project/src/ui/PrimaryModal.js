import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SlickCarousel from './SlickCarousel';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'auto',
    backgroundColor:'rgba(255,255,255,0.5)'
  },
  paper: {
    backgroundColor:'rgba(255,255,255,0.5)',
    //theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[1],
  },
}));

export default function PrimaryModal({ place, open, onClose }) {
  const classes = useStyles();
  if(place===null){
    return(
      <></>
    )
  }
  else{
  return (
    <div className={classes.modal}>
      <Modal
        open={open}
        onClose={onClose}
      >
        <div className={classes.paper}>
          <SlickCarousel place={place} />
        </div>
      </Modal>
    </div>
  );
  }
}