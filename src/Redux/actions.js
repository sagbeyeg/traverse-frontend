import { FETCH_USER, FETCH_LOCATIONS, VIEW_LOCATION, ADD_REVIEW, DELETE_REVIEW, ADD_TRIP, UPDATE_REVIEW} from './actionTypes'

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

export const setCurrentLocation = () => {
  console.log("Inside of action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/locations/1`)
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

export function addReview(review){
  console.log("Inside of action creator")
  console.log("ReviewObj:", review)
  return function(dispatch){
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({review})
    }

    fetch('http://localhost:3002/api/v1/reviews', configObj)
      .then(resp => resp.json())
      //send data to the reducer
      .then(reviewObj => {dispatch({type: ADD_REVIEW, payload: reviewObj})})
  }
}

export function updateReview(review, id){
  console.log("Inside of action creator")
  console.log("ReviewObj:", review)
  return function(dispatch){
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({review})
    }

    fetch(`http://localhost:3002/api/v1/reviews/${id}`, configObj)
      .then(resp => resp.json())
      //send data to the reducer
      .then(reviewObj => {dispatch({type: UPDATE_REVIEW, payload: reviewObj})})
  }
}

export function deleteReview(id){
  console.log("Inside of action creator")
  console.log(id)
  return function(dispatch){

    const configObj = {
      method: 'DELETE'
    }
 
    fetch(`http://localhost:3002/api/v1/reviews/${id}`, configObj)
      //send data to the reducer
      .then(dispatch({type: DELETE_REVIEW, payload: id}))
  }
}

export function addTrip(){
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
        start_date: "2020-12-17",
        end_date: "2020-12-19",
        note: "",
      })
    }

    fetch('http://localhost:3002/api/v1/trips', configObj)
      .then(resp => resp.json())
      //send data to the reducer
      .then(reviewObj => {dispatch({type: ADD_TRIP, payload: reviewObj})})
  }
}