import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default function PrimaryCardContent({cardTitle, cardContent}) {
  return (

    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {cardTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {cardContent}
      </Typography>
    </CardContent>
  );
}