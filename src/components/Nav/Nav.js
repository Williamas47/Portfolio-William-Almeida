import React from 'react'
import {StyledNav} from "./NavStyles";
const Nav = () => {
    return (
        <StyledNav >
            <div id="progressBar" className="progress-bar"></div>
            <div id="navLinks">
                <a href="#Home"><p id="activeSection">Home</p></a>
                <a href="#Skills"><p>Skills</p></a>
                <a href="#Projects"><p>Projects</p></a>
                <a href="#Contact"><p>Contact</p></a>
            </div>

        </StyledNav>
    )
}

export default Nav
