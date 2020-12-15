import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dummy from '../assets/images/sand.jpg'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    width: 270,
    height:180,
    overflow: 'hidden',
    margin:0,
    padding:0,
    display: 'inline-block',
    minHeight: 0,
    minWidth: 0,
  },
});

export default function TabletImageCard({place}) {
  const classes = useStyles();

  return (
    <div style={{display:'flex',position:'relative'}}>
      <Button className={classes.root} >
        {/** <img src='https://shop-phinf.pstatic.net/20200901_230/1598952274480kaVWW_PNG/88163131471408_1595919199.PNG?type=f296_385' alt="good"/>*/}
        <img src={dummy} alt="dum"/>
      </Button>
      <Typography variant="h6" style={{position:'absolute', bottom:0, right:0}}>
        {place}
      </Typography>
    </div>

  );
}