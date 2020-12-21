import { combineReducers } from 'redux'

const defaultState = {
  user: [],
  locations: [],
  currentLocation: []
}

function userReducer(state = defaultState.user, action) {
    switch (action.type) {
        case "FETCH_USER":
            console.log("inside of API reducer", action)
            return action.payload
        // case "ADD_DOG":
        //     console.log("inside of API reducer", action)
        //     return [...state, action.payload]
        default:
            return state
    }
}

function locationsReducer(state = defaultState.locations, action) {
  switch (action.type) {
      case "FETCH_LOCATIONS":
          console.log("inside of API reducer", action)
          return action.payload
      default:
          return state
  }
}

function currentLocationReducer(state = defaultState.currentLocation, {type, payload}) {
  switch (type) {
      case "VIEW_LOCATION":
          console.log("inside of API reducer", payload)
          return payload
      case "ADD_REVIEW":
        console.log("inside of API reducer", payload)
        console.log("State", state)
        let newObj = [...state.reviews, {...payload.review}]
        return {...state, reviews: newObj }  
      case "UPDATE_REVIEW":
        console.log("inside of API reducer", payload)
        let copiedArray = [...state.reviews]
        let idx = copiedArray.findIndex(rev => rev.id !== payload.id)
        copiedArray[idx] = payload 
        return {...state, reviews: copiedArray } 
      case "DELETE_REVIEW":
        console.log("inside of API reducer", payload)
        let filteredReviews = state.reviews.filter(rev => rev.id !== payload.id)
        console.log("Filtered Array:", filteredReviews)
        return {...state, reviews: filteredReviews }
        case "ADD_TRIP":
          console.log("inside of API reducer", payload)
          let newTrip = [...state.trips, {...payload.trip}]
          return {...state, trips: newTrip }  
      default:
          return state
  }
}




// {type: "INCREMENT_COUNTER"}
const rootReducer = combineReducers({
  user: userReducer,
  locations: locationsReducer,
  currentLocation: currentLocationReducer
})

export default rootReducer