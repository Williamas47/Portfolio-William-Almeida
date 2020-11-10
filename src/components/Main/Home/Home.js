import React from 'react'
import SvgFiles from '../../SvgFiles';
// import "./Home.styles.scss"
import {StyledHome} from "./HomeStyles";

const Home = () => {
    return (
    <StyledHome>
        <p>Hi, My name is</p>
        <h1><span>W</span>illiam <span>A</span>lmeida</h1>
        <h3>And i'm a Front-End Developer Jr.</h3>
        <p className="description">
            I’m From Brazil, Rio Grande do Sul, 21 Years,
             Cursando Análise e Desenvolvimento de Sistemas.
              Desenvolvo aplicações Web, desde o protótipo do design,
               utilizando ferramentas como Figma ou Adobe XD, Photoshop,
               Bootstrap, Sass e outros. No front end utilizo linguagens
              como React e JavaScript familiarizado com suas versões ES5 e ES6,
             juntamente com o HTML e CSS. Tenho conhecimentos sobre React Redux,
            React Router, React Hooks, FlexBox, GridCSS e sobre os fundamentos de UI e UX design.
        </p>
        <div id="mainButtons">
        <button id="contactMe">Contact Me</button>
        <button id="downloadCurriculum"><SvgFiles icon="PdfDownload"/></button>
        </div>
      
    </StyledHome>
    )
}

export default Home
