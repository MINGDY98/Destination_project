import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function TextTitle({title}){
  console.log({title})
  return(
    <Typography variant="h6" style={{color:'#565656', paddingTop:12}}>
      <strong>
        {title}
      </strong>
    </Typography>
  )
}