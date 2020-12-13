import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import PrimaryCardImage from './PrimaryCardImage';
import PrimaryCardContent from './PrimaryCardContent';

const useStyles = makeStyles({
  root: {
    width: 360,
    height:240,
    minWidth: 240,
    minHeight:160
  },
});

export default function PrimaryCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <PrimaryCardImage/>
        <PrimaryCardContent/>
      </CardActionArea>
    </Card>
  );
}