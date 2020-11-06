import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
  //console.log(props)
  setTimeout(() => {
    props.history.push('/login')
  }, 2000)
  return (
    <nav className="nav-wrapper cyan darken-1">
      <div className="container">
        <a href='/' className="brand-logo left">My Portuguese Journal</a>
        <ul className="right">
          <li><Link to="/search">Search</Link></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/journal">My Journal</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);