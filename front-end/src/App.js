import { useDispatch, useSelector } from "react-redux";
import React,{useState,useEffect } from 'react'

import Login from "./front-end/components/authentification/login"
import Users from "./front-end/components/users/listusers"
import Articles from "./front-end/components/articles/listarticles"
import ArticlesU from "./front-end/components/articles/listarticlesUser"
import listeGaleries from "./front-end/components/galerie/listgalerie"
import { Route, Switch } from "react-router-dom";
import Historique from './front-end/components/historique';
import "./App.css"
import NotFound from "./front-end/components/notfound";

function App() {
 
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login}/>
 
 <Route path="/users/:id" component={Users}/>

      
<Route path="/articles/:id" component={Articles} />

<Route path="/articlesUsers/:id" component={ArticlesU}/>

     <Route path="/historique/:id"  component={Historique} />
   
     <Route path="/galerie/:id"  component={listeGaleries} />
     <Route path="/notfound/:id"  component={NotFound} />


     </Switch>
    </div>
  );
}

export default App;
