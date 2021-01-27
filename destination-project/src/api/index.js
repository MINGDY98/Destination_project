import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export const getPlace = async(place) => {
  return await axios.get(`/place/${place}`)
  .then(res => {
    //console.log(res)
    return res
  })
  .catch(e => {
    console.log(e)
    return null
  })
}

export const getAttraction = async( attractionId ) => {
  return await axios.get(`/attraction/${attractionId}`)
  .then(res => {
    //console.log(res)
    return res
  })
  .catch(e => {
    console.log(e)
    return null
  })
}