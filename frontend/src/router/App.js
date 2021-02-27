import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ToDoPage from '../pages/ToDoPage';
import Particles from '../components/Particles';

const App = () => {
  return (
    <BrowserRouter> 
      <Particles />
      <Switch>
       
        <Route path="/todo-list" component={ToDoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;