import React from 'react';
import "./App.css";
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main';

import Nav from './components/Nav/Nav'

const App = () => {

  // function progressBarScroll() {
  //   let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
  //       height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
  //       scrolled = (winScroll / height) * 100;
  //   document.getElementById("progressBar").style.width = scrolled + "%";
  // }

  // window.onscroll = function () {
  //   progressBarScroll();
  // };

  window.onscroll = function() { progressScroll() };

function progressScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 80;
  // const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.height = scrolled + "vh";
}
  return (
    <div id="App">
      <Aside/>
      <Main/>
      <Nav id="progress-container" style={{background: "blue"}}/>
    </div>
  )
}

// 1 - Barra lateral
// 2 - Mapa
// 3 - Formulário
// 4 - Responsividade
// 4: no projects por flex wrap, flex invernt, por tudo centralizado e as img em baixo


// div q toda vez q eu scrollo ela aumenta ou diminui pra scrollbar

// arrumar a img qnd clica pra dar zoom

// div q mostra as imagens se ajustar ao tamanho delas para nao espremer ( pelo menos altura )

// quando abre nao funcionam as coisas. Por as funcs no react use effect?

// trocar o for q define pos por algum metodo q saia assim q ache (filter?);

// intersection observer




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
