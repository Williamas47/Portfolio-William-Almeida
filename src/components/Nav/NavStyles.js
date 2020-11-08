import styled from "styled-components";

export const StyledNav = styled.nav`
    border: 2px solid green;
    width: 5%;
    height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: center; */
    position:fixed;
    left: 0;
    color: var(--text-primary-color);
    label{
        color: #8B8B8B;
        cursor: pointer;
    }
    input[type=radio]{
        display:none;
        &:checked + label{  
            cursor: default;
            color: var(--text-primary-color);
        }
    }
`;