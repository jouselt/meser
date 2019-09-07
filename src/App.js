import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/">
          <div className="App">
            <Route exact path="/" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;