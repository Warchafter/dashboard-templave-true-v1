import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { NavBar, SideBar } from './Components';

import './App.css';
import LogIn from './Views/LogIn';

function App() {
  return (
    <div>
      <LogIn />
      {/* <NavBar />
      <SideBar /> */}
    </div>
  );
}

export default App;