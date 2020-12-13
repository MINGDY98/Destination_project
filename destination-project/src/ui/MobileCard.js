import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import MobileCardImage from './MobileCardImage';
import PrimaryCardContent from './PrimaryCardContent';

const useStyles = makeStyles({
  root: {
    width: 180,
    height:120,
    minWidth: 90,
    minHeight:60
  },
});

export default function PrimaryCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <MobileCardImage/>
        <PrimaryCardContent/>
      </CardActionArea>
    </Card>
  );
}