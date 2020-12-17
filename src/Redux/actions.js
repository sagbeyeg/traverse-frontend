import { FETCH_USER, FETCH_LOCATIONS, VIEW_LOCATION, ADD_REVIEW, UPDATE_LOCATION} from './actionTypes'

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

export function setCurrentLocation(){
  console.log("Inside of action creator")
  return function(dispatch){
    fetch('http://localhost:3002/api/v1/locations/1')
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: VIEW_LOCATION, payload: data})})
  }
}

// export function setCurrentLocation(){
//   console.log("Inside of action creator")
//   return function(dispatch){
//     fetch('http://localhost:3002/api/v1/locations/1')
//       .then(resp => resp.json())
//       //send data to the reducer
//       .then(data => {dispatch({type: VIEW_LOCATION, payload: data})})
//     }
//     return { type: INCREMENT_COUNTER }
// }

export function addReview(){
  console.log("Inside of action creator")
  return function(dispatch){
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        location_id: 1,
        title: 'I Love the Ministry of Magic!',
        rating: 5,
        content: 'The best place in the entire world!'
      })
    }

    fetch('http://localhost:3002/api/v1/reviews', configObj)
      .then(resp => resp.json())
      //send data to the reducer
      .then(reviewObj => {dispatch({type: ADD_REVIEW, payload: reviewObj})})
  }
}