import { FETCH_USER } from './actionTypes'

export function getUserFromApi(){
  console.log("Inside of action creator")
  return function(){
    fetch('http://localhost:3002/api/v1/users/1')
      .then(resp => resp.json())
      .then(data => console.log("Data from fetch:", data))
  }
  return { type: FETCH_USER }
}