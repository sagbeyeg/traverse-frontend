import { FETCH_USER, FETCH_LOCATIONS} from './actionTypes'

export function getUserFromApi(){
  console.log("Inside of action creator")
  return function(dispatch){
    fetch('http://localhost:3002/api/v1/users/1')
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_USER, payload: data})})
  }
}

export function getLocationsFromApi(){
  console.log("Inside of action creator")
  return function(dispatch){
    fetch('http://localhost:3002/api/v1/locations')
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_LOCATIONS, payload: data})})
  }
}