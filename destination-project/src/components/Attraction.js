import React from 'react'
import Typography from '@material-ui/core/Typography'

const Attraction = ({ item }) => {
  return(
    <div>
      <Typography style={{color:"#ffffff"}} variant="subtitle2"><strong>{item.attractionName}</strong></Typography>
      <Typography style={{color:"#ffffff"}} variant="subtitle2">{item.attractionDescription}</Typography>
    </div>
  )
}

export default Attraction