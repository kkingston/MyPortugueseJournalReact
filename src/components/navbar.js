import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Login from '../components/login'
import Logout from '../components/logout'

const Navbar = ({ currentUser }) => {
  return (
    <nav className="nav-wrapper  cyan darken-2">
      <div className="nav-container">

          <ul id="slide-out" class="sidenav">
            <li>
              <div class="user-view">
                <div class="background">
                  <img class="bkg-img" src="images/background.jpg" alt='' />
                </div>
                <a href="#user"><img class="circle" src="images/yuna.jpg" alt='' /></a>
                <a href="#name">
                  <span class="grey-text text-darken-4 name">
                    { currentUser ? currentUser.user.name : "Please login below!" }
                  </span>
                </a>
                <a href="#email">
                  <span class="grey-text text-darken-4 email">
                    { currentUser ? currentUser.user.email : " " }
                  </span>
                </a>
              </div>
            </li>
            
            <ul class="nav-menu">
              <li><div class="divider"></div></li>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/journal">My Journal</NavLink></li>
              <li><div class="divider"></div></li>
              <li class="login-form-li">
                { currentUser ? <Logout/> : <Login/> }
              </li>
            </ul>
            <li><div class="divider"></div></li>
         </ul>
          <a href="#menu" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps) (Navbar);
