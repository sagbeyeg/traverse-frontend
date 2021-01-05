import { combineReducers } from 'redux'

const defaultState = {
  currentUser: [],
  loggedIn: true,
  user: [],
  locations: [],
  currentLocation: [],
  reviews: [],
  trips: []
}

function currentUserReducer(state = defaultState.currentUser, action) {
  switch (action.type) {
    case "VIEW_USER":
      console.log("inside of current user reducer")
      console.log("payload:", action.payload) 
      return action.payload
    default:
      return state
  }
}

function userReducer(state = defaultState.user, action) {
    switch (action.type) {
      case "FETCH_USER":
        console.log("inside of User reducer", action)
        return action.payload
      default:
        return state
    }
}

function reviewsReducer(state = defaultState.reviews, action) {
  switch (action.type) {
    case "FETCH_REVIEWS":
      console.log("inside of reviews reducer", action)
      return action.payload
    default:
      return state
  }
}

function tripsReducer(state = defaultState.trips, action) {
  switch (action.type) {
    case "FETCH_TRIPS":
      console.log("inside of trips reducer", action)
      return action.payload
    default:
      return state
  }
}

function locationsReducer(state = defaultState.locations, action) {
  switch (action.type) {
    case "FETCH_LOCATIONS":
      console.log("inside of locations reducer", action)
      return action.payload
    default:
      return state
  }
}

function currentLocationReducer(state = defaultState.currentLocation, {type, payload}) {
  switch (type) {
      case "VIEW_LOCATION":
        console.log("inside of current location reducer", payload)
          return payload
      case "ADD_REVIEW"
      :
        console.log("inside of current location reducer", payload)
        console.log("State", state)
        let newObj = [...state.reviews, {...payload.review}]
        return {...state, reviews: newObj }  
      case "UPDATE_REVIEW":
        console.log("inside of current location reducer", payload)
        let copiedArray = [...state.reviews]
        let idx = copiedArray.findIndex(rev => rev.id == payload.id)
        copiedArray[idx] = payload 
        return {...state, reviews: copiedArray } 
      case "DELETE_REVIEW":
        console.log("inside of current location reducer", payload)
        let filteredReviews = state.reviews.filter(rev => rev.id !== payload)
        console.log("Filtered Array:", filteredReviews)
        return {...state, reviews: filteredReviews }
        case "ADD_TRIP":
          console.log("inside of current location reducer", payload)
          let newTrip = [...state.trips, {...payload.trip}]
          return {...state, trips: newTrip }  
      default:
          return state
  }
}




// {type: "INCREMENT_COUNTER"}
const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  user: userReducer,
  locations: locationsReducer,
  currentLocation: currentLocationReducer,
  reviews: reviewsReducer,
  trips: tripsReducer
})

export default rootReducer