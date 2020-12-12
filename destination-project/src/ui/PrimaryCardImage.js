import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function PrimaryCardImage({image, title}) {
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.media}
      image={image}
      title={title}
    />

  );
}