import { combineReducers } from 'redux'

const defaultState = {
    user: [],
    locations: []
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
      // case "ADD_DOG":
      //     console.log("inside of API reducer", action)
      //     return [...state, action.payload]
      default:
          return state
  }
}



// {type: "INCREMENT_COUNTER"}
const rootReducer = combineReducers({
  user: userReducer,
  locations: locationsReducer
})

export default rootReducer