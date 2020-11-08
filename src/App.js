import React from 'react';
import "./App.css";
import Aside from './components/Aside/Aside'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div id="App">
      <Nav/>
      <div id="Main">
      <Home/>
      </div>
      <Aside/>
    </div>

  )
}

export default App
