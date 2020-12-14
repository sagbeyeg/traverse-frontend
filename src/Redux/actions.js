import { FETCH_USER } from './actionTypes'

export function getUserFromApi(){
  return function(){
    fetch('http://localhost:3002/api/v1/users')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
  return { type: FETCH_USER }
}