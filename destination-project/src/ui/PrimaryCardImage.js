import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

export default function PrimaryCardImage({image, title}) {
  const classes = useStyles();

  return (
      <CardMedia
      height="100%"
      component="img"
      alt="ProductBestReview"
      image='https://shop-phinf.pstatic.net/20200901_230/1598952274480kaVWW_PNG/88163131471408_1595919199.PNG?type=f296_385'
      title="best"
    />
  );
}