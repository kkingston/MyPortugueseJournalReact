import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {
  const handleInputChange = event => {
    const { name, value } = event.target 
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={ handleSubmit } className="container">
      <p>LOGIN</p>
      <label for="email">Email: </label>
      <input 
        type="email"
        name="email"
        placeholder="email"
        value={ loginFormData.email }
        onChange={ handleInputChange } />
      <label for="password">Password: </label>
      <input 
        type="password"
        name="password"
        placeholder="password"
        value={ loginFormData.password }
        onChange={ handleInputChange } />
      <button class="waves-effect  cyan darken-2 btn-small" type="submit">Login
        <i class="material-icons right">send</i>
      </button>
      <p>Click HERE to create a new account!</p>
    </form>
  )
}

//this gives me an argument coming to this component that looks like this:
//{
//  username: "kkingston09",
//  password: "test"
//}
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)



//class component vs. container 