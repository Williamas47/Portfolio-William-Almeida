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

// 1 - Barra lateral
// 2 - Mapa
// 3 - Formulário
// 4 - Responsividade




// div q toda vez q eu scrollo ela aumenta ou diminui pra scrollbar


// ==== Feitos ==== //

// cursor zoom in zoom out; cursor: zoom-in cursor: zoom-out

//arrumar qnd clica zoom na img e dps volta, se vai pra tras vai pra ultima
//e se vai pra frente vai pra primeira. Linha 34, ele re-renderiza o componente qnd abre a foto e reseta pos

// deixar disable os botoes next prev qnd a imagem estiver aberta

// fazer um componente para o botao com ja a prop do before com o hover
// vai receber o width e height por parametro(apesar do height acho melhor ser padrao)
// ver como vai ser a receção do conteudo. como children?

//botar pra img ampliar so qnd clicar e dps ela volta ao tirar o mouse ou x

// ao hover no botao do pfd sair otexto "baixar curriculo"



export default App
