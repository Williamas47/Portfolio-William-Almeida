import React from 'react';
import "./App.css";
import Aside from './components/Aside/Aside'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div id="App">
      <Aside/>
      <div id="Main">
      <Home/>
      <Skills/>
      </div>
      <Nav/>
    </div>
// ao hover no botao do pfd sair otexto "baixar curriculo"
  )
}

export default App
