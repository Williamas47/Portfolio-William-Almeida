import React from 'react'
import SvgFiles from '../SvgFiles';
import {StyledAside} from "./AsideStyles";
const Aside = () => {
    return (
        <StyledAside>
            {/* <svg></svg> */}
            <div id="asideTop">
            <SvgFiles icon="LogoWAS"/>
            <input type="radio" name="lenguage" value="English" id="EN"/>
            <label htmlFor="EN">EN</label>
            <input type="radio" name="lenguage" value="Portuguese" id="PT"/>
            <label htmlFor="PT">PT</label>
            </div>
            <div id="asideBottom">
            <a title="+55 (51) 98548-5107"href="https://web.whatsapp.com/send?phone=5551985485107&text=Olá,%20acessei%20o%20seu%20portfolio%20e%20gostaria%20de%20entrar%20em%20contato" rel="noreferrer" target="_blank">
                <SvgFiles icon="LogoWhatsapp"/>
            </a>
            <a title="williamas66@gmail.com" href="mailto:williamas66@gmail.com?subject=Sobre%20seu%20Portfolio" rel="noreferrer" target="_blank">
                <SvgFiles icon="LogoEmail"/>
            </a>
            <a title="Linkedin" href="https://www.linkedin.com/in/william-almeida-da-silveira-717206154/" rel="noreferrer" target="_blank">
                <SvgFiles icon="LogoLinkedin"/>
            </a>
            <a title="Github" href="https://github.com/Williamas47" rel="noreferrer" target="_blank">
                <SvgFiles icon="LogoGithub"/>
            </a>
            </div>

        </StyledAside>
    )
}

export default Aside
