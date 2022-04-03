import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'

function App({ loggedIn }) {
  return (
    <div className='App'>
      <Router>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/home" />}
        </Route>
        <Route path='/home' component={Home} />
      </Router>
    </div>
  );
}

export default App;
