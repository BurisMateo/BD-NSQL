import React, { useState } from 'react'
// import Header from './components/Header';
import bootstrap from 'bootstrap';
import Formulario from './components/Formulario';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Index from './components';
import Cards from './components/Cards';
import Details from './components/Details';
import Especifico from './components/Especifico';

function App() {
  
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/cargar" component = {Formulario}/>
            <Route path="/" exact component = {Index} />
            <Route path="/all" exact>
              <Cards/>
            </Route>
            <Route path="/details/:id">
              <Details/>
            </Route>
            <Route path="/all/:house" exact>
              <Especifico/>
            </Route>
          </Switch>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
      </Router>
      </div>
  );  
}

export default App;