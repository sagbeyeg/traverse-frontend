import { LOGIN, LOGGED_IN, VIEW_USER, FETCH_USER, FETCH_REVIEWS, FETCH_TRIPS, FETCH_LOCATIONS, VIEW_LOCATION, ADD_REVIEW, DELETE_REVIEW, ADD_TRIP, UPDATE_REVIEW} from './actionTypes'

export const login = (username) => {
  console.log("Inside of action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/by_username/${username}`)
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: LOGIN, payload: data})})
  }
}

export const loggedIn = (state) => {
  console.log("Inside of action creator")
  return { type: LOGGED_IN, payload: state }
}

export const viewUserFromApi = (user) => {
  console.log("Inside of action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/users/${user}`)
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: VIEW_USER, payload: data})})
  }
}

export const getUserFromApi = (user) => {
  console.log("Inside of action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/users/${user}`)
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_USER, payload: data})})
  }
}

export const getReviewsFromApi = () => {
  console.log("Inside of fetch reviews action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/reviews`)
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_REVIEWS, payload: data}, () => console.log(data))})
  }
}

export const getTripsFromApi = () => {
  console.log("Inside of fetch trips action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/trips`)
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_TRIPS, payload: data})})
  }
}

export const getLocationsFromApi = () => {
  console.log("Inside of action creator")
  return function(dispatch){
    fetch('http://localhost:3002/api/v1/locations')
      .then(resp => resp.json())
      //send data to the reducer
      .then(data => {dispatch({type: FETCH_LOCATIONS, payload: data})})
  }
}

export const setCurrentLocation = (id) => { 
  console.log("Inside of action creator")
  return function(dispatch){
    fetch(`http://localhost:3002/api/v1/locations/${id}`)
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

export function addTrip(trip){
  console.log("Inside of action creator", trip)
  return function(dispatch){
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ trip })
    }

    fetch('http://localhost:3002/api/v1/trips', configObj)
      .then(resp => resp.json())
      //send data to the reducer
      .then(reviewObj => {dispatch({type: ADD_TRIP, payload: reviewObj})})
  }
}