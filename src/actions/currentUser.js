import { resetLoginForm } from "./loginForm.js"

//synchronous
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

//asynchronous 
//thunk allows us to return distpatch
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      console.log("login user", user)
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch({ type: "RESET_LOGIN_FORM" })
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    console.log("clearning current user")
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: 'include',
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/profile", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
    .then(response => response.json())
    .then(user => {
      console.log("current user fetch", user)      
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}