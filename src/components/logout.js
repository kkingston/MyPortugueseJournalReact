import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {

  return (
    <form onSubmit={ logout } className="container">
      <button class="waves-effect cyan darken-2 btn-small" type="submit" value="Logout">Logout
        <i class="material-icons right">send</i>
      </button>
    </form>
  )
}

export default connect(null, { logout } )(Logout)

