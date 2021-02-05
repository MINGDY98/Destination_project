/* eslint-disable no-use-before-define */
import { Typography } from '@material-ui/core'
import React from 'react';
import TravelRouteContainer from '../../containers/Main/TravelRouteContainer.js'

const TravelRoute = ({match}) => {

  const {place} = match.params

  return (
      <TravelRouteContainer place={place}/>
  )
}
export default TravelRoute;