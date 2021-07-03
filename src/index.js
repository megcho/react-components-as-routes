import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const SignUp = () => <h1>This is where you sign up.</h1>

const Messages = () => <h1>This is where you check your messages.</h1>

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>,
  document.getElementById('root')
);