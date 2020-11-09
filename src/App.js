import React from 'react';
import "./App.css";
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main';

import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div id="App">
      <Aside/>
      <Main/>
      <Nav/>
    </div>
// ao hover no botao do pfd sair otexto "baixar curriculo"
  )
}

export default App
