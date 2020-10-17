import React,{useState, useEffect, Suspense} from 'react';
import Home from './Home'
import Main from './Main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './i18n';

function App() {
  const [locale, setLocale] = useState()

  return (
    <Suspense fallback="loading">
      <Router>
      <Switch>

      <Route path="/">
      <Home />
      </Route>

      <Route path="/main">
      <Main/>
       </Route>

      </Switch>
      </Router>
    </Suspense>
   
  );
}

export default App;
