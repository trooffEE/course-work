import React from 'react';
import Wrapper from './UsefulComponents/Wrapper';
import './App.css'
import { Route, Switch } from "react-router-dom";
import Header from './Header/Header';
import CreateOrConnect from './MainComponents/CreateOrConnect/CreateOrConnect';
import CreateRoom from './MainComponents/CreateRoom/CreateRoom';
import JoinRoom from './MainComponents/JoinRoom/JoinRoom';
import Game from './MainComponents/Game/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={CreateOrConnect}/>
          <Route path="/create-room" component={CreateRoom}/>
          <Route path="/join" component={JoinRoom}/>
          <Route path='/game' component={Game}/>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
