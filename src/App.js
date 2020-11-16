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

)
}
// ao hover no botao do pfd sair otexto "baixar curriculo"

// div q toda vez q eu scrollo ela aumenta ou diminui

// fazer um componente para o botao com ja a prop do before com o hover
// vai receber o width e height por parametro(apesar do height acho melhor ser padrao)
// ver como vai ser a receção do conteudo. como children?

//botar pra img amplicar so qnd clicar e dps ela volta ao tirar o mouse ou x
// cursor zoom in zoom out; cursor: zoom-in cursor: zoom-out

export default App
