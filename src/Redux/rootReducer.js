import { combineReducers } from 'redux'

const defaultState = {
    // num: 0,
    api: []
}

// function numReducer(state = defaultState.num, action) {
//     switch (action.type) {
//         case "INCREMENT_COUNTER":
//             console.log("state in incrementing Counter", state)
//             return state + 1
//         default:
//             return state
//     }
// }

function apiReducer(state = defaultState.api, action) {
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



// {type: "INCREMENT_COUNTER"}
const rootReducer = combineReducers({
    // num: numReducer,
    api: apiReducer
})

export default rootReducer