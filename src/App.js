import React, { useState } from 'react';
import logo from './logo.svg';
import Login from './login/login.js';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from './context/context';
import Dashboard from './dashboard/dashboard';
import PrivateRoute from './PrivateRoute';
function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value = {{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div className="App">
          <Dashboard/>
        </div>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/admin" component={Dashboard} />
      </Router>
    </AuthContext.Provider>
  );
} 

export default App;
