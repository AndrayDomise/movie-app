import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Liked from './Pages/Liked/Liked';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact strict path ='/' component={Homepage} />
          <Route exact path ='/liked' component={Liked} />
        </Switch>
      </Router>
    );
  }
}

export default App;
