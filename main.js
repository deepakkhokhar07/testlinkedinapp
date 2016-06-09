import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

/*Importing Components*/

import App from './App.jsx';
import Home12 from './Home12.jsx';
import Callback from './Callback.jsx';
import Contact from './Contact.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

/*Including App jsx*/
ReactDOM.render(<App />, document.getElementById('app'));

/*Define Routing*/
ReactDOM.render((
   <Router history = {browserHistory}>

      <Route path = "/" component = {App}>
       <IndexRoute component = {Login} />
        <Route path = "home12" component = {Home12} />
        <Route path = "contact" component = {Contact} />
        <Route path = "login" component = {Login} />
        <Route path = "callback" component = {Callback} />
        <Route path = "logout" component = {Logout} />
      </Route>
   </Router>
   
	
), document.getElementById('app'))



