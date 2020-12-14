import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import dummy from '../assets/images/sand.jpg'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    width: 360,
    height:240,
    overflow: 'hidden',
    margin:0,
    padding:0,
    display: 'inline-block',
    minHeight: 0,
    minWidth: 0,
  },
});

export default function PrimaryImageCard() {
  const classes = useStyles();

  return (
    <div style={{display:'flex',position:'relative'}}>
      <Button className={classes.root} >
        {/** <img src='https://shop-phinf.pstatic.net/20200901_230/1598952274480kaVWW_PNG/88163131471408_1595919199.PNG?type=f296_385' alt="good"/>*/}
        <img src={dummy} alt="dum"/>
      </Button>
      <Typography variant="h4" style={{position:'absolute', bottom:0, right:0}}>
        서울
      </Typography>
    </div>

  );
}