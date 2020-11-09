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
            <SvgFiles icon="LogoWhatsapp"/>
            <SvgFiles icon="LogoEmail"/>
            <SvgFiles icon="LogoLinkedin"/>
            <SvgFiles icon="LogoGithub"/>
            </div>

        </StyledAside>
    )
}

export default Aside
