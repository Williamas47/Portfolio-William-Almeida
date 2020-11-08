import React from 'react'
import {StyledNav} from "./NavStyles";
const Nav = () => {
    return (
        <StyledNav>
            {/* <svg></svg> */}
            <input type="radio" name="lenguage" value="English" id="EN"/>
            <label htmlFor="EN">EN</label>
            <input type="radio" name="lenguage" value="Portuguese" id="PT"/>
            <label htmlFor="PT">PT</label>

        </StyledNav>
    )
}

export default Nav
