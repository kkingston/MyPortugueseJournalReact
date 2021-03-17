import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/navbar'
import Journal from './components/journal'
import Home from './components/home'
import LoginForm from './components/login'
//import Logout from './components/logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
//import currentUser from './reducers/currentUser';
//import loginForm from './reducers/loginForm';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/journal' component={ Journal } />
          <Route path='/login' component={ LoginForm } />
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, { getCurrentUser }) (App);
