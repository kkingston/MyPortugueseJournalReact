import React, {Component} from 'react';
import Navbar from './components/navbar'
import Login from './components/login'
import Journal from './components/journal'
import Home from './components/home'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/journal' component={Journal}/>
          <Route path='/login' component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;