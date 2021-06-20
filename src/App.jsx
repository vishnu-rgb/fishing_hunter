import './Fishing.css';
import './App.css';
import React from 'react';
import Login from './Login';
import {Switch,Route ,Redirect} from 'react-router-dom'
import Fishing from './Fishing';
    
function App() {
  return (
        <Login/>,
        <Switch>
            <Route exact path ="/" component={Login}/>
            <Route exact path ="/login" component={Fishing}/>
            
            <Redirect to=""/>
        </Switch>
  );
};

export default App;
